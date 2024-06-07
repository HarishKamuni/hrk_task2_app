import React, { useState } from 'react';
import { users } from '../../data';
import likeImg from '../../assets/like.png';
import planLike from '../../assets/planlike.png';
import heartImg from '../../assets/heart.png';
import blankheart from '../../assets/blankheart.png';
import { CiMenuKebab } from 'react-icons/ci';
import { FaRegMessage } from 'react-icons/fa6';
import { FiSend } from 'react-icons/fi';

const Feed = ({ posts }) => {
  console.log(posts);
  const [like, setLike] = useState(posts.like);
  const [isLiked, setIsLiked] = useState(false);
  const [heart, setHeart] = useState(false);
  const clickHandler = () => {
    // console.log(isLiked)
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  const heartHandler = () => {
    setHeart(!heart);
  };
  return (
    <div className=" bg-white p-5 rounded-md">
      <div className="postWrapper">
        <div className="postTop flex w-full justify-between items-center mb-4">
          <div className="postTopLeft flex gap-4">
            <img
              src={users[0].image.user}
              alt="Not found"
              className="postProfileImg w-[40px] h-[40px] bg-contain rounded-md"
            />
            <div className="flex flex-col">
              <span className="postUserName font-semibold">
                {users.map((n) => n.name)}
              </span>
              <span className="postDate text-xs text-slate-500">
                {posts.date}
              </span>
            </div>
          </div>
          <div className="postTopRight ">
            <CiMenuKebab />
          </div>
        </div>
        <div className="postCenter">
          <span className="postCenterText text-sm ">{posts.desc}</span>
          <img
            src={posts.photo}
            alt="photo"
            className="postCenterImg mt-5 w-full rounded-md"
          />
        </div>
        <div className="postBottom mt-8 ">
          <div className="postBottomLeft flex gap-5">
            <div className="flex gap-2 items-center">
              {heart ? (
                <img
                  src={heartImg}
                  width={20}
                  onClick={heartHandler}
                  alt="like"
                  className="postLikeIcon"
                />
              ) : (
                <img
                  src={blankheart}
                  width={20}
                  onClick={heartHandler}
                  alt="like"
                  className="postLikeIcon"
                />
              )}
              <span className="postLikeCounter">{like}k</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="">
                <FaRegMessage width={100} />
              </span>

              <span className="postLikeCounter">{like}k</span>
            </div>

            <div className="flex gap-2 items-center">
              <FiSend />
              <span className="postLikeCounter">{like}k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
