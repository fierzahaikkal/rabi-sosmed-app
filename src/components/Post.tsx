'use client';
import { format } from 'date-fns';
import { FC, useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Heart, MessageSquare } from 'lucide-react';
import Comments from './Comments';
import { ShowPostPayload } from '@/lib/validators/post';

interface PostProps {
  postId: string;
  post: {
    id: string;
    userId: string;
    content: string;
    topicId: string;
    comments: Array<{
      id: string;
      userId: string;
      postId: string;
      content: string;
      created_at: Date;
      user: { name: string };
    }>;
    created_at: Date;
  };
  // user: Pick<User, 'name' | 'image' | 'id'>;
  topics: string[];
  count_comments: number;
}

const Post: FC<PostProps> = ({ post, topics, count_comments, postId }) => {
  const [posts, setPosts] = useState<ShowPostPayload[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`api/v1/posts/${postId}`);
        const postData = await res.json();
        setPosts(postData);
        console.log('post data:', postData);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchData();
  }, [postId]);
  return (
    <section className="grid grid-cols-1 gap-y-4 rounded-xs border border-primary px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <Avatar className="h-10 w-10">
            <AvatarImage></AvatarImage>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <h5>John Doe</h5>
        </div>
        <h5 className="text-right">{format(post.created_at.toLocaleString(), 'dd-MM-yyyy')}</h5>
      </div>
      <div>
        {topics.map((topic, index) => (
          <Badge key={index} className="mr-1">
            {topic}
          </Badge>
        ))}
        <h5 className="pt-4">{post.content}</h5>
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
      {Array.isArray(posts) &&
        posts.map((post) =>
          post.comments.map((comment) => (
            <Comments
              key={comment.id}
              user={comment.user.name}
              created_at={comment.created_at.toLocaleString()}
              content={comment.content}
              count_replies={0}
            />
          ))
        )}
    </section>
  );
};

export default Post;
