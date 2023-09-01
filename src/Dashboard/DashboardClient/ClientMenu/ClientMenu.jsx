import React, { useContext } from "react";
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineUser,
} from "react-icons/ai";
import { CiPaperplane } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { PiBagSimpleBold } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const ClientMenu = () => {
  const navigate = useNavigate();
  const { logoutUser, setDashboardToggle } = useContext(AuthContext);
  const handleDashboardLogout = () => {
    logoutUser().then(() => navigate("/"));
  };
  return (
    <div className="px-10 py-5 dark:bg-gray-800 dark:text-white h-screen bg-white relative z-50">
      <div className="flex justify-end lg:hidden ">
        <button
          className="bg-primary p-2 rounded-full text-white hover:bg-hover mb-3"
          onClick={() => setDashboardToggle(false)}
        >
          <AiOutlineClose />
        </button>
      </div>
      <ul className="text-xl">
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/client-home"}
            className="flex items-center gap-3 dark:text-white "
          >
            <AiOutlineHome /> Dashboard
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/instructor-view"}
            className="flex items-center gap-3 dark:text-white"
          >
            <AiOutlineUser /> Instructor Profile
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:text-white">
          <Link
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/post-task"}
            className="flex items-center gap-3"
          >
            <CiPaperplane /> Create A New Task
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:text-white">
          <Link
            to="/dashboard/manage-task"
            onClick={() => setDashboardToggle(false)}
            className="flex items-center gap-3"
          >
            <PiBagSimpleBold /> Manage Task
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:text-white">
          <Link
            to="/dashboard/all-applications"
            onClick={() => setDashboardToggle(false)}
            className="flex items-center gap-3"
          >
            <IoIosPaper /> All Applications
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:text-white">
          <Link
            to={"/dashboard/client-message"}
            onClick={() => setDashboardToggle(false)}
            className="flex items-center gap-3"
          >
            <RiMessage2Line /> Messages
          </Link>
        </li>
        <li
          onClick={handleDashboardLogout}
          className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:text-white"
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
