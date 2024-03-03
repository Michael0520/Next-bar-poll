import { z } from 'zod';

const VoteTypeSchema = z.object({
  title: z.string(),
  votes: z.number(),
  color: z.string(),
});

export type VoteType = z.infer<typeof VoteTypeSchema>;
