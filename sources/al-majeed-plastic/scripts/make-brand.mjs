/**
 * Favicons + Open Graph image from the vector monogram (public/brand/monogram.svg).
 * Usage: npm run brand
 */
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUB = path.join(ROOT, 'public');
const mono = await fs.readFile(path.join(PUB, 'brand', 'monogram.svg'));

const square = (size, bg, margin = 0.12) =>
  sharp(mono, { density: 600 })
    .resize(Math.round(size * (1 - margin * 2)), Math.round(size * (1 - margin * 2)), { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer()
    .then((b) => sharp({ create: { width: size, height: size, channels: 4, background: bg } }).composite([{ input: b, gravity: 'centre' }]).png().toBuffer());

const clear = { r: 0, g: 0, b: 0, alpha: 0 };
await fs.copyFile(path.join(PUB, 'brand', 'monogram.svg'), path.join(PUB, 'favicon.svg'));
const icoPngs = await Promise.all([16, 32, 48].map((s) => square(s, clear, 0.04)));
await fs.writeFile(path.join(PUB, 'favicon.ico'), await pngToIco(icoPngs));
await fs.writeFile(path.join(PUB, 'apple-touch-icon.png'), await square(180, { r: 255, g: 255, b: 255, alpha: 1 }));

// OG image 1200x630
const W = 1200, H = 630;
const stripes = ['#22b5c9','#22b5c9','#22b5c9','#9adbe5','#cfeef3','#cfeef3']
  .map((c, i) => `<rect x="${(i * W) / 6}" y="${H - 14}" width="${W / 6}" height="14" fill="${c}"/>`).join('');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0a3d4a"/><stop offset="1" stop-color="#0b2545"/></linearGradient></defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <text x="400" y="290" font-family="Montserrat, Segoe UI, Arial" font-weight="800" font-size="96" fill="#ffffff">AL MAJEED</text>
  <text x="404" y="352" font-family="Montserrat, Segoe UI, Arial" font-weight="700" font-size="34" letter-spacing="8" fill="#ffffff">PLASTIC INDUSTRIES</text>
  <text x="404" y="440" font-family="Segoe UI, Arial" font-size="32" fill="#9adbe5">PET &amp; HDPE packaging manufacturer</text>
  <text x="404" y="486" font-family="Segoe UI, Arial" font-size="28" fill="#ffffff" opacity="0.75">Made in Jordan since 1991</text>
  ${stripes}
</svg>`;
const monoBig = await sharp(mono, { density: 600 }).resize(250, 300, { fit: 'contain', background: clear }).toBuffer();
await sharp(Buffer.from(svg)).composite([{ input: monoBig, left: 100, top: 150 }]).png().toFile(path.join(PUB, 'brand', 'og-default.png'));
console.log('brand assets written');
