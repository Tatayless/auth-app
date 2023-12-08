import React, { Fragment } from 'react';
import logo from '../assets/logo.webp';

const NavBar = () => {
  return (
    <Fragment>
      <div className="flex flex-row w-screen h-14 border-b border-secondary-700 border-solid items-center px-4 gap-4 title text-lg tracking-wider">
        <img src={logo} alt="Logo" className="w-8" />
        <span className="text-gradient sm:flex hidden">Authentication</span>
      </div>
    </Fragment>
  );
};

export default NavBar;
