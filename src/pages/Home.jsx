import React from 'react';
import Topbar from '../components/Topbar';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import BottomComp from '../components/subcomp/BottomComp';
import { posts } from '../data';

const Home = () => {
  return (
    <div className="p-4 flex flex-col">
      <Topbar />
      <div className="grid grid-cols-8 gap-4">
        <Sidebar />
        <Main />
      </div>
      <div className="flex justify-center items-center mt-6">
        {posts.map((item) => (
          <BottomComp posts={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
