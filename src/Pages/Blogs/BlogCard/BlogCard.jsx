import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blogItems }) => {
  const { _id, title, thumbnail, writer, writing_date, writer_img } = blogItems;

  const dateObject = new Date(writing_date);
  const formattedDate = dateObject.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link to={`/blogs/blogDetails/${_id}`}>
      <div className="mx-auto w-10/12 h-[300px] md:h-full lg:w-full lg:h-[250px] xl:h-full bg-black relative hover:ring-4 ring-green-400 rounded-2xl">
        <div className=" aspect-w-1 aspect-h-1 h-full ">
          <img
            src={thumbnail}
            className="object-cover object-center rounded-2xl"
          />
        </div>
        <div className=" absolute w-full h-full top-0 flex flex-col">
          <div className="flex-1 "></div>
          <div className="flex-1 flex flex-col p-10 bg-gradient-to-t from-black rounded-2xl">
            <div className="flex-1"></div>
            <div>
              <div className="flex items-center justify-between text-gray-300">
                <h1>{formattedDate}</h1>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9">
                    <div className=" aspect-w-1 aspect-h-1">
                      <img
                        src={writer_img}
                        className=" rounded-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <h1>{writer}</h1>
                </div>
              </div>
              <h1 className="text-xl font-semibold text-white mt-5">
                {`${title.slice(0, 100)}...`}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
