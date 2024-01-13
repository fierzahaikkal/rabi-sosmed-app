'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { FC, HTMLAttributes } from 'react';
import { useSession } from 'next-auth/react';
import { User } from '@prisma/client';

interface NavheadProps extends HTMLAttributes<HTMLDivElement> {
  user?: Pick<User, 'name'>;
}

const Navhead: FC<NavheadProps> = ({ user }) => {
  const { data: session } = useSession();
  return (
    <nav className="grid w-full grid-cols-2 items-center justify-between pt-12 mobile:grid-cols-1">
      <Link href="/" className="text-left mobile:text-center">
        <h3 className="text-3xl font-semibold text-primary mobile:text-2xl">Rabi</h3>
        <p className="text-sm text-accent mobile:text-xs">Rencana Bicara</p>
      </Link>
      {session?.user ? <NavheadWelcome user={user} /> : <NavheadButton />}
    </nav>
  );
};

const NavheadButton: FC<NavheadProps> = ({}) => {
  const router = useRouter();
  return (
    <div className="flex justify-end gap-x-4 text-body mobile:justify-center mobile:pt-2 mobile:text-paragraph">
      <Button variant={'outline'} onClick={() => router.push('/signin')}>
        Sign In
      </Button>
      <Button onClick={() => router.push('/signin')}>Getting Started</Button>
    </div>
  );
};

const NavheadWelcome: FC<NavheadProps> = ({ user }) => {
  return <h3 className="text-xl">Welcome, {user?.name}</h3>;
};

export default Navhead;
