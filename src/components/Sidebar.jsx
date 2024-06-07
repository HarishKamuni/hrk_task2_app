import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoMailOutline } from 'react-icons/io5';
import { IoWalletOutline } from 'react-icons/io5';
import { GiAlliedStar } from 'react-icons/gi';
import { FaRegUser } from 'react-icons/fa6';
import { CiSettings } from 'react-icons/ci';
import { RiLogoutCircleLine } from 'react-icons/ri';

const Sidebar = () => {
  return (
    <div className="col-span-2 bg-white rounded-md h-[500px] relative">
      <div className="sidebarWrapper ml-5 flex flex-col justify-between ">
        <ul className="sidebarList flex flex-col m-4  gap-3">
          <li className="sidebarListItems flex gap-2 items-center">
            {' '}
            <IoHomeOutline />
            <span className="sidebarListItemText">Home</span>
          </li>
          <li className="sidebarListItems flex gap-2 items-center ">
            <IoMdNotificationsOutline />
            <span className="sidebarListItemText">Notifications</span>
          </li>
          <li className="sidebarListItems flex gap-2 items-center   ">
            <IoIosHeartEmpty />
            <span className="sidebarListItemText">Shop</span>
          </li>
          <li className="sidebarListItems flex gap-2 items-center   ">
            <IoMailOutline />
            <span className="sidebarListItemText">Conversations</span>
          </li>
          <li className="sidebarListItems flex gap-2 items-center   ">
            <IoWalletOutline />
            <span className="sidebarListItemText">Wallet</span>
          </li>
          <li className="sidebarListItems flex gap-2 items-center   ">
            <GiAlliedStar />
            <span className="sidebarListItemText">Subscription</span>
          </li>
          <li className="sidebarListItems flex gap-2 items-center   ">
            <FaRegUser />
            <span className="sidebarListItemText">My Profiles</span>
          </li>
          <li className="sidebarListItems flex gap-2 items-center   ">
            <CiSettings />
            <span className="sidebarListItemText">Settings</span>
          </li>
        </ul>
        <button className="sidebarButton flex gap-2 items-center m-4 mt-30 absolute bottom-0">
          <RiLogoutCircleLine />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
