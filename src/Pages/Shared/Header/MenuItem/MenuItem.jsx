import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ name, path }) => {
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
            `dark:text-gray-100 dark:hover:text-gray-50 font-normal xl:font-medium${
              isActive
                ? " border-primary text-primary dark:text-primary dark:hover:text-primary text-2xl lg:text-lg"
                : "text-gray-700"
            }`
          }
      
        to={path}
      >
        <li>{name}</li>
      </NavLink>
    </div>
  );
};

export default MenuItem;
