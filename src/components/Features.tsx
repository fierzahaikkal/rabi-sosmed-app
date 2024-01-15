import { FC } from 'react';
import features1 from 'public/features1.png';
import features2 from 'public/features2.png';
import features3 from 'public/features3.png';
import Image from 'next/image';

interface FeaturesProps {}

const Features: FC<FeaturesProps> = ({}) => {
  return (
    <section className="flex flex-col items-center justify-center gap-y-6">
      <h1 className="text-2xl font-semibold">Try some new features from us!</h1>
      <div className="w-full rounded-xs bg-secondary p-6">
        <div className="flex flex-col gap-y-10">
          <div className="flex items-center justify-between gap-x-6">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-primary">One click sign in</h3>
              <p className="text-justify text-text">
                Seamlessly merging your Google credentials with our platform, this feature
                introduces a new era of user convenience. Experience the ease of a one-click login,
                where security and simplicity converge to provide you with a superior and
                frictionless entry point into our application.
              </p>
            </div>
            <Image
              src={features1}
              alt="feature image"
              className="w-[400px] rounded-xs bg-blend-color-burn"
            />
          </div>
          <div className="flex items-center justify-between gap-x-6">
            <Image
              src={features2}
              alt="feature image"
              className="w-[400px] rounded-xs bg-blend-color-burn"
            />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-primary">Define your interest</h3>
              <p className="text-justify text-text">
                Select from a rich tapestry of subjects that intrigue you, molding your digital
                experience into a reflection of your individuality. Explore our application with
                confidence, knowing that your chosen topics will guide you through a meticulously
                crafted journey of discovery.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-x-6">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-primary">Share and interact with other</h3>
              <p className="text-justify text-text">
                Share your daily musings through captivating posts, engage in thought-provoking
                conversations with comments, and seamlessly reply, fostering a sense of community
                within our platform designed to elevate the richness of your digital interactions.
              </p>
            </div>
            <Image
              src={features3}
              alt="feature image"
              className="w-[400px] rounded-xs bg-blend-color-burn"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
