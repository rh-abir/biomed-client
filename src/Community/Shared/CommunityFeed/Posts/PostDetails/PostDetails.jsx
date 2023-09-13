import React, { useContext, useState } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../../Provider/AuthProvider";
import canva from "../../../../../assets/placeholder.jpg";
import PostDropdown from "../PostDropdown/PostDropdown";
import Comments from "./Comments/Comments";
import "./PostDetails.css";

const PostDetails = () => {
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const { user } = useContext(AuthContext);

  //   likeHandler
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const { name, email, image, photo, title, desc, _id } = useLoaderData();
  return (
    <div className="post-container">
      <div className="flex items-center justify-between px-4 pt-3">
        <div className="flex items-center">
          <Link to={"/community/community-profile"}>
            <div className="flex items-center">
              <div
                title="View Profile"
                className="w-8 h-8 rounded-full overflow-hidden cursor-pointer"
              >
                <img
                  referrerPolicy="no-referrer"
                  src={image ? image : canva}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-sm md:text-lg mx-2">
                {name ? name : "Unknown User"}
              </div>
            </div>
          </Link>
          <div className="text-sm md:text-lg mx-2 font-semibold hidden md:block">
            {title}
          </div>
        </div>
        {/* Dropdown */}
        {user?.email === email && (
          <PostDropdown postId={_id} photo={photo} title={title} desc={desc} />
        )}
      </div>
      <div className="px-4 py-2">
        <div className="text-sm md:text-lg font-semibold md:hidden">
          {title}
        </div>
        <p className="text-sm md:text-lg">{desc}</p>
      </div>

      <img className="w-11/12 mx-auto pt-10" src={photo} alt="Posted Image" />
      <div className="flex items-center justify-between pt-3 px-4">
        <div className="flex items-center">
          <BiSolidLike className="text-xs md:text-2xl lg:text-xl text-blue-700 cursor-pointer" />
          <span className="text-xs md:text-base lg:text-sm ms-1 flex items-center gap-2">
            {like ? like : 0} <span>people like it</span>
          </span>
        </div>
      </div>
      <hr className="postHr" />
      <div className="flex items-center justify-between pt-3 px-4">
        <button
          onClick={likeHandler}
          className="flex items-center gap-1 text-sm md:text-lg cursor-pointer"
        >
          {isLiked ? (
            <BiSolidLike className="text-xl text-blue-700 cursor-pointer" />
          ) : (
            <BiLike className="md:text-xl" />
          )}
          <span className="text-sm">Like</span>
        </button>
        <div
          id="comment"
          className="flex items-center gap-1 text-sm md:text-lg cursor-pointer"
        >
          <GoComment className="md:text-xl" />
          <span className="text-sm">Comment</span>
        </div>
      </div>
      <hr className="postHr" />
      {/* comments component */}
      <Comments />
    </div>
  );
};

export default PostDetails;
