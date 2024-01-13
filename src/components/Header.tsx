import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { User } from '@prisma/client';
import UserAvatar from './UserAvatar';

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, 'image' | 'name'>;
}

const Header: FC<HeaderProps> = ({ user }) => {
  return (
    <div className="flex w-full items-center justify-between pt-12">
      <div>
        <Link href="/">
          <h3 className="text-3xl font-semibold text-primary">Rabi</h3>
          <p className="text-xs text-accent">Rencana Bicara</p>
        </Link>
      </div>
      <div className="flex gap-x-4 text-subhead underline decoration-accent underline-offset-8">
        Feeds
      </div>
      <div className="flex gap-x-4 text-subhead underline decoration-accent underline-offset-8">
        Profile
      </div>
      <UserAvatar user={{ name: user.name || null, image: user.image || null }} />
    </div>
  );
};

export default Header;
