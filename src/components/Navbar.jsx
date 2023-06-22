import React from "react";
import SearchIcon from "../utils/SearchIcon";
import MenuIcon from "../utils/MenuIcon";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-10 flex justify-between m-3 items-center max-w-full lg:max-w-[80%] lg:mx-auto lg:gap-9 lg:mt-10">
      <div className="text-2xl lg:hidden">
        <MenuIcon />
      </div>
      <div>
        <Link to={"/#"}>
          <img
            className="h-14"
            src="https://pwskills.com/images/PWSkills-main.png"
            alt=" Skills you will learn"
          />
        </Link>
      </div>
      <div className="hidden lg:flex border-gray-500 border-[1px] rounded-md flex-auto p-2 space-x-3 items-center">
        <SearchIcon height={20} />
        <input
          type="text"
          className="outline-none w-full"
          placeholder="What do you want to learn?"
        />
      </div>
      <div className="hidden lg:block ">
        <button className="bg-royal-blue-700 text-white text-1xl font-bold outline-none rounded-lg px-7 py-2">
          Login/Register
        </button>
      </div>
      <div className="hover:cursor-pointer lg:hidden">
        <SearchIcon height={28} />
      </div>
    </nav>
  );
};

export default Navbar;
