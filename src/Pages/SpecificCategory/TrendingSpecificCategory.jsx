import React from "react";
import { Link } from "react-router-dom";

const TrendingSpecificCategory = ({ task }) => {
  return (
    <div className="flex gap-3">
      <img
        className="w-16 h-16 object-cover rounded-full"
        src={task.logo}
        alt="latest-blog-thumbnail"
      />
 
      <div>
        <Link
          to={`/tasksDatail/${task?._id}`}
          className="text-lg transition duration-200 leading-3  hover:text-primary font-semibold "
        >
          {task.title}
        </Link>
        <div className="mt-1">
          <div className="text-xs">
            <h2>{task.username}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingSpecificCategory;
