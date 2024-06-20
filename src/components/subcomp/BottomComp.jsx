import React from 'react';

const BottomComp = ({ posts }) => {
  return (
    <div className="flex flex-col gap-2 p-2 min-w-[300px]">
      <img src={posts.photo} alt="bottomImg" className="w-full rounded-md" />
      <div className="flex flex-col gap-2">
        <p className="text-xs">Lorem ipsum dolor, Officiis, nihil.</p>
        <div className="flex justify-between">
          <span>$199.99</span>
          <span>🎇🎇🎇🎇🎇</span>
        </div>
      </div>
    </div>
  );
};

export default BottomComp;
