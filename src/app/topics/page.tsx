'use client';
import Navhead from '@/components/Navhead';
import { Button } from '@/components/ui/button';
import { signOut, useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import topicsImg from 'public/topics-img.jpg';
import Image from 'next/image';
import TopicBox from '@/components/TopicBox';

export default function Topics() {
  const router = useRouter();
  const { data: session } = useSession();
  if (!session) {
    redirect('/api/auth/signin/?callbackUrl=/topics');
  }
  return (
    <main className="grid grid-cols-1 gap-y-80 px-[24px] sm:px-[160px]">
      <Navhead user={session.user} />
      <section className="grid grid-cols-2 gap-x-2">
        <Image
          src={topicsImg}
          alt="Ski Image"
          quality={80}
          className="w-[300px] rounded-tr-[200px] bg-contain"
        />
        <section>
          <h1 className="mb-2 text-2xl font-semibold text-text">What makes you interest?</h1>
          <TopicBox />
        </section>
      </section>
      <Button onClick={() => signOut()}>Sign out</Button>
      <Button onClick={() => router.push('/feeds')}>Feeds</Button>
    </main>
  );
}
