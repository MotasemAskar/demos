/**
 * Branded stand-in art for every image slot, so the demo looks finished before the
 * AI photos exist. Drop real WebPs over these files (same names) or run import-ai.
 * Never overwrites an existing image unless --force is passed.
 */
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'images');

// glyphs drawn in a 100x100 box
const G = {
  preform: 'M40 8h20v6H40zM42 14h16v6H42zM44 20h12v62a6 6 0 0 1-12 0z',
  bottle: 'M42 4h16v10c0 5 12 9 12 22v54a6 6 0 0 1-6 6H36a6 6 0 0 1-6-6V36c0-13 12-17 12-22zM30 52h40',
  gallon: 'M30 26h40a8 8 0 0 1 8 8v54a6 6 0 0 1-6 6H28a6 6 0 0 1-6-6V40l8-14zM40 14h14v12H40zM58 40h12v20H58',
  jar: 'M24 14h52v12H24zM20 26h60v58a8 8 0 0 1-8 8H28a8 8 0 0 1-8-8zM20 44h60',
  mould: 'M8 20h38v62H8zM54 20h38v62H54zM46 30c-8 4-8 10-8 18v20a6 6 0 0 0 8 4M54 30c8 4 8 10 8 18v20a6 6 0 0 1-8 4M40 20v-8h20v8',
  cnc: 'M50 30a20 20 0 1 0 0.01 0zM50 42a8 8 0 1 0 0.01 0zM50 6v12M50 82v12M6 50h12M82 50h12M19 19l8 8M73 73l8 8M19 81l8-8M73 27l8-8',
  shield: 'M50 6l34 12v26c0 24-16 40-34 48C32 84 16 68 16 44V18zM34 48l11 11 21-22',
  pallet: 'M10 80h80M14 80v10M50 80v10M86 80v10M14 50h34v30H14zM52 50h34v30H52zM32 20h36v30H32z',
};
const SLOTS = [
  { file: 'hero-plant.webp', w: 1920, h: 1080, g: ['preform', 'bottle', 'gallon', 'jar'] },
  { file: 'products/hero-range.webp', w: 1920, h: 1080, g: ['bottle', 'gallon', 'jar', 'preform', 'bottle'] },
  { file: 'products/preforms.webp', w: 960, h: 600, g: ['preform', 'preform', 'preform'] },
  { file: 'products/household.webp', w: 960, h: 600, g: ['bottle', 'bottle'] },
  { file: 'products/food.webp', w: 960, h: 600, g: ['bottle', 'jar'] },
  { file: 'products/gallons.webp', w: 960, h: 600, g: ['gallon', 'gallon'] },
  { file: 'products/jars.webp', w: 960, h: 600, g: ['jar', 'jar', 'jar'] },
  { file: 'products/medical.webp', w: 960, h: 600, g: ['shield', 'bottle'] },
  { file: 'factory/moulds.webp', w: 1600, h: 1000, g: ['mould'] },
  { file: 'factory/mould-cavity.webp', w: 900, h: 1200, g: ['mould'] },
  { file: 'factory/cnc.webp', w: 900, h: 1200, g: ['cnc'] },
  { file: 'factory/prototypes.webp', w: 900, h: 1200, g: ['bottle', 'mould'] },
  { file: 'factory/qc.webp', w: 1200, h: 900, g: ['shield'] },
  { file: 'real/pallets.webp', w: 1200, h: 900, g: ['pallet'] },
  { file: 'about/hall.webp', w: 1600, h: 1000, g: ['bottle', 'bottle', 'bottle', 'bottle'] },
];

const svgFor = ({ w, h, g }) => {
  const size = Math.min(h * 0.46, (w * 0.8) / g.length);
  const gap = size * 0.18;
  const total = g.length * size + (g.length - 1) * gap;
  const x0 = (w - total) / 2, y0 = (h - size) / 2;
  const glyphs = g.map((k, i) => `<g transform="translate(${x0 + i * (size + gap)} ${y0}) scale(${size / 100})"><path d="${G[k]}" fill="none" stroke="#7fd8e4" stroke-width="${2.2 * 100 / size * (size / 100) * 1.2}" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke" opacity="0.9"/></g>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b2545"/><stop offset="1" stop-color="#0a3d4a"/></linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#22b5c9" stop-opacity="0.35"/><stop offset="1" stop-color="#22b5c9" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0H0V36" fill="none" stroke="#ffffff" stroke-opacity="0.05"/></pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#grid)"/>
  <ellipse cx="${w / 2}" cy="${h / 2}" rx="${w * 0.45}" ry="${h * 0.45}" fill="url(#glow)"/>
  <g style="stroke-width:3">${glyphs.replace(/stroke-width="[^"]*"/g, `stroke-width="${Math.max(2.5, w / 420)}"`)}</g>
</svg>`;
};

const force = process.argv.includes('--force');
for (const slot of SLOTS) {
  const outPath = path.join(OUT, slot.file);
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  if (!force) {
    try { await fs.access(outPath); console.log(`${slot.file}  exists — skipped`); continue; } catch {}
  }
  await sharp(Buffer.from(svgFor(slot))).webp({ quality: 80 }).toFile(outPath);
  console.log(`${slot.file}  ${slot.w}x${slot.h}`);
}
