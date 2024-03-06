'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoIosSearch } from "react-icons/io";

export default function SearchPlace() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form
      className=' border rounded  mt-3 flex justify-between px-5 max-w-6xl mx-auto'
      onSubmit={handleSubmit}
    >
        <div className='flex items-center gap-1'>
        <IoIosSearch />
      <input
        type='text'
        placeholder='Search Movies or TvShows...'
        className='w-full h-14  rounded-md placeholder-gray-500 outline-none bg-transparent flex-1'
        value={search}
        onChange={(e) => setSearch(e.target.value)}

      />
        </div>
     
      <button
        className='text-blue-400 disabled:text-gray-400'
        disabled={search === ''}
      >
        Search
      </button>
    </form>
  );
}