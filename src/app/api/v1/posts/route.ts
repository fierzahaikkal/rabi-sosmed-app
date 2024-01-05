import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const session = await getAuthSession();
  try {
    if (session) {
      const followingTopics: [string] = req.body.user.topics;
      const getPost: {} = await db.user.findMany({
        where: { id: session.user.id }, //&& topics: followingTopics}
      });
      res.status(200).json(getPost);
    }
  } catch (error) {}
}
