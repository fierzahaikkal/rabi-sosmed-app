'use client';
import { FC, useEffect, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { ShowTopicPayload } from '@/lib/validators/topic';

interface TopicInPostProps {}

const TopicInPost: FC<TopicInPostProps> = ({}) => {
  const [topics, setTopics] = useState<ShowTopicPayload[]>([]);
  const [isSelected, setIsSelected] = useState<string[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('api/v1/topics', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          cache: 'force-cache',
        });
        const data = await res.json();
        setTopics(data);
      } catch (error) {
        console.log('Error fetching topics:', error);
      }
    };
    getData();
  }, []);

  const handleSelectedTopic = (topic: string) => {
    if (isSelected.includes(topic)) {
      setIsSelected((prevSelected) =>
        prevSelected.filter((selectedTopic) => selectedTopic !== topic)
      );
    } else {
      setIsSelected((prevSelected) => [...prevSelected, topic]);
    }
  };
  return (
    <section>
      <DropdownMenu>
        <DropdownMenuTrigger>
          {isSelected.length > 0 ? `${isSelected.join(', ')}` : 'Selected Topic'}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {topics.map((topic, index) => (
            <DropdownMenuItem key={index} onClick={() => handleSelectedTopic(topic.name)}>
              {topic.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
};

export default TopicInPost;
