import { FC } from 'react';
import { NavBarProps } from './NavBarProps';

const NavBar: FC<NavBarProps> = async ({}) => {
  return (
    <div className="w-full bg-white p-8 md:p-12">
      <div className="container mx-auto">
        {/* Navbar Content */}
        <div className="flex items-center justify-between">
          <div className="flex-col items-start justify-start">
            <div className="font-Poppins text-2xl font-semibold leading-loose text-indigo-700">
              Rabi
            </div>
            <div className="font-Poppins text-xs font-normal leading-none text-indigo-700">
              Rencana Bicara
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="border-b-2 border-purple-700 px-4 py-2">
              <div className="font-Poppins text-xl font-normal leading-normal text-slate-950">
                Feeds
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-4">
            {/* Tambahkan elemen-elemen yang diinginkan di sini */}
          </div>
        </div>

        {/* Navbar Links */}
        <div className="mt-4 border-b border-slate-950 md:mt-8 md:flex md:items-center md:justify-between">
          <div className="relative h-6 w-6"></div>
          <div className="mt-4 flex gap-2.5 md:mt-0 md:flex md:items-center md:justify-center">
            <div className="p-2">
              <div className="font-Poppins text-base font-normal leading-normal text-slate-950">
                For You
              </div>
            </div>
            <div className="p-2">
              <div className="font-Poppins text-base font-normal leading-normal text-slate-950">
                Sport
              </div>
            </div>
            <div className="p-2">
              <div className="font-Poppins text-base font-normal leading-normal text-slate-950">
                Foods
              </div>
            </div>
            <div className="p-2">
              <div className="font-Poppins text-base font-normal leading-normal text-slate-950">
                Nature
              </div>
            </div>
            <div className="p-2">
              <div className="font-Poppins text-base font-normal leading-normal text-slate-950">
                Technology
              </div>
            </div>
            <div className="p-2">
              <div className="font-Poppins text-base font-normal leading-normal text-slate-950">
                Programming
              </div>
            </div>
            <div className="p-2">
              <div className="font-Poppins text-base font-normal leading-normal text-slate-950">
                Networking
              </div>
            </div>
            <div className="p-2">
              <div className="font-Poppins text-base font-normal leading-normal text-slate-950">
                Drawing
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
