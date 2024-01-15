import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create users
  const user1 = await prisma.users.create({
    data: {
      username: 'user1',
      email: 'user1@example.com',
      password_hash: 'hashed_password1',
      profile_image_url: 'user1_profile.jpg',
    },
  });

  const user2 = await prisma.users.create({
    data: {
      username: 'user2',
      email: 'user2@example.com',
      password_hash: 'hashed_password2',
      profile_image_url: 'user2_profile.jpg',
    },
  });

  // Create topics
  const topic1 = await prisma.topics.create({
    data: {
      name: 'Topic 1',
    },
  });

  const topic2 = await prisma.topics.create({
    data: {
      name: 'Topic 2',
    },
  });

  // Create posts
  const post1 = await prisma.posts.create({
    data: {
      users: { connect: { id: user1.id } },
      content: 'Post 1 by user1',
      topics: { connect: { id: topic1.id } },
    },
  });

  const post2 = await prisma.posts.create({
    data: {
      users: { connect: { id: user2.id } },
      content: 'Post 1 by user2',
      topics: { connect: { id: topic2.id } },
    },
  });

  // Create comments
  const comment1 = await prisma.comments.create({
    data: {
      users: { connect: { id: user1.id } },
      posts: { connect: { id: post1.id } },
      content: 'Comment on post 1 by user1',
    },
  });

  const comment2 = await prisma.comments.create({
    data: {
      users: { connect: { id: user2.id } },
      posts: { connect: { id: post1.id } },
      content: 'Comment on post 1 by user2',
    },
  });

  // Create likes
  const like1 = await prisma.likes.create({
    data: {
      users: { connect: { id: user1.id } },
      posts: { connect: { id: post1.id } },
    },
  });

  const like2 = await prisma.likes.create({
    data: {
      users: { connect: { id: user2.id } },
      posts: { connect: { id: post2.id } },
    },
  });

  // Create replies
  const reply1 = await prisma.replies.create({
    data: {
      users: { connect: { id: user1.id } },
      comments: { connect: { id: comment1.id } },
      content: 'Reply to comment 1 by user1',
    },
  });

  const reply2 = await prisma.replies.create({
    data: {
      users: { connect: { id: user2.id } },
      comments: { connect: { id: comment2.id } },
      content: 'Reply to comment 2 by user2',
    },
  });

  console.log('Seed data created');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
