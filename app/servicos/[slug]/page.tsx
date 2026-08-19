import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Container } from '@/components/layout/Container';
import { getDoc, listDocs } from '@/lib/mdx';

interface FM { title: string; resumo?: string }

export async function generateStaticParams() {
  const docs = await listDocs('servicos');
  return docs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const doc = await getDoc<FM>('servicos', params.slug);
  return { title: doc?.frontmatter.title ?? 'Serviço' };
}

export default async function ServicoPage({ params }: { params: { slug: string } }) {
  const doc = await getDoc<FM>('servicos', params.slug);
  if (!doc) notFound();

  return (
    <Container className="py-24">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">Serviço</p>
      <h1 className="mb-8 text-4xl font-semibold md:text-5xl">{doc.frontmatter.title}</h1>
      <article className="prose prose-invert max-w-3xl">
        <MDXRemote source={doc.content} />
      </article>
    </Container>
  );
}
