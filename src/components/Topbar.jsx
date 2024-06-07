import React from 'react';
import Logo from './miniComp/Logo';
import Searchbar from './miniComp/Searchbar';
import Button from './miniComp/Button';

const Topbar = () => {
  return (
    <div className="grid grid-cols-8 gap-4 my-4 ">
      <Logo />
      <Searchbar />
      <Button />
    </div>
  );
};

export default Topbar;
