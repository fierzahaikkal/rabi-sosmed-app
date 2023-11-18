'use client';
import Header from '@/components/Header';
import TopicSection from '@/components/TopicSection';
import { getAuthSession, options } from '@/lib/auth';
import Home from '../page';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { Button } from '@/components/ui/button';
import { signOut, useSession } from 'next-auth/react';

export default function Feeds() {
  const { data: session } = useSession();

  if (!session) {
    redirect('/api/auth/signin/?callbackUrl=/feeds');
  }

  return (
    <main className="flex flex-col items-center gap-y-[80px] px-[160px]">
      {session?.user && <Header user={session.user} />}
      <TopicSection />
      <p></p>
      <Button onClick={() => signOut()}>Sign out</Button>
    </main>
  );
}
