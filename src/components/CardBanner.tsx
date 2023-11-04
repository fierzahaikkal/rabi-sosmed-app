import Image from 'next/image';
import cardBanner from 'public/banner.png';

export default function CardBanner() {
  return (
    <div>
      <Image src={cardBanner} alt="Banner" className="rounded-lg drop-shadow-lg" />
    </div>
  );
}
