import Header from '@/components/Header';
import TopicSection from '@/components/TopicSection';
import { getAuthSession } from '@/lib/auth';
import Home from '../page';

export default function Feeds() {
  const session = getAuthSession();

  if (!session) return Home();
  return (
    <main className="flex flex-col items-center gap-y-[80px] px-[160px]">
      <Header user={session.user.name} />
      <TopicSection />
      <p></p>
    </main>
  );
}
