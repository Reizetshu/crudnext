'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const EditTopicForm = ({id, title, description}) => {

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

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
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({newTitle, newDescription}),
      });

      if (!res.ok) {
        throw new Error('Failed to update topic');
      }

      router.refresh();
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