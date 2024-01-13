import Comments from '@/components/Comments';
import Post from '@/components/Post';
import Steps from '@/components/Steps';

export default function Temp() {
  return (
    <main className="flex flex-col gap-y-[3rem] px-[160px] text-body">
      <Post
        user={'John Doe'}
        created_at={'03-01-2024'}
        content={'Todays i have soccer in schools'}
        topics={['Sports', 'Daily']}
        count_comments={2}
      />
      <Post
        user={'Jennifer Doe'}
        created_at={'02-01-2024'}
        content={'Todays i have soccer in schools'}
        topics={['Foods', 'Dishes']}
        count_comments={1}
      />
    </main>
  );
}
