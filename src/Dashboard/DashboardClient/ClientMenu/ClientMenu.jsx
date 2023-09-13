import React, { useContext } from "react";
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineUser,
} from "react-icons/ai";
import { CiPaperplane } from "react-icons/ci";
import { IoIosPaper } from "react-icons/io";
import { PiBagSimpleBold } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const ClientMenu = () => {
  const navigate = useNavigate();
  const { logoutUser, setDashboardToggle } = useContext(AuthContext);
  const handleDashboardLogout = () => {
    logoutUser().then(() => navigate("/"));
  };
  return (
    <div className="px-10 py-5 dark:bg-gray-800 dark:text-white h-screen bg-white relative z-50 w-full">
      <div className="flex justify-end lg:hidden ">
        <button
          className="bg-primary p-2 rounded-full text-white hover:bg-hover  mb-3"
          onClick={() => setDashboardToggle(false)}
        >
          <AiOutlineClose />
        </button>
      </div>
      <ul className="text-xl">
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:text-white dark:hover:bg-gray-600">
          <NavLink
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/client-home"}
            className={({ isActive }) =>
              `flex items-center gap-3 dark:text-white${
                isActive
                  ? " border-primary text-primary dark:text-primary dark:hover:text-primary text-xl lg:text-xl"
                  : "text-gray-700"
              }`
            }
          >
            <AiOutlineHome /> Dashboard
          </NavLink>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:text-white dark:hover:bg-gray-600">
          <NavLink
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/instructor-view"}
            className={({ isActive }) =>
              `flex items-center gap-3 dark:text-white${
                isActive
                  ? " border-primary text-primary dark:text-primary dark:hover:text-primary text-xl lg:text-xl"
                  : "text-gray-700"
              }`
            }
          >
            <AiOutlineUser /> Instructor Profile
          </NavLink>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:text-white dark:hover:bg-gray-600">
          <NavLink
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/post-task"}
            className={({ isActive }) =>
              `flex items-center gap-3 dark:text-white${
                isActive
                  ? " border-primary text-primary dark:text-primary dark:hover:text-primary text-xl lg:text-xl"
                  : "text-gray-700"
              }`
            }
          >
            <CiPaperplane /> Create A New Task
          </NavLink>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:text-white dark:hover:bg-gray-600">
          <NavLink
            to="/dashboard/manage-task"
            onClick={() => setDashboardToggle(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 dark:text-white${
                isActive
                  ? " border-primary text-primary dark:text-primary dark:hover:text-primary text-xl lg:text-xl"
                  : "text-gray-700"
              }`
            }
          >
            <PiBagSimpleBold /> Manage Task
          </NavLink>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:text-white dark:hover:bg-gray-600">
          <NavLink
            to="/dashboard/evaluate-applicants"
            onClick={() => setDashboardToggle(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 dark:text-white${
                isActive
                  ? " border-primary text-primary dark:text-primary dark:hover:text-primary text-xl lg:text-xl"
                  : "text-gray-700"
              }`
            }
          >
            <IoIosPaper /> Evaluate Applicant
          </NavLink>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:text-white dark:hover:bg-gray-600">
          <NavLink
            to={"/dashboard/client-message"}
            onClick={() => setDashboardToggle(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 dark:text-white${
                isActive
                  ? " border-primary text-primary dark:text-primary dark:hover:text-primary text-xl lg:text-xl"
                  : "text-gray-700"
              }`
            }
          >
            <RiMessage2Line /> Messages
          </NavLink>
        </li>
        <li
          onClick={handleDashboardLogout}
          className="hover:bg-red-500 hover:text-white transition py-5 px-3 rounded-md text-gray-600 dark:text-white dark:hover:bg-red-500"
        >
          <Link className="flex items-center gap-3">
            <AiOutlineLogout /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ClientMenu;
