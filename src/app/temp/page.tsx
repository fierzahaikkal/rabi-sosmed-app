'use client';
import Post from '@/components/Post';
import PostField from '@/components/PostField';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Temp() {
  // const { data: session } = useSession();

  // if (!session) {
  //   redirect('/api/auth/signin/?callbackUrl=/feeds');
  // }
  return (
    <main className="flex flex-col gap-y-[3rem] px-[160px] py-12 pt-60 text-body">
      <PostField />
      <Post
        user={'session.user'}
        created_at={'02-01-2024'}
        content={'Todays i have soccer in schools'}
        topics={['Foods', 'Dishes']}
        count_comments={1}
      />
    </main>
  );
}
