import React from "react";

const NavItems = ({ navItems }) => {
  return (
    <div>
      <ul className="flex gap-10 list-none">
        {navItems.map((item) => (
          <li>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;
