import { z } from 'zod';

export const TopicValidator = z.object({
  id: z.string().min(3),
  name: z.string().min(3, { message: 'Topic name must be at least 3 characters long' }),
  creatorId: z.string(),
});
export const FollowTopicValidator = z.object({ topicId: z.string() });

export type CreateTopicPayload = z.infer<typeof TopicValidator>;
export type FollowTopicPayload = z.infer<typeof FollowTopicValidator>;
export type ShowTopicPayload = z.infer<typeof TopicValidator>;
