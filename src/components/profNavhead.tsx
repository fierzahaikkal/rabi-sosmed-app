
import Link from 'next/link';

export default function ProfileInfo(){
    return (
    <div className="justify-between items-end inline-flex gap-2 mt-10">
    <div>
        <Link href="/">
          <h3 className="text-3xl font-semibold text-primary">Rabi</h3>
          <p className="text-xs text-accent">Rencana Bicara</p>
        </Link>
      </div>

    <div className="justify-start items-center gap-4 flex">
        <div className="px-4 py-2 border-b-2 border-purple-700 justify-start items-center gap-2 flex">
            <div className="text-right text-slate-950 text-xl font-normal font-['Poppins'] leading-normal">Profile</div>
        </div>
    </div>
    <button className='className="justify-end items-center gap-4 flex'>
    <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
    </button>
</div>
    )
}