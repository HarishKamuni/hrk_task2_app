import React from 'react';
import user from '../../assets/persons/1.png';

const ImgCard = ({ posts, users }) => {
  return (
    <div className=" mt-3 relative w-full">
      <img
        src={posts.photo}
        alt="image"
        className="object-contain rounded-md w-full"
      />
      <div className="absolute bottom-5 left-5 flex gap-4">
        <span className="relative">
          <img
            src={user}
            alt="user"
            width={60}
            className="rounded-md border-4 "
          />
          <span className="bg-green-500 w-3 h-3 rounded-full absolute -top-1 left-12 border-2"></span>
        </span>

        <span className="flex flex-col text-white">
          <h2 className="font-semibold text-lg">Thomas Edward</h2>
          <p className="text-xs">@thewildwithyou</p>
        </span>
      </div>
    </div>
  );
};

export default ImgCard;
