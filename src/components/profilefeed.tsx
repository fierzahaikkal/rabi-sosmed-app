'use client';
import React, { useState } from 'react';

const people = [
  {
    username: 'Leslie Alexander',
    topic: 'sports',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sapiente possimus dicta est reprehenderit corrupti labore saepe nulla iure recusandae, atque error aperiam perspiciatis pariatur, nobis alias nemo quo incidunt.',
    imageContent:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    liked: false,
  },
  {
    username: 'Leslie Alexander',
    topic: 'Technology',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sapiente possimus dicta est reprehenderit corrupti labore saepe nulla iure recusandae, atque error aperiam perspiciatis pariatur, nobis alias nemo quo incidunt.',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    username: 'Leslie Alexander',
    topic: 'Politics',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sapiente possimus dicta est reprehenderit corrupti labore saepe nulla iure recusandae, atque error aperiam perspiciatis pariatur, nobis alias nemo quo incidunt.',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    imageContent:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    username: 'Leslie Alexander',
    topic: 'Agriculture',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sapiente possimus dicta est reprehenderit corrupti labore saepe nulla iure recusandae, atque error aperiam perspiciatis pariatur, nobis alias nemo quo incidunt.',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

function Profilepost() {
  const [peopleData, setPeople] = useState(people);

  const handleLike = (index) => {
    const updatedPeople = [...peopleData];
    updatedPeople[index].liked = !updatedPeople[index].liked;
    setPeople(updatedPeople);
  };

  return (
    <main>
      <h1 className="font-bold text-gray-700">My Posts</h1>
      <ul role="list" className="divide-black-100 mb-5 divide-y">
        {peopleData.map((person, index) => (
          <li key={person.username} className="flex flex-col justify-between gap-x-6 py-5">
            <div className="flex min-w-0 flex-row gap-x-4">
              <img className="h-12 w-12 rounded-full bg-gray-50" src={person.imageUrl} alt="" />
              <div className=" flex flex-col">
                <p className="text-sm font-semibold leading-6 text-gray-900">{person.username}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-700">{person.topic}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <p className="mt-1 text-xs leading-5 text-gray-500">
                {person.content}
                <img className="mt-2 rounded" src={person.imageContent} alt="" />
              </p>
            </div>

            <div className="mt-3 flex flex-row gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={person.liked ? '#8F1FDB' : 'none'}
                viewBox="0 0 22 22"
                stroke-width="2.0"
                stroke="#8F1FDB"
                className="h-4 w-4"
                onClick={() => handleLike(index)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.0"
                stroke="#8F1FDB"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                />
              </svg>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Profilepost;
