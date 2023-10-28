import Navhead from '@/components/navhead';
import { Button } from '@/components/ui/button';
import { Github, Mail } from 'lucide-react';
import Link from 'next/link';
import SignUpForm from '@/components/signupForm';

export default function SignIn() {
  return (
    <main className="flex flex-col items-center gap-y-[80px] px-[160px]">
      <Navhead />
      <div className="flex flex-col place-content-center">
        <div className="flex h-fit w-[550px] flex-col gap-y-[24px] rounded-xs p-[32px] shadow-lg">
          <SignUpForm />
          <Button className="bg-slate-800 ring-offset-slate-800 hover:bg-slate-700">
            <Github className="mr-2" />
            Sign In With GitHub
          </Button>
          <Button variant={'destructive'}>
            <Mail className="mr-2" /> Sign In With Google
          </Button>
          <p className="pt-[16px] text-center">
            I already have an account!
            <Link href={'api/auth/signin'} className="text-blue-500 underline">
              Bring to my account
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
