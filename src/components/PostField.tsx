import { FC, HTMLAttributes } from 'react';
import Tiptap from './Tiptap';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import TopicInPost from './TopicInPost';

interface PostFieldProps extends HTMLAttributes<HTMLDivElement> {}

const PostField: FC<PostFieldProps> = ({ className, ...props }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <Tiptap />
      <div className="flex justify-between">
        <TopicInPost />
        <Button className="ml-auto">Post</Button>
      </div>
    </div>
  );
};

export default PostField;
