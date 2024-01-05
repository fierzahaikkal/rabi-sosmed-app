import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const session = await getAuthSession();
  try {
    if (!session) {
      res.status(401).json({ message: 'Unauthorized' });
    }
    const userTopic = await db.userTopics.findFirst({
      where: {
        userId: session.user.id,
      },
    });
    return res.status(200).json(userTopic);
  } catch (error) {}
}
