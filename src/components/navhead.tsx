'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export default function Navhead() {
  const router = useRouter();
  return (
    <main className="tablet:grid-cols-2 mobile:grid-cols-1 mini:grid-cols-1 grid w-full items-center justify-between pt-12">
      
        <Link href="/" className="tablet:text-left mobile:text-center tablet:mx-0 mobile:mx-auto mini:mx-auto">
          <h3 className="text-3xl font-semibold text-primary">Rabi</h3>
          <p className="text-xs text-accent">Rencana Bicara</p>
        </Link>
      
      <div style={{ marginTop: '16px'}} className="tablet:justify-end mobile:justify-center flex gap-x-4">
        <Button variant={'outline'} onClick={() => router.push('api/auth/signin')}>
          Sign In
        </Button>
        <Button onClick={() => router.push('api/auth/signup')}>Getting Started</Button>
      </div>
    </main>
  );
}
