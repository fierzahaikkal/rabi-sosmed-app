import React from 'react'

const peopleComment = [
    {
      username: 'Leslie Alexander',
      email: 'michael.foster@example.com',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus, laborum quidem blanditiis debitis nam distinctio animi dolorem, deleniti et reprehenderit, nesciunt dolor illo perspiciatis nemo a aliquid molestiae doloribus!',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  
    },
    {
        username: 'Leslie Alexander',
        email: 'michael.foster@example.com',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus, laborum quidem blanditiis debitis nam distinctio animi dolorem, deleniti et reprehenderit, nesciunt dolor illo perspiciatis nemo a aliquid molestiae doloribus!',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    
      },
      {
        username: 'Leslie Alexander',
        email: 'michael.foster@example.com',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus, laborum quidem blanditiis debitis nam distinctio animi dolorem, deleniti et reprehenderit, nesciunt dolor illo perspiciatis nemo a aliquid molestiae doloribus!',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    
      }
]

function page() {
  return (
    <main className='flex flex-col px-10'>
        <ul role="list" className="bg-gray-300 divide-y divide-gray-700 p-2 m-20">
        {peopleComment.map((person) =>(
            <li key = {person.username} className="flex flex-col justify-between gap-x-10 py-5 px-5">
                <div className="flex flex-row min-w-0 gap-x-4">
                    <img className="h-12 w-12 rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                    <p className="text-sm font-semibold leading-6 text-gray-900">{person.username}</p>
                </div>   
                <div className=" flex flex-col gap-2 mt-2">
                    <p className="mt-1 text-xs leading-5 text-gray-700">{person.content}</p>   
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="2.0" 
                    stroke="#585859" 
                    className="w-4 h-4"
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
  )
}

export default page