import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { PostValidator } from '@/lib/validators/post';
import { NextResponse } from 'next/server';
import { title } from 'process';
import { z } from 'zod';

// export async function GET(req: Request) {
//   const url = new URL(req.url);
//   const session = await getAuthSession();
//   let followedTopicIds: string[] = [];

//   if (session) {
//     const followedTopic = await db.subscription.findMany({
//       where: {
//         userId: session.user.id,
//       },
//       include: {
//         topics: true,
//       },
//     });
//     followedTopicIds = followedTopic.map((topic) => topic.topics.id);
//   }
//   try {
//     const { limit, page, topicName } = z
//       .object({
//         limit: z.string(),
//         page: z.string(),
//         topicName: z.string().nullish().optional(),
//       })
//       .parse({
//         topicName: url.searchParams.get('topicName'),
//         limit: url.searchParams.get('limit'),
//         page: url.searchParams.get('page'),
//       });

//     let whereClause = {};

//     if (topicName) {
//       whereClause = {
//         topic: {
//           id: {
//             in: followedTopicIds,
//           },
//         },
//       };
//     }
//     const posts = await db.posts.findMany({
//       take: parseInt(limit),
//       skip: (parseInt(page) - 1) * parseInt(limit),
//       orderBy: {
//         created_at: 'desc',
//       },
//       include: {
//         topics: true,
//         likes: true,
//         comments: true,
//       },
//       where: whereClause,
//     });

//     return new NextResponse(JSON.stringify(posts));
//   } catch (error) {
//     return new NextResponse('Could not fetch post', { status: 500 });
//   }
// }

export async function GET(req: Request) {
  try {
    const session = await getAuthSession();
    // const token = headers().get('Authorization')?.split(' ')[1];

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const posts = await db.posts.findMany({
      include: {
        likes: true,
        comments: true,
        topics: true,
      },
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.log('there is an error:', error);
  } finally {
    await db.$disconnect();
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { content, topicId } = PostValidator.parse(body);
    const session = await getAuthSession();
    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const subscription = await db.subscription.findFirst({
      where: { topicId, userId: session.user.id },
    });

    if (!subscription) {
      return new Response('You must subscribe to following topics', { status: 401 });
    }

    await db.posts.create({
      data: { content, userId: session.user.id, topicId },
    });
    return new NextResponse('Succesfully posted', { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(error.message, { status: 400 });
    }
    return new NextResponse('Could not post at this time. Please try later', { status: 500 });
  }
}
