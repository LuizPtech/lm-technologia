import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { listDocs } from '@/lib/mdx';

export const metadata = { title: 'Blog' };

interface PostFM { title: string; data?: string; resumo?: string }

export default async function BlogPage() {
  const docs = await listDocs<PostFM>('posts');
  const posts = docs.sort((a, b) => (b.frontmatter.data ?? '').localeCompare(a.frontmatter.data ?? ''));

  return (
    <Container className="py-24">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">Blog</p>
      <h1 className="mb-12 text-4xl font-semibold md:text-5xl">Notas técnicas do time.</h1>
      {posts.length === 0 ? (
        <p className="text-muted">Nenhum post publicado ainda.</p>
      ) : (
        <ul className="divide-y divide-border border-y border-border">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="group flex items-baseline justify-between gap-6 py-6 transition hover:text-accent">
                <span className="text-lg font-medium">{p.frontmatter.title ?? p.slug}</span>
                {p.frontmatter.data && <span className="font-mono text-xs text-muted">{p.frontmatter.data}</span>}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
