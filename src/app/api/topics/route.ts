import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  const session = await getAuthSession();
  try {
    if (session) {
      const topic = await db.topics.create({
        data: {
          id: 'string',
          name: 'topic',
        },
      });
    }
  } catch (error) {}
}
