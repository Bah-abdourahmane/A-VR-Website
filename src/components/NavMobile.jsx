import React from "react";
import { IoClose } from "react-icons/io5";

const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className="relative bg-[#251f3f] w-full h-full lg:hidden ">
      <IoClose
        className="absolute left-4 top-6 cursor-pointer text-3xl"
        onClick={() => setNavMobile(false)}
      />
      <ul className="flex flex-col items-center justify-center gap-8 h-full font-secondary tracking-wider">
        <li className="nav-link text-lg">
          <a href="#">Home</a>
        </li>
        <li className="nav-link text-lg">
          <a href="#">Company</a>
        </li>
        <li className="nav-link text-lg">
          <a href="#">Features</a>
        </li>
        <li className="btn">
          <a href="#">Sign up</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
