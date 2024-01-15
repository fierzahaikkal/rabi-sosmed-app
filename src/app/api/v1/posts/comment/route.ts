import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { CommentValidator } from '@/lib/validators/comment';
import { NextResponse } from 'next/server';
import { z } from 'zod';

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { postId, content } = CommentValidator.parse(body);
    const session = await getAuthSession();

    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    await db.comments.create({
      data: {
        content,
        postId,
        userId: session.user.id,
      },
    });
    return new NextResponse('OK');
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(error.message, { status: 400 });
    }
    return new NextResponse('Could not comment to post at this time. Please try later', {
      status: 500,
    });
  }
}
