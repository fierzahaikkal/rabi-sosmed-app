import CardBanner from "@/components/card-banner";
import LandingHeader from "@/components/landing-header";
import LicenseFooter from "@/components/license-footer";
import Navhead from "@/components/navhead";
import Image from "next/image";
import gradient from "public/gradient.svg";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-y-20 overflow-hidden px-[160px]">
      <Image
        src={gradient}
        objectFit="cover"
        fill
        alt="background gradient"
        className="absolute z-[-1] mx-auto"
      />
      <Navhead></Navhead>
      <div className="flex flex-col items-center">
        <LandingHeader></LandingHeader>
      </div>
      <CardBanner></CardBanner>
      <LicenseFooter />
    </main>
  );
}
