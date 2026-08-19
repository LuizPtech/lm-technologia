import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export interface Doc<T = Record<string, unknown>> {
  slug: string;
  frontmatter: T;
  content: string;
}

export async function listDocs<T = Record<string, unknown>>(kind: 'servicos' | 'cases' | 'posts'): Promise<Doc<T>[]> {
  const dir = path.join(CONTENT_DIR, kind);
  const files = await fs.readdir(dir).catch(() => []);
  const docs = await Promise.all(
    files
      .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
      .map(async (f) => {
        const raw = await fs.readFile(path.join(dir, f), 'utf8');
        const { data, content } = matter(raw);
        return { slug: f.replace(/\.(md|mdx)$/, ''), frontmatter: data as T, content };
      }),
  );
  return docs;
}

export async function getDoc<T = Record<string, unknown>>(kind: string, slug: string): Promise<Doc<T> | null> {
  for (const ext of ['.mdx', '.md']) {
    const file = path.join(CONTENT_DIR, kind, `${slug}${ext}`);
    try {
      const raw = await fs.readFile(file, 'utf8');
      const { data, content } = matter(raw);
      return { slug, frontmatter: data as T, content };
    } catch {}
  }
  return null;
}
