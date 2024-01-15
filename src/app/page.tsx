import CardBanner from '@/components/card-banner';
import LandingHeader from '@/components/landing-header';
import LicenseFooter from '@/components/license-footer';
import Navhead from '@/components/navhead';
import Image from 'next/image';
import gradient from 'public/gradient.svg';

export default function Feeds() {
  return (
    <main className="mini:px-[12px] mobile:px-[24px] tablet:px-[80px] laptop:px-120px] grid justify-center gap-y-80 ">
      <Navhead></Navhead>
      <LandingHeader></LandingHeader>
      <CardBanner></CardBanner>
      <LicenseFooter />
    </main>
  );
}
