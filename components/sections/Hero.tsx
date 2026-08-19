import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { GridBackground } from '@/components/viz/GridBackground';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg bg-grid-fade">
      <GridBackground />
      <Container className="relative py-28 md:py-40">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Engenharia · Dados · Produto
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
          Arquiteturas de dados que <span className="text-accent">escalam</span>.
          <br />
          Produtos digitais que <span className="text-accent">convertem</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Da ingestão em Airflow ao dashboard em Power BI, do backend Firebase ao React em produção — a LM Technologia
          entrega o stack completo de tecnologia da sua operação.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contato"
            className="rounded-md bg-royal px-6 py-3 text-sm font-medium text-white transition hover:bg-royal-hi"
          >
            Iniciar um projeto
          </Link>
          <Link
            href="/cases"
            className="rounded-md border border-border px-6 py-3 text-sm font-medium text-text transition hover:border-accent"
          >
            Ver cases →
          </Link>
        </div>
      </Container>
    </section>
  );
}
