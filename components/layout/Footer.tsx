import { Container } from './Container';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/70 py-10 text-sm text-muted">
      <Container className="flex flex-col justify-between gap-4 md:flex-row">
        <p>© {new Date().getFullYear()} LM Technologia. Todos os direitos reservados.</p>
        <p className="font-mono">contato@lmtechnologia.com.br</p>
      </Container>
    </footer>
  );
}
