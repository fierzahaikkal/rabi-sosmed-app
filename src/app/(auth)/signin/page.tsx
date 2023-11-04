import SignInForm from '@/components/SigninForm';
import Navhead from '@/components/NavHead';
import { Button } from '@/components/ui/button';
import { Github, Mail } from 'lucide-react';
import Link from 'next/link';

export default function SignIn() {
  return (
    <main className="flex flex-col items-center gap-y-[80px] px-[160px]">
      <Navhead />
      <div className="flex flex-col place-content-center">
        <div className="flex h-fit w-[550px] flex-col gap-y-[24px] rounded-xs p-[32px] shadow-lg">
          <SignInForm />
          <p className="pt-[16px] text-center">
            Im New Here!
            <Link href={'api/auth/signup'} className="text-blue-500 underline">
              need account register
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}