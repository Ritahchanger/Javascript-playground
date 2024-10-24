import React from "react";

const Navbar = () => {
  return (
    <div className="h-[50px] border-b border-neutral-200 w-full flex items-center justify-between px-5">
      <div>
        <a href="#" className="font-semibold text-orange-500 tracking-wide">
          StateMG
        </a>
      </div>

      <div>
        <ul className="flex space-x-2">
          <li>
            <a href="">Cart</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Users</a>
          </li>
          <li>
            <a href="">Signup</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
