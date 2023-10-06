import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center bg-slate-800 
    px-8 py-3 rounded-lg'>
        <Link className='text-white font-bold' href={'/'}>
            Simple Topic
        </Link>
        <Link className='bg-white p-2 rounded' href={'/addTopic'}>
            Add Topic
        </Link>
    </nav>
  )
};

export default NavBar;