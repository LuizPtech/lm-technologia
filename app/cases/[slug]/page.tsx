import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Container } from '@/components/layout/Container';
import { getDoc, listDocs } from '@/lib/mdx';

interface CaseFM { cliente: string; setor?: string; resultado?: string; stack?: string[] }

export async function generateStaticParams() {
  const docs = await listDocs('cases');
  return docs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const doc = await getDoc<CaseFM>('cases', params.slug);
  return { title: doc?.frontmatter.cliente ?? 'Case' };
}

export default async function CasePage({ params }: { params: { slug: string } }) {
  const doc = await getDoc<CaseFM>('cases', params.slug);
  if (!doc) notFound();

  return (
    <Container className="py-24">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">{doc.frontmatter.setor ?? 'Case'}</p>
      <h1 className="mb-4 text-4xl font-semibold md:text-5xl">{doc.frontmatter.cliente}</h1>
      {doc.frontmatter.resultado && <p className="mb-10 text-lg text-muted">{doc.frontmatter.resultado}</p>}
      <article className="prose prose-invert max-w-3xl">
        <MDXRemote source={doc.content} />
      </article>
    </Container>
  );
}
