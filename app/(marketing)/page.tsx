import { Hero } from '@/components/sections/Hero';
import { Servicos } from '@/components/sections/Servicos';
import { StackTech } from '@/components/sections/StackTech';
import { CtaContato } from '@/components/sections/CtaContato';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Servicos />
      <StackTech />
      <CtaContato />
    </>
  );
}
