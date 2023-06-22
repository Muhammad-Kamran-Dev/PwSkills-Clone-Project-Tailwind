import React from "react";
import { Link } from "react-router-dom";

const LinkSection = () => {
  return (
    <div className="hidden lg:flex lg:max-w-[70%] mx-auto  my-6">
      <ul className="flex lg:space-x-10 xl:space-x-16  lg:text-base xl:text-lg font-medium">
        <li>
          <Link className="whitespace-nowrap" to="/#">
            Courses
          </Link>
        </li>
        <li>
          <Link className="whitespace-nowrap" to="/#">
            PW SKills Lab
          </Link>
        </li>
        <li>
          <Link className="whitespace-nowrap" to="/#">
            Job Portal
          </Link>
        </li>
        <li>
          <Link className="whitespace-nowrap" to="/#">
            Experience Portal
          </Link>
        </li>
        <li>
          <Link className="whitespace-nowrap" to="/#">
            Become an affiliate
          </Link>
        </li>
        <li>
          <Link className="whitespace-nowrap" to="/#">
            Hall of fame
          </Link>
        </li>
        <li>
          <Link className="whitespace-nowrap" to="/#">
            More
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LinkSection;
