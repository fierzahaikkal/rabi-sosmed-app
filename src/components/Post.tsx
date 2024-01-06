import { FC } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface PostProps {
  user: string;
  created_at: string;
  content: string;
  topics: string;
  image_url?: string;
}

const Post: FC<PostProps> = ({ user, created_at, content, topics, image_url }) => {
  return (
    <section className="border-blacks grid grid-cols-1 gap-y-4 rounded-xs border px-6 py-4">
      <section className="flex items-center gap-x-4">
        <Avatar className="h-10 w-10">
          <AvatarImage></AvatarImage>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <h5>{user}</h5>
        <h5>{created_at}</h5>
      </section>
      <section>
        <h5>{content}</h5>
        <h5>{topics}</h5>
      </section>
    </section>
  );
};

export default Post;
