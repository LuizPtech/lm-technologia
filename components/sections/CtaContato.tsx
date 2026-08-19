import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export function CtaContato() {
  return (
    <section className="border-t border-border/70 py-24">
      <Container>
        <div className="rounded-2xl border border-border bg-surface p-12 md:p-16">
          <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            Vamos mapear a arquitetura ideal para o seu dado.
          </h2>
          <p className="mt-4 max-w-xl text-muted">Diagnóstico inicial gratuito. Resposta em até 24 horas úteis.</p>
          <Link
            href="/contato"
            className="mt-8 inline-flex rounded-md bg-royal px-6 py-3 text-sm font-medium text-white transition hover:bg-royal-hi"
          >
            Agendar conversa →
          </Link>
        </div>
      </Container>
    </section>
  );
}
