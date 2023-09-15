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
import { NavLink, useNavigate } from "react-router-dom";
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
      <ul className="text-xl space-y-2">
        <li>
          <NavLink
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/admin-home"}
            className={({ isActive }) =>
              `flex items-center gap-3 dark:text-white hover:bg-green-200 dark:hover:bg-slate-600 transition py-5 px-3 rounded-md text-gray-600${
                isActive
                  ? " border-primary text-primary  dark:text-primary dark:hover:bg-slate-600 text-xl lg:text-xl bg-green-200 dark:bg-slate-600 transition py-5 px-3 rounded-md"
                  : "text-gray-700"
              }`
            }
          >
            <AiOutlineHome /> Dashboard
          </NavLink>
        </li>
        <li >
          <NavLink
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/admin-profile"}
            className={({ isActive }) =>
              `flex items-center gap-3 dark:text-white hover:bg-green-200 dark:hover:bg-slate-600 transition py-5 px-3 rounded-md text-gray-600${
                isActive
                  ? " border-primary text-primary  dark:text-primary dark:hover:bg-slate-600 text-xl lg:text-xl bg-green-200 dark:bg-slate-600 transition py-5 px-3 rounded-md"
                  : "text-gray-700"
              }`
            }
          >
            <ImProfile /> Admin Profile
          </NavLink>
        </li>
        <li >
          <NavLink
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/all-users"}
            className={({ isActive }) =>
              `flex items-center gap-3 dark:text-white hover:bg-green-200 dark:hover:bg-slate-600 transition py-5 px-3 rounded-md text-gray-600${
                isActive
                  ? " border-primary text-primary  dark:text-primary dark:hover:bg-slate-600 text-xl lg:text-xl bg-green-200 dark:bg-slate-600 transition py-5 px-3 rounded-md"
                  : "text-gray-700"
              }`
            }
          >
            <FaUsers /> All Users
          </NavLink>
        </li>
        <li >
          <NavLink
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/all-client"}
            className={({ isActive }) =>
              `flex items-center gap-3 dark:text-white hover:bg-green-200 dark:hover:bg-slate-600 transition py-5 px-3 rounded-md text-gray-600${
                isActive
                  ? " border-primary text-primary  dark:text-primary dark:hover:bg-slate-600 text-xl lg:text-xl bg-green-200 dark:bg-slate-600 transition py-5 px-3 rounded-md"
                  : "text-gray-700"
              }`
            }
          >
            <HiOutlineUsers /> All Clients
          </NavLink>
        </li>
        <li >
          <NavLink
            to="/dashboard/all-moderator"
            onClick={() => setDashboardToggle(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 dark:text-white hover:bg-green-200 dark:hover:bg-slate-600 transition py-5 px-3 rounded-md text-gray-600${
                isActive
                  ? " border-primary text-primary  dark:text-primary dark:hover:bg-slate-600 text-xl lg:text-xl bg-green-200 dark:bg-slate-600 transition py-5 px-3 rounded-md"
                  : "text-gray-700"
              }`
            }
          >
            <BsFillPeopleFill /> All Moderator
          </NavLink>
        </li>
        <li >
          <NavLink
            onClick={() => setDashboardToggle(false)}
            to="/dashboard/post-blog"
            className={({ isActive }) =>
              `flex items-center gap-3 dark:text-white hover:bg-green-200 dark:hover:bg-slate-600 transition py-5 px-3 rounded-md text-gray-600${
                isActive
                  ? " border-primary text-primary  dark:text-primary dark:hover:bg-slate-600 text-xl lg:text-xl bg-green-200 dark:bg-slate-600 transition py-5 px-3 rounded-md"
                  : "text-gray-700"
              }`
            }
          >
            <BsFillSignpostFill /> Post A New Blog
          </NavLink>
        </li>
        <li >
          <NavLink
            to={"/dashboard/admin-home"}
            onClick={() => setDashboardToggle(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 dark:text-white hover:bg-green-200 dark:hover:bg-slate-600 transition py-5 px-3 rounded-md text-gray-600${
                isActive
                  ? " border-primary text-primary  dark:text-primary dark:hover:bg-slate-600 text-xl lg:text-xl bg-green-200 dark:bg-slate-600 transition py-5 px-3 rounded-md"
                  : "text-gray-700"
              }`
            }
          >
            <RiChatSettingsLine /> Manage Blogs
          </NavLink>
        </li>
        <li >
          <NavLink
            onClick={() => setDashboardToggle(false)}
            to="/dashboard/social-media"
            className={({ isActive }) =>
              `flex items-center gap-3 dark:text-white hover:bg-green-200 dark:hover:bg-slate-600 transition py-5 px-3 rounded-md text-gray-600${
                isActive
                  ? " border-primary text-primary  dark:text-primary dark:hover:bg-slate-600 text-xl lg:text-xl bg-green-200 dark:bg-slate-600 transition py-5 px-3 rounded-md"
                  : "text-gray-700"
              }`
            }
          >
            <TbSocial /> Social Media
          </NavLink>
        </li>

        <li >
          <NavLink
            to="/dashboard/about-us"
            onClick={() => setDashboardToggle(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 dark:text-white hover:bg-green-200 dark:hover:bg-slate-600 transition py-5 px-3 rounded-md text-gray-600${
                isActive
                  ? " border-primary text-primary  dark:text-primary dark:hover:bg-slate-600 text-xl lg:text-xl bg-green-200 dark:bg-slate-600 transition py-5 px-3 rounded-md"
                  : "text-gray-700"
              }`
            }
          >
            <FaUsersGear className="text-2xl" /> About Us
          </NavLink>
        </li>
        <li >
          <NavLink
            to="/dashboard/team-member"
            onClick={() => setDashboardToggle(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 dark:text-white hover:bg-green-200 dark:hover:bg-slate-600 transition py-5 px-3 rounded-md text-gray-600${
                isActive
                  ? " border-primary text-primary  dark:text-primary dark:hover:bg-slate-600 text-xl lg:text-xl bg-green-200 dark:bg-slate-600 transition py-5 px-3 rounded-md"
                  : "text-gray-700"
              }`
            }
          >
            <BsMicrosoftTeams className="text-2xl" /> Add A Team Member
          </NavLink>
        </li>
        <li
          onClick={handleDashboardLogout}
          className="hover:bg-red-500 hover:text-white transition py-5 px-3 rounded-md text-gray-600 dark:text-white dark:hover:bg-red-500"
        >
          <NavLink className="flex gap-2 items-center">
            <AiOutlineLogout /> Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminMenu;
