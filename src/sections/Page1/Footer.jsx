import React from "react";
import logo from "../../assets/images/logo.svg"

const Nav = () => {
  return (
    <header className="w-full max-container pb-8">
      <nav className="flex xl:flex-row flex-col justify-between items-center padding-x pt-6 border-t border-primary">
        <a href="/">
          <img src={logo} alt="Logo" width={150.56} height={41} />
        </a>

        <div className="flex xl:flex-row flex-col justify-end items-center gap-10 pt-3">
          <h1 className="font-sans leading-normal xl:text-lg text-sm text-button-green font-[500]">
            Copyright © 2024 Nigerian Diaspora Fund. All rights reserved.
          </h1>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
