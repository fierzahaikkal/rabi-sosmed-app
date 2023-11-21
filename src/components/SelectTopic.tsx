'use client';
import { FC } from 'react';
import { Input } from './ui/input';
import { toast } from './ui/use-toast';
import React from 'react';
import { Checkbox } from './ui/checkbox';
import { db } from '@/lib/db';

interface SelectTopicProps extends React.HTMLAttributes<HTMLDivElement> {}

const SelectTopic: FC<SelectTopicProps> = ({ className, ...props }) => {
  const [isSelected, setIsSelected] = React.useState<boolean>(false);
  const topicArr: String[] = [
    'For You',
    'Sports',
    'Foods',
    'Technology',
    'Programming',
    'Networking',
  ];

  const selected = async () => {
    const userTopic = db.userTopics;
    try {
      if (isSelected) {
        return setIsSelected(false);
      }
      return setIsSelected(true);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was an error logging in with Google',
        variant: 'destructive',
      });
    }
  };
  return (
    <div>
      {topicArr.map((topic, index) => (
        <Checkbox
          key={index}
          className=""
          placeholder={topic as string}
          onClick={selected}
        ></Checkbox>
      ))}
    </div>
  );
};

export default SelectTopic;
