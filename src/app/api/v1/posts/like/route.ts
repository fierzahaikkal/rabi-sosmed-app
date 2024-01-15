import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { PostLikeValidator } from '@/lib/validators/like';
import { CachedPost } from '@/types/redis';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const CACHE_AFTER_LIKED = 1;

// export async function PATCH(req: Request) {
//   try {
//     const body = req.json();
//     const { postId, like } = PostLikeValidator.parse(body);
//     const session = await getAuthSession();

//     if (!session?.user) {
//       return new NextResponse('Unauthorized', { status: 401 });
//     }

//     const existingLike = await db.likes.findFirst({
//       where: {
//         userId: session.user.id,
//         postId,
//       },
//     });

//     const post = await db.posts.findUnique({
//       where: {
//         id: postId,
//       },
//       include: {
//         likes: true,
//       },
//     });

//     if (!post) {
//       return new NextResponse('Post not found', { status: 404 });
//     }

//     if (existingLike) {
//       if (existingLike.like === like) {
//         await db.likes.delete({
//           where: {
//             userId_postId: {
//               postId,
//               userId: session.user.id,
//             },
//           },
//         });

//         const likeCount = post.likes.reduce((acc, value) => {
//           if (value.like === true) return acc + 1;
//           if (value.like === false) return acc - 1;
//           return acc;
//         }, 0);

//         if (likeCount >= CACHE_AFTER_LIKED) {
//           const cachePayload: CachedPost = {
//             content: JSON.stringify(post.content),
//             id: post.id,
//             currentLike: null,
//             createdAt: post.created_at,
//           };
//           // await redis.hset(`post:${postId}`, cachePayload)
//         }
//         return new NextResponse('OK', { status: 200 });
//       }

//       await db.likes.update({
//         where: {
//           userId_postId: {
//             postId,
//             userId: session.user.id,
//           },
//         },
//         data: {
//           like: like,
//         },
//       });
//     }
//   } catch (error) {}
// }

export async function POST(req: Request) {
  try {
    const body = req.json();
    const { postId } = PostLikeValidator.parse(body);

    const session = await getAuthSession();

    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const post = await db.posts.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      return new NextResponse('Post did not found', { status: 404 });
    }

    await db.likes.create({
      data: {
        userId: session.user.id,
        postId: post.id,
      },
    });
    return new NextResponse('Liked', { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(error.message, { status: 400 });
    }
    return new NextResponse('Could no like at this time. Please try later');
  }
}
