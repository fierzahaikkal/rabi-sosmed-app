import Link from 'next/link';

export default function ProfileInfo() {
  return (
    <div className="mt-10 inline-flex items-end justify-between gap-2">
      <div>
        <Link href="/">
          <h3 className="text-3xl font-semibold text-primary">Rabi</h3>
          <p className="text-xs text-accent">Rencana Bicara</p>
        </Link>
      </div>

      <div className="flex items-center justify-start gap-4">
        <div className="flex items-center justify-start gap-2 border-b-2 border-purple-700 px-4 py-2">
          <div className="text-right font-['Poppins'] text-xl font-normal leading-normal text-slate-950">
            Profile
          </div>
        </div>
      </div>
      <button className='className="justify-end flex items-center gap-4'>
        <img
          className="h-12 w-12 rounded-full"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
      </button>
    </div>
  );
}
