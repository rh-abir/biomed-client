import React from "react";
import { Link } from "react-router-dom";

const TrendingSlide = ({ task }) => {
  return (
    <div className="border rounded-xl w-full h-[470px] dark:border-gray-700 dark:hover:border-slate-600 flex flex-col">
      <img
        className="rounded-t-xl w-full h-[279px] object-cover"
        src={task.thumbnail}
        alt=""
      />
      <div className="p-2 h-100 overflow-hidden space-y-2">
        <h2 className="text-base text-gray-500 pt-4 line-clamp-1">
          {task.title}
        </h2>
        <Link to="/">
          <p className="mb-4 text-xl font-semibold dark:text-gray-300 hover:text-[#5BBB7B] hover:underline duration-300 cursor-pointer">
            {`${task.description.slice(0, 60)}...`}
          </p>
        </Link>
        <hr className="mx-4 border dark:border-gray-700 border-gray-300" />
      </div>

      <div className="p-3 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-2 hover:text-[#5BBB7B] duration-500 cursor-pointer">
          <img
            className="h-8 w-8 rounded-full object-cover"
            src={task.logo}
            alt=""
          />
          <p className="text-lg">{task.username}</p>
        </div>
        <Link
          to={`/tasksDatail/${task?._id}`}
          className="bg-primary hover:bg-hover transition hover:text-gray-100 text-gray-50 py-1 px-2 rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default TrendingSlide;
