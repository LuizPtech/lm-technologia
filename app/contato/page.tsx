import { Container } from '@/components/layout/Container';

export const metadata = { title: 'Contato' };

export default function ContatoPage() {
  return (
    <Container className="py-24">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">Fale com um engenheiro</p>
      <h1 className="mb-10 max-w-3xl text-4xl font-semibold md:text-5xl">Vamos mapear sua arquitetura.</h1>
      <form
        action="/api/lead"
        method="post"
        className="grid max-w-xl gap-4"
      >
        <input name="nome" placeholder="Nome" className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent" required />
        <input name="empresa" placeholder="Empresa" className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent" required />
        <input name="email" type="email" placeholder="E-mail corporativo" className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent" required />
        <input name="telefone" placeholder="Telefone (opcional)" className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent" />
        <textarea name="mensagem" placeholder="Conte brevemente o desafio" rows={5} className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent" required />
        <button type="submit" className="mt-2 rounded-md bg-royal px-6 py-3 text-sm font-medium text-white transition hover:bg-royal-hi">
          Enviar
        </button>
      </form>
      <p className="mt-6 text-xs text-muted">Retornamos em até 24 horas úteis.</p>
    </Container>
  );
}
