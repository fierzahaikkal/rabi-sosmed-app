import { FC } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Heart, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import Comments from './Comments';
import { Separator } from './ui/separator';

interface PostProps {
  user: string;
  created_at: string;
  content: string;
  topics: string[];
  image_url?: string;
  count_comments: number;
}

const Post: FC<PostProps> = ({ user, created_at, content, topics, image_url, count_comments }) => {
  return (
    <section className="grid grid-cols-1 gap-y-4 rounded-xs border border-primary px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <Avatar className="h-10 w-10">
            <AvatarImage></AvatarImage>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <h5>{user}</h5>
        </div>
        <h5 className="text-right">{created_at}</h5>
      </div>
      <div>
        {topics.map((topic, index) => (
          <Badge key={index} className="mr-1">
            {topic}
          </Badge>
        ))}
        <h5 className="pt-4">{content}</h5>
      </div>
      <div className="flex gap-x-2">
        <button>
          <Heart className="h-4 w-4" />
        </button>
        <button>
          <MessageSquare className="h-4 w-4" />
        </button>
        <h5>Comments {count_comments}</h5>
      </div>
      {count_comments > 0 ? (
        <Comments
          user={'Jennifer Doe'}
          created_at={'4m ago'}
          comment={'Thats Cool!'}
          count_replies={2}
        />
      ) : (
        ''
      )}
    </section>
  );
};

export default Post;
