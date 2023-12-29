import Navhead from '@/components/Navhead';
import PostField from '@/components/PostField';
import SelectTopic from '@/components/SelectTopic';
import TopicSection from '@/components/TopicSection';

export default function Topics() {
  return (
    <main className="relative grid grid-cols-1 gap-y-80 overflow-hidden px-[24px] sm:px-[160px]">
      <Navhead />
      <TopicSection />
      <PostField />
    </main>
  );
}
