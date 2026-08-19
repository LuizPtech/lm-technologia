import { z } from 'zod';

export const leadSchema = z.object({
  nome: z.string().min(2).max(120),
  empresa: z.string().min(2).max(120),
  email: z.string().email(),
  telefone: z.string().min(8).max(20).optional(),
  mensagem: z.string().min(10).max(2000),
  origem: z.string().max(60).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
