import Image from 'next/image';
import { FC } from 'react';

interface StepsProps {}

const Steps: FC<StepsProps> = ({}) => {
  return (
    <section>
      <h1 className="text-center text-2xl font-semibold mobile:text-xl">
        The easiest setup you will ever do
      </h1>
      <div>
        {/* <Image src={} /> */}
        <h3 className="text-lg font-semibold text-primary">Step 1</h3>
        <p>Go start your account by hit Getting Started button</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-primary">Step 2</h3>
        <p>Choose a topic that makes you interest</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-primary">Step 3</h3>
        <p>Finally, you will be directed to feeds</p>
      </div>
    </section>
  );
};

export default Steps;
