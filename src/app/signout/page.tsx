import Header from '@/components/Header';
import InputSection from '@/components/InputSection';
import TopicSection from '@/components/TopicSection';

export default function SignOut() {
  return (
    <main className="flex flex-col items-center gap-y-[80px] px-[160px]">
      <Header />
      <TopicSection />
      <InputSection />
    </main>
  );
}
