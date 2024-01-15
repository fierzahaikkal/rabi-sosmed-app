import CardBanner from '@/components/CardBanner';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import LandingHeader from '@/components/LandingHeader';
import LicenseFooter from '@/components/LicenseFooter';
import Navhead from '@/components/Navhead';
import Partner from '@/components/Partner';
import Steps from '@/components/Steps';
import { Separator } from '@/components/ui/separator';

export default function Feeds() {
  return (
    <main className="grid justify-center gap-y-[40px] py-12 mobile:px-[24px] tablet:px-[80px] laptop:px-[160px]">
      <Navhead></Navhead>
      <LandingHeader></LandingHeader>
      <CardBanner></CardBanner>
      <Partner />
      <Separator />
      <Steps />
      <Features />
      <Footer />
    </main>
  );
}
