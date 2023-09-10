import React from "react";
import { Link } from "react-router-dom";

const BlogLatest = ({ data }) => {
  return (
    <div className="flex gap-3">
      <img
        className="w-16 h-16 object-cover rounded-full"
        src={data.thumbnail}
        alt="latest-blog-thumbnail"
      />

      <div>
        <Link
          to={`/blogDetails/${data?._id}`}
          className="text-lg transition duration-200 leading-3  hover:text-primary font-semibold "
        >
          {data.title}
        </Link>
        <div className="flex gap-2 mt-1">
          <div>
            <img
              className="w-5 h-5 rounded-full"
              src={data.writer_img}
              alt="writer image"
            />
          </div>
          <div className="text-xs">
            <h2>{data.writer}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLatest;
