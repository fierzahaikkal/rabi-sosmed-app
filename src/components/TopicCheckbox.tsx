import { FC, useState } from 'react';
import { db } from '@/lib/db';

interface TopicCheckboxProps extends React.HTMLAttributes<HTMLDivElement> {}

const TopicCheckbox: FC<TopicCheckboxProps> = ({ className, ...props }) => {
  const [topics, setTopics] = useState<string[]>([]);
  return <div>TopicCheckbox</div>;
};

export default TopicCheckbox;
