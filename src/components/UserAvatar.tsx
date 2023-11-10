import { FC, ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

import { User as AvatarUser } from 'lucide-react';

import { User } from '@prisma/client';

interface UserAvatarProps {
  children?: ReactNode;
  user: Pick<User, 'image' | 'name'>;
}

const UserAvatar: FC<UserAvatarProps> = ({ user, children, ...props }) => {
  return (
    <Avatar className="h-64 w-64" {...props}>
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
