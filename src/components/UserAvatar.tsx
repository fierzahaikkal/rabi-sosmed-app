import { FC, HTMLAttributes, ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

import { User as AvatarUser } from 'lucide-react';

import { User } from '@prisma/client';
import { redirect, useRouter } from 'next/navigation';

interface UserAvatarProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  user: Pick<User, 'image' | 'name'>;
  id: string;
}

const UserAvatar: FC<UserAvatarProps> = ({ user, children, id, ...props }) => {
  const router = useRouter();
  return (
    <Avatar
      className="h-64 w-64"
      {...props}
      onClick={() => {
        router.push(`/profile/${id}`);
      }}
    >
      {user.image ? (
        <AvatarImage src={user.image}></AvatarImage>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user?.name}</span>
          <AvatarUser />
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
