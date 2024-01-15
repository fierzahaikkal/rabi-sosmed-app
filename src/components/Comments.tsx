import { FC, HTMLAttributes } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { MessageSquare } from 'lucide-react';
import { Separator } from './ui/separator';
import Replies from './Replies';
import { ScrollArea } from './ui/scroll-area';
import { formatDistanceToNow } from 'date-fns';

interface CommentsProps extends HTMLAttributes<HTMLDivElement> {
  user: string;
  created_at: string;
  content: string;
  count_replies: number;
}

const Comments: FC<CommentsProps> = ({ user, created_at, content, count_replies }) => {
  return (
    <ScrollArea className="h-[40vh] rounded-md border bg-primary-foreground">
      <section className="grid grid-cols-1 gap-y-4 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <Avatar className="h-9 w-9">
              <AvatarImage></AvatarImage>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h5>{user}</h5>
          </div>
          <h5 className="text-right">{formatDistanceToNow(created_at, { addSuffix: true })}</h5>
        </div>
        <div>
          <h5>{content}</h5>
        </div>
        <div className="flex gap-x-2">
          <button>
            <MessageSquare className="h-4 w-4" />
          </button>
          <h5>Replies {count_replies}</h5>
        </div>
        <Separator className="bg-text" />
        {count_replies > 0 ? (
          <Replies
            user={'Jennifer Doe'}
            created_at={'4m ago'}
            comment={'Thats Cool!'}
            count_replies={3}
          />
        ) : (
          ''
        )}
      </section>
    </ScrollArea>
  );
};

export default Comments;
