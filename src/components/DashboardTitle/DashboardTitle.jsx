import React, { useContext } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AuthContext } from "../../Provider/AuthProvider";

const DashboardTitle = ({ title, slogan }) => {
  const { setDashboardToggle } = useContext(AuthContext);
  return (
    <div className="mb-10 dark:text-white">
      <h2 className="text-4xl font-semibold mb-3">{title}</h2>
      <p>{slogan}</p>

      <button
        onClick={() => setDashboardToggle(true)}
        className="text-base text-primary hover:text-green-600 dark:bg-gray-800 dark:text-gray-100 flex items-center gap-2 bg-slate-200 hover:bg-slate-300 duration-500 px-6 py-3 rounded-md mt-6 lg:hidden"
      >
        <HiOutlineMenuAlt3 /> Menu
      </button>
    </div>
  );
};

export default DashboardTitle;
