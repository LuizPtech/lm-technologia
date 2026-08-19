/**
 * Sincroniza conteúdo do vault Obsidian para /content.
 * Remove sintaxe Obsidian-specific ([[wikilinks]], callouts) e grava como MDX.
 *
 * Configuração via env:
 *   OBSIDIAN_VAULT=/caminho/para/obsidian-vauch/Produtos_Ativos/LM_Technologia
 */
import fs from 'node:fs/promises';
import path from 'node:path';

const VAULT = process.env.OBSIDIAN_VAULT;
const TARGET = path.join(process.cwd(), 'content');

async function walk(dir: string): Promise<string[]> {
  const out: string[] = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (/\.mdx?$/.test(entry.name)) out.push(full);
  }
  return out;
}

function normalize(raw: string): string {
  return raw
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, label) => label ?? target)
    .replace(/^>\s*\[!(\w+)\][^\n]*\n?/gm, '')
    .replace(/^%%[\s\S]*?%%$/gm, '');
}

async function main() {
  if (!VAULT) {
    console.warn('[sync-obsidian] OBSIDIAN_VAULT não definido — pulando.');
    return;
  }
  const files = await walk(VAULT);
  for (const src of files) {
    const rel = path.relative(VAULT, src);
    const dest = path.join(TARGET, rel).replace(/\.md$/, '.mdx');
    await fs.mkdir(path.dirname(dest), { recursive: true });
    const raw = await fs.readFile(src, 'utf8');
    await fs.writeFile(dest, normalize(raw), 'utf8');
  }
  console.info(`[sync-obsidian] ${files.length} arquivo(s) sincronizado(s).`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
