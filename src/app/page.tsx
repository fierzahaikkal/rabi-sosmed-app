import CardBanner from '@/components/CardBanner';
import LandingHeader from '@/components/LandingHeader';
import LicenseFooter from '@/components/LicenseFooter';
import Navhead from '@/components/Navhead';
import Partner from '@/components/Partner';
import Steps from '@/components/Steps';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main className="grid justify-center gap-y-[40px] mobile:px-[24px] tablet:px-[80px] laptop:px-[160px]">
      <Navhead></Navhead>
      <LandingHeader></LandingHeader>
      <CardBanner></CardBanner>
      <Partner />
      <Separator />
      <Steps />
      <LicenseFooter />
    </main>
  );
}
