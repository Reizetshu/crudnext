const AddTopic = () => {
  return (
    <form className='flex flex-col gap-3'>
      <input
        className='border border-slate-500 px-8 py-2 rounded-lg'
        type='text' placeholder='Topic Title'
      />
      
      <input
        className='border border-slate-500 px-8 py-2 rounded-lg'
        type='text' placeholder='Topic Description'
        />
      <button className='bg-green-600 font-bold text-white rounded-lg py-3 px-6 w-fit'>
        Save Topic
      </button>
    </form>
  )
}

export default AddTopic;