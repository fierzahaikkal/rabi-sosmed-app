import { Plus } from 'lucide-react';
export default function TopicSection() {
    return (
    <div className="w-full h-12 pb-2 border-b border-slate-950 justify-between items-center inline-flex">
        <Plus />
        <div className="w-6 h-6 relative" />
        <div className="justify-center items-center flex">
            <div className="p-2 bg-zinc-200 justify-center items-center gap-2.5 flex">
                <div className="text-right text-slate-950 text-body leading-normal">For You</div>
            </div>
            <div className="p-2 justify-center items-center gap-2.5 flex">
                <div className="text-right text-slate-950 text-body leading-normal">Sport</div>
            </div>
            <div className="p-2 justify-center items-center gap-2.5 flex">
                <div className="text-right text-slate-950 text-body leading-normal">Foods</div>
            </div>
            <div className="p-2 justify-center items-center gap-2.5 flex">
                <div className="text-right text-slate-950 text-body leading-normal">Nature</div>
            </div>
            <div className="p-2 justify-center items-center gap-2.5 flex">
                <div className="text-right text-slate-950 text-body leading-normal">Technology</div>
            </div>
            <div className="p-2 justify-center items-center gap-2.5 flex">
                <div className="text-right text-slate-950 text-body leading-normal">Programming</div>
            </div>
            <div className="p-2 justify-center items-center gap-2.5 flex">
                <div className="text-right text-slate-950 text-body leading-normal">Networking</div>
            </div>
            <div className="p-2 justify-center items-center gap-2.5 flex">
                <div className="text-right text-slate-950 text-body leading-normal">Drawing</div>
            </div>
        </div>
    </div>
    )
}