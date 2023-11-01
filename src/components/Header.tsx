import Link from 'next/link';
import { FC, HTMLAttributes, ReactNode } from 'react';
import { Button } from './ui/button';
import router from 'next/router';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface HeaderProps {
  children?: ReactNode;
}

const Header: FC<HeaderProps> = ({ children }) => {
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
      <Avatar className="h-64 w-64">
        <AvatarImage></AvatarImage>
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Header;
