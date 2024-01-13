import Image from 'next/image';
import { FC } from 'react';
import step1 from 'public/steps1.png';
import step2 from 'public/steps2.png';
import step3 from 'public/steps3.png';

interface StepsProps {}

const Steps: FC<StepsProps> = ({}) => {
  return (
    <section className="flex flex-col items-center justify-center gap-y-6">
      <h1 className="text-center text-2xl font-semibold mobile:text-xl">
        The easiest setup you will ever do
      </h1>
      <div className="grid grid-cols-3 items-end">
        <div>
          <Image src={step1} alt="steps image" className=" w-[240px]" />
          <h3 className="text-lg font-semibold text-primary">Step 1</h3>
          <p>Go start your account by hit Getting Started button</p>
        </div>
        <div>
          <Image src={step2} alt="steps image" className="w-[240px]" />
          <h3 className="text-lg font-semibold text-primary">Step 2</h3>
          <p>Choose a topic that makes you interest</p>
        </div>
        <div>
          <Image src={step3} alt="steps image" className="w-[300px]" />
          <h3 className="text-lg font-semibold text-primary">Step 3</h3>
          <p>Finally, you will be directed to feeds</p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
