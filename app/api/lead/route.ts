import { NextResponse } from 'next/server';
import { leadSchema } from '@/lib/validators/lead';

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'invalid_payload', issues: parsed.error.flatten() }, { status: 400 });
  }

  // TODO: integrar com Resend / SMTP / CRM.
  console.info('[lead]', parsed.data);
  return NextResponse.json({ ok: true });
}
