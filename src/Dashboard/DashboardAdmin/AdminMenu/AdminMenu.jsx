import React, { useContext } from "react";
import { AiOutlineClose, AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import {
  BsFillPeopleFill,
  BsFillSignpostFill,
  BsMicrosoftTeams,
} from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi2";
import { ImProfile } from "react-icons/im";
import { RiChatSettingsLine } from "react-icons/ri";
import { TbSocial } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

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
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:hover:bg-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/admin-home"}
            className="flex items-center gap-3 dark:text-white "
          >
            <AiOutlineHome /> Dashboard
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:hover:bg-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/admin-profile"}
            className="flex items-center gap-3 dark:text-white"
          >
            <ImProfile /> Admin Profile
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:hover:bg-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/all-users"}
            className="flex items-center gap-3 dark:text-white"
          >
            <FaUsers /> All Users
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:hover:bg-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/all-client"}
            className="flex items-center gap-3 dark:text-white"
          >
            <HiOutlineUsers /> All Clients
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:text-white dark:hover:bg-gray-600">
          <Link
            to="/dashboard/all-moderator"
            onClick={() => setDashboardToggle(false)}
            className="flex items-center gap-3"
          >
            <BsFillPeopleFill /> All Moderator
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:text-white dark:hover:bg-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to="/dashboard/post-blog"
            className="flex items-center gap-3"
          >
            <BsFillSignpostFill /> Post A New Blog
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:text-white dark:hover:bg-gray-600">
          <Link
            to="/dashboard/manage-jobs"
            onClick={() => setDashboardToggle(false)}
            className="flex items-center gap-3"
          >
            <RiChatSettingsLine /> Manage Blogs
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:text-white dark:hover:bg-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to="/dashboard/social-media"
            className="flex items-center gap-3"
          >
            <TbSocial /> Social Media
          </Link>
        </li>

        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:text-white dark:hover:bg-gray-600">
          <Link
            to="/dashboard/about-us"
            onClick={() => setDashboardToggle(false)}
            className="flex items-center gap-3"
          >
            <FaUsersGear className="text-2xl" /> About Us
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:text-white dark:hover:bg-gray-600">
          <Link
            to="/dashboard/team-member"
            onClick={() => setDashboardToggle(false)}
            className="flex items-center gap-3"
          >
            <BsMicrosoftTeams className="text-2xl" /> Add A Team Member
          </Link>
        </li>
        <li
          onClick={handleDashboardLogout}
          className="hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:text-white dark:hover:bg-gray-600"
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
