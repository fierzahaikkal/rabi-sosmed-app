import Post from '@/components/Post';

export default function Temp() {
  return (
    <main className="flex flex-col gap-y-80 px-[160px]">
      <Post
        user={'John Doe'}
        created_at={'03-01-2024'}
        content={'Todays i have soccer in schools'}
        topics={'Sports'}
      />
    </main>
  );
}
