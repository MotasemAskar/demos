/**
 * Prefix every root-relative URL in dist/ with BASE so the static build works
 * from a sub-path (GitHub Pages project site). Usage: node scripts/rebase.mjs /demos/slug
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const BASE = (process.argv[2] ?? '').replace(/\/+$/, '');
if (!BASE) { console.log('no base given — skipped'); process.exit(0); }

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);

const fix = (u) => (u.startsWith('/') && !u.startsWith('//') && !u.startsWith(BASE + '/') ? BASE + u : u);

for (const f of walk(DIST)) {
  if (f.endsWith('.html')) {
    let s = fs.readFileSync(f, 'utf8');
    s = s.replace(/\b(href|src|action|poster)=("|')(\/[^"']*)\2/g, (_, a, q, u) => `${a}=${q}${fix(u)}${q}`);
    s = s.replace(/\bsrcset=("|')([^"']*)\1/g, (_, q, v) =>
      `srcset=${q}${v.split(',').map((p) => p.trim().replace(/^(\S+)/, (u) => fix(u))).join(', ')}${q}`);
    s = s.replace(/url\((['"]?)(\/[^)'"]*)\1\)/g, (_, q, u) => `url(${q}${fix(u)}${q})`);
    fs.writeFileSync(f, s);
  } else if (f.endsWith('.css')) {
    let s = fs.readFileSync(f, 'utf8');
    s = s.replace(/url\((['"]?)(\/[^)'"]*)\1\)/g, (_, q, u) => `url(${q}${fix(u)}${q})`);
    fs.writeFileSync(f, s);
  }
}
console.log('rebased to', BASE);
