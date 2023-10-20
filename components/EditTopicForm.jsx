// Using 'use client' for front-end to you react js
'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const EditTopicForm = ({id, title, description}) => {

  // Update states
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  // Initialized useRouter
  const router = useRouter();

  const newTitleHandler = (e) => {
    setNewTitle(e.target.value);
  };

  const newDescriptionHandler = (e) => {
    setNewDescription(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      // Updating the topics
      const res = await fetch(`/api/topics/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({newTitle, newDescription}),
      });

      if (!res.ok) {
        throw new Error('Failed to update topic');
      }

      // Refreshing the page
      router.refresh();
      // redirecting to the main page
      router.push('/');
    } catch (error) {
      console.log(error);
    };
  };

  return (
    <form onSubmit={submitHandler} className='flex flex-col gap-3'>
        <input
        onChange={newTitleHandler}
        value={newTitle}
        className='border border-slate-500 px-8 py-2 rounded-lg'
        type='text' 
        placeholder='Topic Title'
        />
        
        <input
        onChange={newDescriptionHandler}
        value={newDescription}
        className='border border-slate-500 px-8 py-2 rounded-lg'
        type='text' 
        placeholder='Topic Description'
        />
        <button type='submit' className='bg-green-600 font-bold text-white rounded-lg py-3 px-6 w-fit'>
          Update Topic
        </button>
    </form>
  )
}

export default EditTopicForm;