import { FC, HTMLAttributes } from 'react';
import { useRouter } from 'next/navigation';

interface PartnerProps extends HTMLAttributes<HTMLDivElement> {}
const Partner: FC<PartnerProps> = ({}) => {
  return (
    <section className="flex items-center justify-between gap-y-4 text-center mobile:flex-col ">
      <h1 className="text-2xl font-semibold text-text mobile:text-xl">Join our community</h1>
      <div className="flex justify-between gap-x-6">
        <div>
          <h5 className="mb-2 text-5xl font-bold text-primary mobile:text-4xl">135K+</h5>
          <p className="text-lg text-text mobile:text-sm">Users active in every country</p>
        </div>
        <div>
          <h5 className="mb-2 text-5xl font-bold text-primary mobile:text-4xl">All day</h5>
          <p className="text-lg text-text mobile:text-sm">Servers active recursively</p>
        </div>
      </div>
    </section>
  );
};

export default Partner;
