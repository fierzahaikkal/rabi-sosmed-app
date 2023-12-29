import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { Hash, createHash } from 'crypto';
import { GET } from '../auth/[...nextauth]/route';
import { NextApiRequest, NextApiResponse } from 'next';
import Topics from '@/app/topics/page';

// export async function POST(req: NextApiRequest) {
//   const session = await getAuthSession();
//   try {
//     if (session) {
//       const user = await db.users.findFirst({
//         where: {
//           id: session.user.id,
//         },
//       });
//       const userTopic = await db.userTopics.create({
//         data: {
//           id: createHash(session.user.id),
//           name: session.user.name,
//         },
//       });
//     }
//   } catch (error) {}
// }

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const session = await getAuthSession();
  try {
    if (session) {
      const topic = await db.topics.findMany();
      res.status(200).json(topic);
    }
  } catch (error) {
    console.log('there is an error:', error);
  }
}

export async function PATCH(req: NextApiRequest) {
  const session = await getAuthSession();
  try {
    if (session) {
      const { id } = req.body;
      const topic = await db.topics.update({
        where: { id },
      });
    }
  } catch (error) {
    console.log('there is an error:', error);
  }
}
