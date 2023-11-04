import Navhead from '@/components/NavHead';
import SigninForm from '@/components/SigninForm';
import Link from 'next/link';

export default function SignIn() {
  return (
    <main className="flex flex-col items-center gap-y-[80px] px-[160px]">
      <Navhead />
      <div className="flex flex-col place-content-center">
        <div className="flex h-fit w-[550px] flex-col gap-y-[24px] rounded-xs p-[32px] shadow-lg">
          <SigninForm />
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
