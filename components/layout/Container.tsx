import { cn } from '@/lib/cn';

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('container mx-auto px-6', className)}>{children}</div>;
}
