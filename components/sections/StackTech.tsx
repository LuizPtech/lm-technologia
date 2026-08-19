import { Container } from '@/components/layout/Container';

const stack = ['PostgreSQL', 'Apache Airflow', 'PySpark', 'Databricks', 'Power BI', 'React', 'Next.js', 'Firebase', 'TypeScript', 'Docker'];

export function StackTech() {
  return (
    <section className="border-t border-border/70 py-24">
      <Container>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">Stack</p>
        <h2 className="mb-10 text-3xl font-semibold md:text-4xl">Ferramentas de nível enterprise, dominadas em produção.</h2>
        <ul className="flex flex-wrap gap-2 font-mono text-sm">
          {stack.map((s) => (
            <li key={s} className="rounded-md border border-border px-3 py-1.5 text-muted transition hover:border-accent hover:text-text">
              {s}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
