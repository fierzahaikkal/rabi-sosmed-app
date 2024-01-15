'use client';
import Header from '@/components/Header';
import Post from '@/components/Post';
import TopicSection from '@/components/TopicSection';
import { Button } from '@/components/ui/button';
import { ShowPostPayload } from '@/lib/validators/post';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Profile({ params }: { params: { user: string[] } }) {
  const { data: session } = useSession();

  if (!session) {
    redirect('/api/auth/signin/?callbackUrl=/feeds');
  }

  const [posts, setPosts] = useState<ShowPostPayload[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/v1/posts/${params.user}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const postData = await res.json();
        setPosts(postData);
        console.log('profile post:', postData);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchData();
  }, [params.user]);

  return (
    <main className="grid items-center py-12 mobile:gap-y-[40px] mobile:px-[24px] laptop:gap-y-[64px] laptop:px-[160px]">
      {session?.user && <Header user={session.user} id={session.user} />}
      <TopicSection />
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
