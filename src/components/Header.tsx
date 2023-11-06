import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { getAuthSession } from '@/lib/auth';
import Home from '@/app/page';
import { User } from '@prisma/client';
import { AvatarProps } from '@radix-ui/react-avatar';
import { User as AvatarUser } from 'lucide-react';

interface HeaderProps extends AvatarProps {
  children?: ReactNode;
  user: Pick<User, 'image' | 'name'>;
}

const Header: FC<HeaderProps> = ({ user, children, ...props }) => {
  const session = getAuthSession();

  if (!session) return Home();
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
      <Avatar className="h-64 w-64" {...props}>
        {user.image ? (
          <AvatarImage src={user.image}></AvatarImage>
        ) : (
          <AvatarFallback>
            <AvatarUser />
          </AvatarFallback>
        )}
      </Avatar>
    </div>
  );
};

export default Header;
