import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  const session = await getAuthSession();
  try {
    if (!session) {
      return new Response('Unauthorized', { status: 401 });
    }
    const body = await req.json();
    const userTopic = await db.userTopics.findFirst({
      where: {
        userId: session.user.id,
      },
    });
    return new Response(userTopic?.topicId);
  } catch (error) {}
}
