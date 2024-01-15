import { z } from 'zod';

export const PostValidator = z.object({
  content: z
    .string()
    .min(3, { message: 'Title must be at least 3 characters long' })
    .max(256, { message: 'Title must be at less than 256 characters long.' }),
  topicId: z.string(),
});

export const ShowPostValidator = z.object({
  id: z.string(),
  userId: z.string(),
  content: z
    .string()
    .min(3, { message: 'Title must be at least 3 characters long' })
    .max(256, { message: 'Title must be at less than 256 characters long.' }),
  topicId: z.string(),
  comments: z.array(
    z.object({
      id: z.string(),
      userId: z.string(),
      postId: z.string(),
      content: z.string(),
      created_at: z.date(),
      user: z.object({ name: z.string() }),
    })
  ),
  created_at: z.date(),
});

export type PostCreationRequest = z.infer<typeof PostValidator>;
export type ShowPostPayload = z.infer<typeof ShowPostValidator>;
