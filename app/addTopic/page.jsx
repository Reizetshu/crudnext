'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddTopic = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const router = useRouter();

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert('Title and description are required.');
      return;
    };

    try {
      const res = await fetch('/api/topics', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({title, description}),
      });

      if (res.ok) {
        router.push('/');
      }
      else {
        throw new Error('Failed to create a topic');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={submitHandler} className='flex flex-col gap-3'>
      <input
        onChange={titleHandler}
        value={title}
        className='border border-slate-500 px-8 py-2 rounded-lg'
        type='text' placeholder='Topic Title'
      />
      
      <input
        onChange={descriptionHandler}
        value={description}
        className='border border-slate-500 px-8 py-2 rounded-lg'
        type='text' placeholder='Topic Description'
        />
      <button type='submit' className='bg-green-600 font-bold text-white rounded-lg py-3 px-6 w-fit'>
        Save Topic
      </button>
    </form>
  )
}

export default AddTopic;