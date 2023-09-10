import React, { useContext } from "react";
import {
  AiFillProfile,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineUser,
} from "react-icons/ai";
import { BsFillPeopleFill, BsFillSignpostFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { PiBagSimpleBold } from "react-icons/pi";

const AdminMenu = () => {
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
            to={"/dashboard/admin-profile"}
            className="flex items-center gap-3 dark:text-white"
          >
            <AiFillProfile /> Admin Profile
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/all-users"}
            className="flex items-center gap-3 dark:text-white"
          >
            <AiOutlineUser /> All Users
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/all-client"}
            className="flex items-center gap-3 dark:text-white"
          >
            <AiOutlineUser /> All Clients
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:text-white">
          <Link
            onClick={() => setDashboardToggle(false)}
            to="/dashboard/post-blog"
            className="flex items-center gap-3"
          >
            <BsFillSignpostFill /> Post A New Blog
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:text-white">
          <Link
            onClick={() => setDashboardToggle(false)}
            to="/dashboard/social-media"
            className="flex items-center gap-3"
          >
            <BsFillSignpostFill /> Social Media
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:text-white">
          <Link
            to="/dashboard/manage-jobs"
            onClick={() => setDashboardToggle(false)}
            className="flex items-center gap-3"
          >
            <PiBagSimpleBold /> Manage Blogs
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:text-white">
          <Link
            to="/dashboard/all-moderator"
            onClick={() => setDashboardToggle(false)}
            className="flex items-center gap-3"
          >
            <BsFillPeopleFill /> All Moderator
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

export default AdminMenu;
