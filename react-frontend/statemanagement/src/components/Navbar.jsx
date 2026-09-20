import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="h-[50px] border-b border-neutral-200 w-full flex items-center justify-between px-5">
      <div>
        <Link to="#" className="font-semibold text-orange-500 tracking-wide">
          StateMG
        </Link>
      </div>

      <div>
        <ul className="flex space-x-2">
          <li>
            <Link to="#">Cart</Link>
          </li>
          <li>
            <Link to="#">Products</Link>
          </li>
          <li>
            <Link to="#">Users</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
