import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AiOutlineClockCircle, AiOutlineFileDone } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs";
import { FaIndustry } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const TaskCard = ({ task }) => {
  const { adminRole, clientRole } = useContext(AuthContext);
  const [isbookMark, setIsbookMark] = useState(false);

  const { user } = useContext(AuthContext);
  const BookMarkUserEmail = user?.email;

  const {
    logo,
    title,
    _id,
    country,
    description,
    jobType,
    industry,
    startDate,
    deadline,
    date,
    appliedCount,
  } = task;

  const currentDate = new Date();
  const taskDate = new Date(date);
  const timeDifference = currentDate - taskDate;
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const isDisabled = adminRole || clientRole;
  const BookMarkData = { task, BookMarkUserEmail };

  // console.log(task);

  const [bookmarkedTasks, setBookmarkedTasks] = useState([]);

  useEffect(() => {
    // Load existing bookmarks from localStorage when the component mounts
    const storedBookmarks = localStorage.getItem("bookmarks");
    if (storedBookmarks) {
      setBookmarkedTasks(JSON.parse(storedBookmarks));
    }
  }, []);

  const handleBookmark = () => {
    setIsbookMark(true);

    if (!isbookMark) {
      axios.post("https://biomed-server.vercel.app/bookmark", BookMarkData).then((res) => {
        if (res.data.acknowledged) {
          const taskIdToAdd = _id;

          toast.success("Successfully Bookmark!");
          // Check if the task ID is not already in the bookmarkedTasks array
          if (!bookmarkedTasks.includes(taskIdToAdd)) {
            const updatedBookmarks = [...bookmarkedTasks, taskIdToAdd];
            setBookmarkedTasks(updatedBookmarks);

            localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
          }
        }
      });
    }
  };

  return (
    <div className="border p-7 flex flex-col hover:border-hover transition rounded-md w-full dark:border-slate-700 dark:hover:border-slate-600">
      <div className="flex items-center justify-between mb-5">
        <div className="text-3xl font-bold text-gray-600">
          <h2>{title}</h2>
        </div>
        <div className=" cursor-pointer" onClick={handleBookmark}>
          {bookmarkedTasks.includes(_id) ? (
            <button className="cursor-not-allowed" disabled={true}>
              <BsBookmarkPlus className="text-xl md:text-2xl text-red-400 " />
            </button>
          ) : (
            <BsBookmarkPlus className="text-xl md:text-2xl" />
          )}
        </div>
      </div>

      <div className="flex items-center gap-5 mb-5">
        <div>
          <img
            className="w-16 h-16 bg-gray-50  object-cover rounded-full"
            src={logo}
            alt="logo"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-600">
            Task type: <span className="text-lg">{jobType}</span>
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 justify-center gap-3 xl:gap-5 mb-5">
        <div className="flex gap-2 items-center text-base xl:text-lg text-gray-500 font-semibold">
          <FaIndustry className="md:text-2xl lg:text-base xl:text-3xl text-primary" />{" "}
          {industry}
        </div>
        <div className="flex gap-2 items-center text-base xl:text-lg text-gray-500 font-semibold">
          <MdLocationOn className="md:text-2xl lg:text-base xl:text-3xl text-primary" />{" "}
          {country}
        </div>
        <div className="flex gap-2 items-center text-base xl:text-lg text-gray-500 font-semibold">
          <AiOutlineClockCircle className="md:text-2xl lg:text-base xl:text-3xl text-primary" />{" "}
          {daysAgo === 0
            ? "Today"
            : `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`}
        </div>
        <div className="flex gap-2 items-center text-base xl:text-lg text-gray-500 font-semibold">
          <AiOutlineFileDone className="md:text-2xl lg:text-base xl:text-3xl text-primary" />{" "}
          {appliedCount ? appliedCount : "No"} Applied
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center space-y-2 xl:space-y-0 gap-3 mb-2">
        <div className="border-2 rounded-3xl text-xs xl:text-sm px-3 py-1 dark:bg-slate-700 bg-gray-100">
          {startDate}
        </div>
        <div className="border-2 rounded-3xl text-xs xl:text-sm px-3 py-1 dark:bg-slate-700 bg-gray-100">
          {industry}
        </div>
      </div>

      <div className="my-5">
        <h2 className="text-lg">
          <span className="font-semibold">Dead line:</span> {deadline}
        </h2>
      </div>

      <div className="line-clamp-3 mb-5">{description}</div>

      <div className="mt-auto grid grid-cols-2 gap-5">
        <Link
          className={`flex items-center justify-center bg-[#7566D9] py-3 text-gray-200 rounded-lg ${
            isDisabled ? "cursor-not-allowed" : ""
          }`}
          to={`/tasksDatail/${_id}`}
          onClick={(e) => {
            if (isDisabled) {
              e.preventDefault();
            }
          }}
        >
          Apply Now
        </Link>
        <Link
          className={`flex items-center justify-center bg-primary py-3 text-gray-200 rounded-lg ${
            isDisabled ? "cursor-not-allowed" : ""
          }`}
          to={`/tasksDatail/${_id}`}
          onClick={(e) => {
            if (isDisabled) {
              e.preventDefault();
            }
          }}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default TaskCard;
