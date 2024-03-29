import Navhead from '@/components/Navhead';
import { Button } from '@/components/ui/button';
import { Github, Mail } from 'lucide-react';
import Link from 'next/link';
import SignUpForm from '@/components/signupForm';

export default function SignIn() {
  return (
    <main className="flex flex-col items-center gap-y-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <Navhead />
      <div className="flex flex-col place-content-center items-center gap-y-6 sm:gap-y-8 md:gap-y-10">
        <div className="flex w-full max-w-screen-md flex-col gap-y-4 rounded-md p-4 shadow-lg sm:gap-y-5 sm:p-6 md:gap-y-6 md:p-8 lg:p-10">
          <SignUpForm />
          <Button className="bg-slate-800 ring-offset-slate-800 hover:bg-slate-700">
            <Github className="mr-2" />
            Sign In With GitHub
          </Button>
          <Button variant={'destructive'}>
            <Mail className="mr-2" /> Sign In With Google
          </Button>
          <p className="pt-3 text-center sm:pt-4">
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
