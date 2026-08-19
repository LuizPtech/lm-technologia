import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { listDocs } from '@/lib/mdx';

export const metadata = { title: 'Cases' };

interface CaseFM { cliente: string; setor?: string; resultado?: string; stack?: string[] }

export default async function CasesPage() {
  const docs = await listDocs<CaseFM>('cases');

  return (
    <Container className="py-24">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">Cases</p>
      <h1 className="mb-12 text-4xl font-semibold md:text-5xl">O que entregamos, na prática.</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {docs.map((d) => (
          <Link key={d.slug} href={`/cases/${d.slug}`} className="rounded-2xl border border-border bg-surface p-8 transition hover:border-accent">
            <p className="mb-1 font-mono text-xs uppercase tracking-widest text-muted">{d.frontmatter.setor}</p>
            <h2 className="mb-3 text-2xl font-medium">{d.frontmatter.cliente}</h2>
            {d.frontmatter.resultado && <p className="mb-4 text-sm text-muted">{d.frontmatter.resultado}</p>}
            {d.frontmatter.stack && (
              <ul className="flex flex-wrap gap-2 font-mono text-xs">
                {d.frontmatter.stack.map((s) => (
                  <li key={s} className="rounded border border-border px-2 py-1 text-muted">{s}</li>
                ))}
              </ul>
            )}
          </Link>
        ))}
      </div>
    </Container>
  );
}
