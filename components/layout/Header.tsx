import Link from 'next/link';
import { Container } from './Container';

const nav = [
  { href: '/servicos', label: 'Serviços' },
  { href: '/cases', label: 'Cases' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/blog', label: 'Blog' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-bg/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-sm tracking-tight">
          <span className="text-accent">LM</span> Technologia
        </Link>
        <nav className="hidden gap-8 text-sm text-muted md:flex">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="transition hover:text-text">
              {i.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contato"
          className="rounded-md border border-royal bg-royal px-4 py-2 text-sm font-medium text-white transition hover:bg-royal-hi"
        >
          Falar com um engenheiro
        </Link>
      </Container>
    </header>
  );
}
