import { Container } from '@/components/layout/Container';

export const metadata = { title: 'Sobre' };

export default function SobrePage() {
  return (
    <Container className="py-24">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">Quem somos</p>
      <h1 className="mb-8 max-w-3xl text-4xl font-semibold md:text-5xl">
        Engenharia de dados e produto, sob o mesmo teto.
      </h1>
      <div className="prose prose-invert max-w-3xl text-muted">
        <p>
          A LM Technologia nasceu para resolver o gap entre times de dados e times de produto. Mantemos o ForBarber
          (React + Firebase) em produção há anos e projetamos ecossistemas analíticos em PostgreSQL, Apache Airflow,
          PySpark, Databricks e Power BI para operações que crescem sem quebrar.
        </p>
        <p>
          Nosso foco é entregar arquiteturas modulares, queries otimizadas e scripts seguros — com atenção especial a
          escalabilidade e isolamento multi-tenant.
        </p>
      </div>
    </Container>
  );
}
