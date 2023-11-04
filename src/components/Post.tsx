import { FC } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface PostProps {
  id: string;
  user_id: string;
  topic_id: string;
  content: string;
  image_url?: string;
}

const Post: FC<PostProps> = ({}) => {
  return (
    <div>
      <div className="flex">
        <Avatar className="h-12  w-12">
          <AvatarImage></AvatarImage>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div>
          <h3>John Doe</h3>
          <h5>Sports</h5>
        </div>
      </div>
    </div>
  );
};

export default Post;
