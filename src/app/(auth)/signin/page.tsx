'use client';
import Navhead from '@/components/Navhead';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import SigninForm from '@/components/signinForm';

export default function SignIn() {
  const session = useSession();
  const searchParams = useSearchParams();

  if (session?.status === 'authenticated') {
    const callback = searchParams.get('callbackUrl') ?? '/topics';
    redirect(callback);
  }
  return (
    <main className="flex flex-col items-center gap-y-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <Navhead />
      <div className="flex flex-col place-content-center">
        <div className="flex h-fit w-[550px] flex-col gap-y-[24px] rounded-xs p-[32px] shadow-lg">
          <SigninForm />
          <p className="pt-[16px] text-center">
            Im New Here!{' '}
            <Link href={'api/auth/signup'} className="text-blue-500 underline">
              need account register
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
