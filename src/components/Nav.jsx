import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { navLinks } from "../contants";
import hamburger from "../assets/icons/hamburger.svg";
import close from "../assets/icons/close.svg"; // Add a close icon for the dropdown
import Button from "./Button";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="fixed padding-x py-6 z-10 w-full bg-white border-b border-pale-green">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={logo} alt="Logo" width={150.56} height={41} />
        </a>

        <ul className="flex-1 flex justify-end items-center gap-10 max-lg:hidden">
          {navLinks.map((item, index) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-button-green"
              >
                {item.label}
              </a>
            </li>
          ))}
          <Button label="Contact Us" />
        </ul>

        <div className="hidden max-lg:block" onClick={toggleDropdown}>
          <img
            src={isDropdownOpen ? close : hamburger}
            alt="Menu Icon"
            width={25}
            height={25}
          />
        </div>
      </nav>

      {isDropdownOpen && (
        <div className="absolute top-16 right-0 w-full bg-white shadow-md animate-slide-down">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-button-green"
                  onClick={toggleDropdown}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <Button label="Contact Us" />
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
