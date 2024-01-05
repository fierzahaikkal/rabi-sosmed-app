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
    <nav className="flex w-full items-center justify-between pt-12">
      <Link href="/">
        <h3 className="text-3xl font-semibold text-primary">Rabi</h3>
        <p className="text-xs text-accent">Rencana Bicara</p>
      </Link>
      {session?.user ? <NavheadWelcome user={user} /> : <NavheadButton />}
    </nav>
  );
};

const NavheadButton: FC<NavheadProps> = ({}) => {
  const router = useRouter();
  return (
    <div className="flex gap-x-4">
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
