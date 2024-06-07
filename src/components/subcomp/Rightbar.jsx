import React from 'react';
import { users, posts } from '../../data';

import ImgCard from '../miniComp/ImgCard';

const Rightbar = () => {
  console.log(posts);
  return (
    <div className=" col-span-2 relative">
      <div className="flex gap-5 items-center mb-4">
        <h2 className="text-xl font-semibold">Artists</h2>
        <span className="text-xl font-semibold text-slate-400">
          Photographers
        </span>
      </div>
      {posts.map((item, i) => (
        <ImgCard posts={item} key={i} users={users} />
      ))}
    </div>
  );
};

export default Rightbar;
