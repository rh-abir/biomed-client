import React from "react";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"; 
const TrendingSlide = ({ task }) => {
  return (
    <div className="border rounded-xl w-full h-[470px] dark:border-gray-700 dark:hover:border-slate-600">
      <img className="rounded-t-xl w-full" src={task.task_image} alt="" />
      <div className="p-2 h-100 overflow-hidden space-y-2">
        {/* Title */}
        <SkeletonTheme color="#f3f3f3" highlightColor="#ecebeb">
          {task.task_title ? (
            <h2 className="text-base text-gray-500 pt-4">{task.task_title}</h2>
          ) : (
            <Skeleton height={20} width={200} />
          )}
        </SkeletonTheme>

        <Link to="/">
          <p className="mb-4 text-xl font-semibold dark:text-gray-300 hover:text-[#5BBB7B] hover:underline duration-300 cursor-pointer">
            {`${task.task_text.slice(0, 60)}...`}
          </p>
        </Link>
        <hr className="mx-4 border dark:border-gray-700 border-gray-300" />
      </div>

      <div className="p-3 flex items-center justify-between">
        <div className="flex items-center gap-2 hover:text-[#5BBB7B] duration-500 cursor-pointer">
          {/* CEO Image */}
          <SkeletonTheme color="#f3f3f3" highlightColor="#ecebeb">
            {task.ceo_image ? (
              <img className="h-8 w-8 rounded-full" src={task.ceo_image} alt="" />
            ) : (
              <Skeleton circle={true} height={32} width={32} />
            )}
          </SkeletonTheme>

          {/* CEO Name */}
          <SkeletonTheme color="#f3f3f3" highlightColor="#ecebeb">
            {task.ceo_name ? (
              <p className="text-lg">{task.ceo_name}</p>
            ) : (
              <Skeleton height={20} width={100} />
            )}
          </SkeletonTheme>
        </div>
        <Link className="bg-primary hover:bg-hover transition hover:text-gray-100 text-gray-50 py-1 px-2 rounded-md">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default TrendingSlide;
