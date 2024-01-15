import { Plus } from 'lucide-react';
export default function TopicSection() {
  return (
    <div className="inline-flex h-12 w-full items-center justify-between border-b border-slate-950 pb-2">
      <div className="p-2 hover:bg-neutral-300">
        <a href="/halaman-lain">
          <Plus />
        </a>
      </div>
      <div className="relative h-6 w-6" />
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center gap-2.5 p-2 hover:bg-neutral-300">
          <a href="/halaman-lain" className="text-right text-body leading-normal text-slate-950">
            For You
          </a>
        </div>
        <div className="flex items-center justify-center gap-2.5 p-2 hover:bg-neutral-300">
          <a href="/halaman-lain" className="text-right text-body leading-normal text-slate-950">
            Sport
          </a>
        </div>
        <div className="flex items-center justify-center gap-2.5 p-2 hover:bg-neutral-300">
          <a href="/halaman-lain" className="text-right text-body leading-normal text-slate-950">
            Foods
          </a>
        </div>
        <div className="flex items-center justify-center gap-2.5 p-2 hover:bg-neutral-300">
          <a href="/halaman-lain" className="text-right text-body leading-normal text-slate-950">
            Nature
          </a>
        </div>
        <div className="flex items-center justify-center gap-2.5 p-2 hover:bg-neutral-300">
          <a href="/halaman-lain" className="text-right text-body leading-normal text-slate-950">
            Technology
          </a>
        </div>
        <div className="flex items-center justify-center gap-2.5 p-2 hover:bg-neutral-300">
          <a href="/halaman-lain" className="text-right text-body leading-normal text-slate-950">
            Programming
          </a>
        </div>
        <div className="flex items-center justify-center gap-2.5 p-2 hover:bg-neutral-300">
          <a href="/halaman-lain" className="text-right text-body leading-normal text-slate-950">
            Networking
          </a>
        </div>
        <div className="flex items-center justify-center gap-2.5 p-2 hover:bg-neutral-300">
          <a href="/halaman-lain" className="text-right text-body leading-normal text-slate-950">
            Drawing
          </a>
        </div>
      </div>
    </div>
  );
}
