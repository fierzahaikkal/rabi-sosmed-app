import React from "react";
import Navhead from '@/components/profNavhead';
import Post from "@/components/profileInfo";
import Profilepost from "@/components/profilefeed";
export default function Profile() {
  return(
    <main className="flex flex-col gap-y-[40px] px-[160px]">
      <Navhead/>
      <Post/>
      <Profilepost/>
    </main>
  );
}
