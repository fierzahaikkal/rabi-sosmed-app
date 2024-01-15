import { z } from 'zod';

export const PostLikeValidator = z.object({
  postId: z.string(),
  userId: z.string(),
  // like: z.boolean(),
});

export type PostLikeRequest = z.infer<typeof PostLikeValidator>;
