import React, { Fragment } from "react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <Fragment>
      <div className="flex flex-row w-full h-12 bg-white border-b border-black border-solid items-center px-4">
        <img src={logo} alt="Logo" className="w-8"></img>
      </div>
    </Fragment>
  );
};

export default NavBar;
