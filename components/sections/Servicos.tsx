import { Container } from '@/components/layout/Container';
import { Database, GitBranch, LineChart, Boxes } from 'lucide-react';

const items = [
  { icon: Database, title: 'Engenharia de Dados', desc: 'Pipelines em Airflow + PySpark, modelagem dimensional, Data Lake em Databricks.' },
  { icon: LineChart, title: 'Business Intelligence', desc: 'Dashboards executivos em Power BI com governança e SLA.' },
  { icon: GitBranch, title: 'Desenvolvimento de Produto', desc: 'React + Firebase escaláveis, arquitetura multi-tenant, CI/CD.' },
  { icon: Boxes, title: 'Consultoria em Arquitetura', desc: 'Diagnóstico, roadmap técnico e migração para nuvem.' },
];

export function Servicos() {
  return (
    <section className="border-t border-border/70 py-24">
      <Container>
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">O que fazemos</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Um único parceiro para todo o ciclo técnico.</h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group bg-surface p-8 transition hover:bg-bg">
              <Icon className="mb-6 h-6 w-6 text-accent" strokeWidth={1.5} />
              <h3 className="mb-2 text-lg font-medium">{title}</h3>
              <p className="text-sm leading-relaxed text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
