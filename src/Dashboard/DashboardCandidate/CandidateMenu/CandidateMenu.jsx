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

import { Link, useNavigate } from "react-router-dom";
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
      <ul className="text-xl">
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md dark:text-white text-gray-600 dark:hover:bg-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/candidate-home"}
            className="flex items-center gap-3"
          >
            <AiOutlineHome /> Dashboard
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md dark:text-white text-gray-600 dark:hover:bg-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to={"/dashboard/my-profile"}
            className="flex items-center gap-3"
          >
            <AiOutlineUser /> My Profile
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md dark:text-white text-gray-600 dark:hover:bg-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to="/dashboard/task-overview"
            className="flex items-center gap-3"
          >
            <AiOutlineUnorderedList /> My Applied
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md dark:text-white text-gray-600 dark:hover:bg-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to="/dashboard/task-details"
            className="flex items-center gap-3"
          >
            <AiOutlineInfoCircle /> My BookMark
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md dark:text-white text-gray-600 dark:hover:bg-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to="/dashboard/task-submission"
            className="flex items-center gap-3"
          >
            <AiOutlineCheckCircle /> Task Submission
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md dark:text-white text-gray-600 dark:hover:bg-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            to="/dashboard/task-history"
            className="flex items-center gap-3"
          >
            <AiOutlineHistory /> Task History
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md dark:text-white text-gray-600 dark:hover:bg-gray-600">
          <Link
            onClick={() => setDashboardToggle(false)}
            className="flex items-center gap-3"
          >
            <RiMessage2Line /> Messages
          </Link>
        </li>
        <li className="hover:bg-green-200 transition py-5 px-3 rounded-md dark:text-white text-gray-600 dark:hover:bg-gray-600">
          <Link
            to="/dashboard/feedback"
            onClick={() => setDashboardToggle(false)}
            className="flex items-center gap-3"
          >
            <VscFeedback /> Feedback
          </Link>
        </li>
        <li
          onClick={handleLogout}
          className="hover:bg-red-400 hover:text-white transition py-5 px-3 rounded-md dark:text-white text-gray-600 dark:hover:bg-gray-600"
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
