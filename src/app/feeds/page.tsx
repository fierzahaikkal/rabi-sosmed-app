'use client';
import Header from '@/components/Header';
import TopicSection from '@/components/TopicSection';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { signOut, useSession } from 'next-auth/react';
import PostField from '@/components/PostField';
import Post from '@/components/Post';
import { useEffect, useState } from 'react';
import { ShowPostPayload } from '@/lib/validators/post';

export default function Feeds() {
  const { data: session } = useSession();

  if (!session) {
    redirect('/api/auth/signin/?callbackUrl=/feeds');
  }

  const [posts, setPosts] = useState<ShowPostPayload[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('/api/v1/posts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        setPosts(data);
        console.log('feeds data:', data);
      } catch (error) {
        console.log('Error fetching posts:', error);
      }
    };
    getData();
  }, []);

  return (
    <main className="grid items-center py-12 mobile:gap-y-[40px] mobile:px-[24px] laptop:gap-y-[64px] laptop:px-[160px]">
      {session?.user && <Header user={session.user} id={session.user.id} />}
      <TopicSection />
      <PostField />
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          topics={['Sports', 'Programming']}
          count_comments={3}
          postId={post.id}
        />
      ))}
      <Button onClick={() => signOut()}>Sign out</Button>
    </main>
  );
}
