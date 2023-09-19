import React from "react";
import { Link } from "react-router-dom";

const LatestSpecificCategory = ({ latestData }) => {
  return (
    <div className="flex gap-3">
      <img
        className="w-16 h-16 object-cover rounded-full"
        src={latestData.logo}
        alt="latest-blog-thumbnail"
      />
 
      <div>
        <Link
          to={`/tasksDatail/${latestData?._id}`}
          className="text-lg transition duration-200 leading-3  hover:text-primary font-semibold "
        >
          {latestData.title}
        </Link>
        <div className="flex gap-2 mt-1">
          <div className="text-xs">
            <h2>{latestData.username}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestSpecificCategory;
