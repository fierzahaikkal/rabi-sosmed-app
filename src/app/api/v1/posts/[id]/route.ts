import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import { getAuthSession } from '@/lib/auth';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export async function GET(_req: Request, { params }: Params) {
  try {
    const session = await getAuthSession();
    // const token = headers().get('Authorization')?.split(' ')[1];

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const getUserId = params.id;
    console.log(getUserId);
    const post = await db.posts.findFirst({
      where: { userId: getUserId },
      include: {
        comments: {
          include: {
            user: true,
          },
        },
      },
    });
    if (!post) {
      return new NextResponse('Post not found', { status: 404 });
    }
    return new NextResponse(JSON.stringify(post));
  } catch (error) {
    return new NextResponse('Unable to fetch ppost', { status: 500 });
  }
}
