import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { IoFilterOutline } from 'react-icons/io5';

const Searchbar = () => {
  return (
    <div className="col-span-4 bg-white py-4 px-6 rounded-md flex items-center justify-between">
      <span className="flex items-center gap-2">
        <IoSearchOutline size={20} />
        <input type="text" placeholder="search here..." />
      </span>
      <span className="flex items-center gap-2">
        <IoFilterOutline />
        <span>filter</span>
      </span>
    </div>
  );
};

export default Searchbar;
