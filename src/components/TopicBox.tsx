import { FC, HTMLAttributes, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { ShowTopicPayload } from '@/lib/validators/topic';

interface TopicBoxProps extends HTMLAttributes<HTMLDivElement> {}

const TopicBox: FC<TopicBoxProps> = ({}) => {
  const router = useRouter();
  const [topics, setTopics] = useState<ShowTopicPayload[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('api-for-topics', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        setTopics(data);
        console.log(data);
      } catch (error) {
        console.log('Error fetching topics:', error);
      }
    };
    getData();
  }, []);
  const [isSelected, setIsSelected] = useState<string[]>([]);

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
    <section className="grid h-fit grid-cols-3 gap-3">
      <Button
        className="bg-slate-400 hover:bg-slate-500 active:bg-slate-600"
        onClick={() => router.push('/create/topic')}
      >
        +
      </Button>
      {topics.map((topic) => (
        <Button
          className={` ${topic.name.length > 10 ? 'col-span-2' : 'col-span-1'} ${
            isSelected.includes(topic.id) ? 'bg-blue-500 text-white' : ''
          }`}
          key={topic.id}
          onClick={() => handleSelectedTopic(topic.id)}
        >
          {topic.name}
        </Button>
      ))}
    </section>
  );
};

export default TopicBox;
