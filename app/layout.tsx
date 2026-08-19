import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });

export const metadata: Metadata = {
  title: { default: 'LM Technologia — Engenharia de Dados & Produto', template: '%s · LM Technologia' },
  description:
    'Ecossistemas de dados robustos (PostgreSQL, Airflow, PySpark, Databricks, Power BI) e produtos digitais como o ForBarber.',
  metadataBase: new URL('https://lmtechnologia.com.br'),
  openGraph: { type: 'website', locale: 'pt_BR' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-bg text-text font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
