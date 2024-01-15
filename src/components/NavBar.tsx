import { FC } from 'react';
import { NavBarProps } from './NavBarProps';

const NavBar: FC<NavBarProps> = async ({}) => {
  return (
    <div className="w-full bg-white p-8 md:p-12">
      <div className="container mx-auto">
        {/* Navbar Content */}
        <div className="flex justify-between items-center">
          <div className="flex-col justify-start items-start">
            <div className="text-indigo-700 text-2xl font-semibold font-Poppins leading-loose">Rabi</div>
            <div className="text-indigo-700 text-xs font-normal font-Poppins leading-none">Rencana Bicara</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 border-b-2 border-purple-700">
              <div className="text-slate-950 text-xl font-normal font-Poppins leading-normal">Feeds</div>
            </div>
          </div>
          <div className="justify-end items-center gap-4 flex">
            {/* Tambahkan elemen-elemen yang diinginkan di sini */}
          </div>
        </div>

        {/* Navbar Links */}
        <div className="mt-4 md:mt-8 border-b border-slate-950 md:flex md:justify-between md:items-center">
          <div className="w-6 h-6 relative"></div>
          <div className="mt-4 md:mt-0 md:flex md:justify-center md:items-center gap-2.5 flex">
            <div className="p-2">
              <div className="text-slate-950 text-base font-normal font-Poppins leading-normal">For You</div>
            </div>
            <div className="p-2">
              <div className="text-slate-950 text-base font-normal font-Poppins leading-normal">Sport</div>
            </div>
            <div className="p-2">
              <div className="text-slate-950 text-base font-normal font-Poppins leading-normal">Foods</div>
            </div>
            <div className="p-2">
              <div className="text-slate-950 text-base font-normal font-Poppins leading-normal">Nature</div>
            </div>
            <div className="p-2">
              <div className="text-slate-950 text-base font-normal font-Poppins leading-normal">Technology</div>
            </div>
            <div className="p-2">
              <div className="text-slate-950 text-base font-normal font-Poppins leading-normal">Programming</div>
            </div>
            <div className="p-2">
              <div className="text-slate-950 text-base font-normal font-Poppins leading-normal">Networking</div>
            </div>
            <div className="p-2">
              <div className="text-slate-950 text-base font-normal font-Poppins leading-normal">Drawing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

