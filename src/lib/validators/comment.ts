import { z } from 'zod';

export const CommentValidator = z.object({
  id: z.string(),
  userId: z.string(),
  postId: z.string(),
  content: z.string(),
  created_at: z.date(),
});

export const ShowCommentValidator = z.object({
  id: z.string(),
  user: z.string(),
  content: z.string(),
  created_at: z.date(),
});

export type CommentRequest = z.infer<typeof CommentValidator>;
export type ShowCommentPayload = z.infer<typeof ShowCommentValidator>;
