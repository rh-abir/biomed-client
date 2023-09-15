import React, { useContext } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineHistory,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineLogout,
  AiOutlineUnorderedList,
  AiOutlineUser,
} from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const CandidateMenu = () => {
  const { logoutUser, setCandidate, setDashboardToggle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser().then(() => {
      navigate("/");
      setCandidate(false);
    });
  };
  return (
    <div className="px-10 py-5 dark:bg-gray-900 h-screen z-50 bg-white">
      <div className="flex justify-end lg:hidden ">
        <button
          className="bg-primary p-2 rounded-full  hover:bg-hover mb-3"
          onClick={() => setDashboardToggle(false)}
        >
          <AiOutlineClose />
        </button>
      </div>
      <ul className="text-xl space-y-2">
        <li>
          <NavLink
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/candidate-home"}
            className={({ isActive }) =>
              `flex items-center gap-3 dark:text-white hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:hover:bg-gray-600${
                isActive
                  ? " border-primary text-primary  dark:text-primary dark:hover:text-primary text-xl lg:text-xl bg-green-200 transition py-5 px-3 rounded-md"
                  : "text-gray-700"
              }`
            }
          >
            <AiOutlineHome /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/my-profile"}
            className={({ isActive }) =>
              `flex items-center gap-3 dark:text-white hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:hover:bg-gray-600${
                isActive
                  ? " border-primary text-primary  dark:text-primary dark:hover:text-primary text-xl lg:text-xl bg-green-200 transition py-5 px-3 rounded-md"
                  : "text-gray-700"
              }`
            }
          >
            <AiOutlineUser /> My Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setDashboardToggle(false)}
            to="/dashboard/task-overview"
            className={({ isActive }) =>
              `flex items-center gap-3 dark:text-white hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:hover:bg-gray-600${
                isActive
                  ? " border-primary text-primary  dark:text-primary dark:hover:text-primary text-xl lg:text-xl bg-green-200 transition py-5 px-3 rounded-md"
                  : "text-gray-700"
              }`
            }
          >
            <AiOutlineUnorderedList /> My Applied
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setDashboardToggle(false)}
            to="/dashboard/task-details"
            className={({ isActive }) =>
              `flex items-center gap-3 dark:text-white hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:hover:bg-gray-600${
                isActive
                  ? " border-primary text-primary  dark:text-primary dark:hover:text-primary text-xl lg:text-xl bg-green-200 transition py-5 px-3 rounded-md"
                  : "text-gray-700"
              }`
            }
          >
            <AiOutlineInfoCircle /> My BookMark
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setDashboardToggle(false)}
            to="/dashboard/task-submission"
            className={({ isActive }) =>
              `flex items-center gap-3 dark:text-white hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:hover:bg-gray-600${
                isActive
                  ? " border-primary text-primary  dark:text-primary dark:hover:text-primary text-xl lg:text-xl bg-green-200 transition py-5 px-3 rounded-md"
                  : "text-gray-700"
              }`
            }
          >
            <AiOutlineCheckCircle /> Task Submission
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setDashboardToggle(false)}
            to="/dashboard/task-history"
            className={({ isActive }) =>
              `flex items-center gap-3 dark:text-white hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:hover:bg-gray-600${
                isActive
                  ? " border-primary text-primary  dark:text-primary dark:hover:text-primary text-xl lg:text-xl bg-green-200 transition py-5 px-3 rounded-md"
                  : "text-gray-700"
              }`
            }
          >
            <AiOutlineHistory /> Task History
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/feedback"
            onClick={() => setDashboardToggle(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 dark:text-white hover:bg-green-200 transition py-5 px-3 rounded-md text-gray-600 dark:hover:bg-gray-600${
                isActive
                  ? " border-primary text-primary  dark:text-primary dark:hover:text-primary text-xl lg:text-xl bg-green-200 transition py-5 px-3 rounded-md"
                  : "text-gray-700"
              }`
            }
          >
            <VscFeedback /> Feedback
          </NavLink>
        </li>
        <li
          onClick={handleLogout}
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

export default CandidateMenu;
