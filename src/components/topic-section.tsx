import { Plus } from 'lucide-react';
import { FC, ReactNode } from 'react';

interface TopicSectionProps {
  children?: ReactNode;
}

const TopicSection: FC<TopicSectionProps> = ({ children }) => {
  const topicArr: string[] = [
    'For You',
    'Sports',
    'Foods',
    'Technology',
    'Programming',
    'Networking',
  ];

  return (
    <div className="flex flex-wrap items-center justify-between border-b border-text pb-2">
      <div className="p-2 leading-normal transition duration-150 ease-in hover:bg-slate-300">
        <a href="#">
          <Plus />
        </a>
      </div>
      <div className="flex flex-wrap gap-2">
        {topicArr.map((topic, index) => (
          <div
            key={index}
            className="cursor-pointer p-2 transition duration-150 ease-in hover:bg-slate-300"
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
