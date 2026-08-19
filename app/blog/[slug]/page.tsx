import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Container } from '@/components/layout/Container';
import { getDoc, listDocs } from '@/lib/mdx';

interface PostFM { title: string; data?: string; resumo?: string }

export async function generateStaticParams() {
  const docs = await listDocs('posts');
  return docs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const doc = await getDoc<PostFM>('posts', params.slug);
  return { title: doc?.frontmatter.title ?? 'Post' };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const doc = await getDoc<PostFM>('posts', params.slug);
  if (!doc) notFound();

  return (
    <Container className="py-24">
      {doc.frontmatter.data && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">{doc.frontmatter.data}</p>
      )}
      <h1 className="mb-8 text-4xl font-semibold md:text-5xl">{doc.frontmatter.title}</h1>
      <article className="prose prose-invert max-w-3xl">
        <MDXRemote source={doc.content} />
      </article>
    </Container>
  );
}
