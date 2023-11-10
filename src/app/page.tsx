import CardBanner from '@/components/CardBanner';
import LandingHeader from '@/components/LandingHeader';
import LicenseFooter from '@/components/LicenseFooter';
import Navhead from '@/components/Navhead';
import Image from 'next/image';
import gradient from 'public/gradient.svg';

export default function Home() {
  return (
    <main className="relative flex flex-col gap-y-80 overflow-hidden px-[160px]">
      <Image
        src={gradient}
        objectFit="cover"
        fill
        alt="background gradient"
        className="absolute z-[-1] mx-auto"
      />
      <Navhead></Navhead>
      <LandingHeader></LandingHeader>
      <CardBanner></CardBanner>
      <LicenseFooter />
    </main>
  );
}
