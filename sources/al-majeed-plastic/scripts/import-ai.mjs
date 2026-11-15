/**
 * Convert generated images into the exact WebP slots. Files are matched by key prefix.
 * Usage: node scripts/import-ai.mjs [source-dir]   (default reference/ai-batch1)
 */
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'images');
const SRC = process.argv[2] ?? path.join(ROOT, 'reference', 'ai-batch1');

const MAP = {
  'hero-plant': ['hero-plant.webp', 1920, 1080], 'hero-range': ['products/hero-range.webp', 1920, 1080],
  preforms: ['products/preforms.webp', 960, 600], household: ['products/household.webp', 960, 600],
  food: ['products/food.webp', 960, 600], gallons: ['products/gallons.webp', 960, 600],
  jars: ['products/jars.webp', 960, 600], medical: ['products/medical.webp', 960, 600],
  moulds: ['factory/moulds.webp', 1600, 1000], 'mould-cavity': ['factory/mould-cavity.webp', 900, 1200],
  cnc: ['factory/cnc.webp', 900, 1200], prototypes: ['factory/prototypes.webp', 900, 1200],
  qc: ['factory/qc.webp', 1200, 900], pallets: ['real/pallets.webp', 1200, 900], hall: ['about/hall.webp', 1600, 1000],
};
const keys = Object.keys(MAP).sort((a, b) => b.length - a.length);
for (const f of fs.readdirSync(SRC)) {
  const key = keys.find((k) => f.toLowerCase().startsWith(k));
  if (!key) { console.log('skip', f); continue; }
  const [file, w, h] = MAP[key];
  const out = path.join(OUT, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  await sharp(path.join(SRC, f)).resize(w, h, { fit: 'cover' }).webp({ quality: 78 }).toFile(out);
  console.log(f, '→', file);
}
