import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { FollowTopicValidator, TopicValidator } from '@/lib/validators/topic';

export async function GET(req: Request) {
  try {
    const session = await getAuthSession();
    // const token = headers().get('Authorization')?.split(' ')[1];

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    const topics = await db.topics.findMany();
    return NextResponse.json(topics);
  } catch (error) {
    console.log('there is an error:', error);
  } finally {
    await db.$disconnect();
  }
}

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();
    // const token = headers().get('Authorization')?.split(' ')[1];

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    const body = req.json();
    const { name } = TopicValidator.parse(body);
    const id = crypto.randomUUID();

    //Check if topic already exist
    const topicExists = await db.topics.findFirst({ where: { name } });

    if (topicExists) {
      return NextResponse.json({ message: 'Topic already exits' }, { status: 409 });
    }

    //create topics
    const topic = await db.topics.create({
      data: {
        id,
        name,
        creatorId: session.user.id,
      },
    });

    await db.subscription.create({
      data: {
        userId: session.user.id,
        topicId: topic.id,
      },
    });

    return NextResponse.json(topic.name);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(error.message, { status: 422 });
    }
    return NextResponse.json({ message: 'Could not create topic' }, { status: 500 });
  } finally {
    await db.$disconnect();
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getAuthSession();
    // const token = headers().get('Authorization')?.split(' ')[1];

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    const body = req.json();
    const { topicId } = FollowTopicValidator.parse(body);
    const deleteTopic = await db.topics.delete({
      where: { id: topicId },
    });
    return NextResponse.json(deleteTopic);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(error.message, { status: 400 });
    }
    return NextResponse.json(
      { message: 'Could not delete this topic, please try later' },
      { status: 500 }
    );
  }
}
