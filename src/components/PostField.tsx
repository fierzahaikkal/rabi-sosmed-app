import { FC, HTMLAttributes } from 'react';
import Tiptap from './Tiptap';
import { Button } from './ui/button';

interface PostFieldProps extends HTMLAttributes<HTMLDivElement> {}

const PostField: FC<PostFieldProps> = ({ className, ...props }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <Tiptap />
      <Button className="ml-auto">Post</Button>
    </div>
  );
};

export default PostField;
