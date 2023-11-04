'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export default function Navhead() {
  const router = useRouter();
  return (
    <main className="flex w-full items-center justify-between pt-12">
      <div>
        <Link href="/">
          <h3 className="text-3xl font-semibold text-primary">Rabi</h3>
          <p className="text-xs text-accent">Rencana Bicara</p>
        </Link>
      </div>
      <div className="flex gap-x-4">
        <Button variant={'outline'} onClick={() => router.push('/signin')}>
          Sign In
        </Button>
        <Button onClick={() => router.push('/signup')}>Getting Started</Button>
      </div>
    </main>
  );
}
