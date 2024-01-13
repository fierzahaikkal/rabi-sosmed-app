import { Plus } from 'lucide-react';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface TopicSectionProps {
  children?: ReactNode;
}

const TopicSection: FC<TopicSectionProps> = ({ children }) => {
  const topicArr: String[] = [
    'For You',
    'Sports',
    'Foods',
    'Technology',
    'Programming',
    'Networking',
  ];
  return (
    <div className="inline-flex h-fit w-full items-center justify-between border-b border-text pb-2">
      <div className="p-2 leading-normal transition duration-150 ease-in hover:bg-background-hover">
        <Link href="/topics">
          <Plus />
        </Link>
      </div>
      <div className="flex">
        {topicArr.map((topic, index) => (
          <div
            key={index}
            className="cursor-pointer p-2 transition duration-150 ease-in hover:bg-background-hover"
          >
            <a href="#" className="text-body text-text">
              {topic}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicSection;
