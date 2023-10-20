import Link from 'next/link';
import RemoveBtn from './RemoveBtn';
import {HiPencilAlt} from 'react-icons/hi'

// Getting topics
const getTopics = async () => {
    
    // Website URL
    const apiUrl = process.env.API_URL;

    try {
        const res = await fetch(`${apiUrl}/api/topics`, {
            cache: 'no-store',
        });

        // Failed to fetch topics
        if (!res.ok) {
            throw new Error('Failed to fetch topics');
        }

        return res.json();
    } 
    catch (error) {
        console.log('Error loading topics: ', error)
    }
};

const TopicsList = async () => {
    const {topics} = await getTopics();


  return (
    <>
        {/* Displaying topics using map */}
        {topics.map((t) => (
        <div className='p-4 border border-slate-300 rounded-lg my-3 
            flex justify-between gap-5 items-start'>
            <div key={t._id}>
                <h2 className='font-bold text-2xl'>
                    {t.title}
                </h2>
                <h2>
                    {t.description}
                </h2>
            </div>

            <div className='flex gap-2'>
                <RemoveBtn id={t._id} />
                <Link href={`/editTopic/${t._id}`}>
                    <HiPencilAlt size={24} />
                </Link>
            </div>
        </div>
        ))}
    </>
  )
};

export default TopicsList;