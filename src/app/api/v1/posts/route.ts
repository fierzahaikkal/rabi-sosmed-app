import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { z } from 'zod';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const session = await getAuthSession();
  let followedTopicIds: string[] = [];

  if (session) {
    const followedTopic = await db.subscription.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        topics: true,
      },
    });
    followedTopicIds = followedTopic.map((topic) => topic.topics.id);
  }
  try {
    const { limit, page, topicName } = z
      .object({
        limit: z.string(),
        page: z.string(),
        topicName: z.string().nullish().optional(),
      })
      .parse({
        topicName: url.searchParams.get('topicName'),
        limit: url.searchParams.get('limit'),
        page: url.searchParams.get('page'),
      });

    let whereClause = {};

    if (topicName) {
      whereClause = {};
    }
  } catch (error) {}
}
