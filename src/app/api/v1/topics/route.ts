import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { Hash, createHash } from 'crypto';
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

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const session = await getAuthSession();
  try {
    if (session) {
      const newTopic = req.body;
      const postTopic = await db.topics.create({
        data: newTopic,
      });
      res.status(200).json(postTopic);
    }
  } catch (error) {
    console.log('there is an error:', error);
  }
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  const session = await getAuthSession();
  try {
    if (session) {
      const topicId = req.body.id;
      const deleteTopic = await db.topics.delete({
        where: { id: topicId },
      });
      res.status(200).json(deleteTopic);
    }
  } catch (error) {
    console.log('there is an error:', error);
  }
}
