import React from 'react';
import Feed from './subcomp/Feed';
import Rightbar from './subcomp/Rightbar';
import { users, posts } from '../data';

const Main = () => {
  return (
    <>
      <div className="col-span-6 grid grid-cols-6 gap-4 relative">
        <div className="col-span-4 flex gap-4 flex-col">
          {posts.map((p) => (
            <Feed posts={p} />
          ))}
        </div>

        <Rightbar />
      </div>
    </>
  );
};

export default Main;
