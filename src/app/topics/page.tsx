import Navhead from '@/components/Navhead';
import SelectTopic from '@/components/SelectTopic';
import Tiptap from '@/components/Tiptap';

export default function Topics() {
  return (
    <main className="relative flex flex-col gap-y-80 overflow-hidden px-[160px]">
      <Navhead />
      <Tiptap />
    </main>
  );
}
