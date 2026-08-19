import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { listDocs } from '@/lib/mdx';

export const metadata = { title: 'Serviços' };

interface ServicoFM { title: string; resumo?: string; ordem?: number }

export default async function ServicosPage() {
  const docs = await listDocs<ServicoFM>('servicos');
  const items = docs.sort((a, b) => (a.frontmatter.ordem ?? 99) - (b.frontmatter.ordem ?? 99));

  return (
    <Container className="py-24">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">Serviços</p>
      <h1 className="mb-12 text-4xl font-semibold md:text-5xl">Áreas de atuação</h1>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
        {items.map((d) => (
          <Link key={d.slug} href={`/servicos/${d.slug}`} className="group bg-surface p-8 transition hover:bg-bg">
            <h2 className="mb-2 text-xl font-medium group-hover:text-accent">{d.frontmatter.title ?? d.slug}</h2>
            {d.frontmatter.resumo && <p className="text-sm text-muted">{d.frontmatter.resumo}</p>}
          </Link>
        ))}
      </div>
    </Container>
  );
}
