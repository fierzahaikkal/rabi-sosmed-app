'use client';
import Header from '@/components/Header';
import TopicSection from '@/components/TopicSection';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { signOut, useSession } from 'next-auth/react';
import PostField from '@/components/PostField';
import Post from '@/components/Post';

export default function Feeds() {
  const { data: session } = useSession();

  if (!session) {
    redirect('/api/auth/signin/?callbackUrl=/feeds');
  }

  return (
    <main className="grid items-center mobile:gap-y-[40px] mobile:px-[24px] laptop:gap-y-[64px] laptop:px-[160px]">
      {session?.user && <Header user={session.user} />}
      <TopicSection />
      <PostField />
      <Post
        user={'John Doe'}
        created_at={'03-01-2024'}
        content={'Todays i have soccer in schools'}
        topics={['Sports', 'Daily']}
        count_comments={2}
      />
      <Post
        user={'Jennifer Doe'}
        created_at={'02-01-2024'}
        content={'Todays i have soccer in schools'}
        topics={['Foods', 'Dishes']}
        count_comments={1}
      />

      <Button onClick={() => signOut()}>Sign out</Button>
    </main>
  );
}
