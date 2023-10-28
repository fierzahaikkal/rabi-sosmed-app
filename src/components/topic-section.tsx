import { Plus } from 'lucide-react';
export default function TopicSection() {
    return (
    <div className="w-full h-12 pb-2 border-b border-slate-950 justify-between items-center inline-flex">
        <div className='p-2 hover:bg-neutral-300'><a href="/halaman-lain"><Plus/></a></div>
        <div className="w-6 h-6 relative" />
        <div className="justify-center items-center flex">
            <div className="p-2 justify-center items-center gap-2.5 flex hover:bg-neutral-300">
                <a href="/halaman-lain" className="text-right text-slate-950 text-body leading-normal">For You</a>
            </div>
            <div className="p-2 justify-center items-center gap-2.5 flex hover:bg-neutral-300">
                <a href="/halaman-lain" className="text-right text-slate-950 text-body leading-normal">Sport</a>
            </div>
            <div className="p-2 justify-center items-center gap-2.5 flex hover:bg-neutral-300">
                <a href="/halaman-lain" className="text-right text-slate-950 text-body leading-normal">Foods</a>
            </div>
            <div className="p-2 justify-center items-center gap-2.5 flex hover:bg-neutral-300">
                <a href="/halaman-lain" className="text-right text-slate-950 text-body leading-normal">Nature</a>
            </div>
            <div className="p-2 justify-center items-center gap-2.5 flex hover:bg-neutral-300">
                <a href="/halaman-lain" className="text-right text-slate-950 text-body leading-normal">Technology</a>
            </div>
            <div className="p-2 justify-center items-center gap-2.5 flex hover:bg-neutral-300">
                <a href="/halaman-lain" className="text-right text-slate-950 text-body leading-normal">Programming</a>
            </div>
            <div className="p-2 justify-center items-center gap-2.5 flex hover:bg-neutral-300">
                <a href="/halaman-lain" className="text-right text-slate-950 text-body leading-normal">Networking</a>
            </div>
            <div className="p-2 justify-center items-center gap-2.5 flex hover:bg-neutral-300">
                <a href="/halaman-lain" className="text-right text-slate-950 text-body leading-normal">Drawing</a>
            </div>
        </div>
    </div>
    )
}