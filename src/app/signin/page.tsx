import SignInForm from '@/components/signinForm';
import Navhead from '@/components/navhead';
import { Button } from '@/components/ui/button';
import { Github, Mail } from 'lucide-react';
import Link from 'next/link';

export default function SignIn() {
  return (
    <main className="flex flex-col items-center gap-y-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <Navhead />
      <div className="flex flex-col place-content-center items-center gap-y-6 sm:gap-y-8 md:gap-y-10">
        <div className="flex flex-col gap-y-4 sm:gap-y-5 md:gap-y-6 rounded-md p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg w-full max-w-screen-md">
          <SignInForm />
          <Button className="bg-slate-800 ring-offset-slate-800 hover:bg-slate-700">
            <Github className="mr-2" />
            Sign In With GitHub
          </Button>
          <Button variant={'destructive'}>
            <Mail className="mr-2" /> Sign In With Google
          </Button>
          <p className="pt-3 sm:pt-4 text-center">
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
