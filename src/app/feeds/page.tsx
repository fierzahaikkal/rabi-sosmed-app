import Header from '@/components/Header';
import TopicSection from '@/components/TopicSection';
import { getAuthSession } from '@/lib/auth';
import Home from '../page';

export default async function Feeds() {
  const session = await getAuthSession();

  if (!session) return Home();
  return (
    <main className="flex flex-col items-center gap-y-[80px] px-[160px]">
      {session?.user(<Header user={session.user} />)}
      <TopicSection />
      <p></p>
    </main>
  );
}
