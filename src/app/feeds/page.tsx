'use client';
import Header from '@/components/Header';
import TopicSection from '@/components/TopicSection';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { signOut, useSession } from 'next-auth/react';
import PostField from '@/components/PostField';

export default function Feeds() {
  const { data: session } = useSession();

  if (!session) {
    redirect('/api/auth/signin/?callbackUrl=/feeds');
  }

  return (
    <main className="flex flex-col items-center gap-y-[80px] px-[160px]">
      {session?.user && <Header user={session.user} />}
      <TopicSection />
      <PostField />
      <p></p>
      <Button onClick={() => signOut()}>Sign out</Button>
    </main>
  );
}
