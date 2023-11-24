import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { Hash, createHash } from 'crypto';

export async function POST(req: Request) {
  const session = await getAuthSession();
  try {
    if (session) {
      const user = await db.users.findFirst({
        where: {
          id: session.user.id,
        },
      });
      const userTopic = await db.userTopics.create({
        data: {
          id: createHash(session.user.id),
          name: session.user.name,
        },
      });
    }
  } catch (error) {}
}
