import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../../Provider/AuthProvider";
import "./PostDetails.css";

const PostDetails = () => {
  const { user } = useContext(AuthContext);
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  //   likeHandler

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const { data: myProfileData = [] } = useQuery({
    queryKey: ["profile", user?.email],
    queryFn: async () => {
      const res = await axios(
        `https://biomed-server.vercel.app/users/${user?.email}`
      );
      return res.data;
    },
  });

  const { updateData } = myProfileData;

  const { photo, title, desc } = useLoaderData();
  return (
    <div className="post-container">
      <Link to={"/community/community-profile"}>
        <div className="flex items-center p-4">
          <div
            title="View Profile"
            className="w-8 h-8 rounded-full overflow-hidden cursor-pointer"
          >
            <img
              referrerPolicy="no-referrer"
              src={updateData?.image ? updateData?.image : user?.photoURL}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-sm md:text-lg mx-2">
            {updateData?.name2 ? updateData?.name2 : user?.displayName}
          </div>

          <div className="text-sm md:text-lg mx-2 font-semibold">{title}</div>
        </div>
        <p className="p-4">{desc}</p>
      </Link>
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
        <div className="flex items-center gap-2 md:gap-4">
          <Link id="comment">
            <div className="flex items-center gap-1 text-sm md:text-lg cursor-pointer">
              <GoComment className="md:text-xl" />
              <span className="text-sm">Comment</span>
            </div>
          </Link>
        </div>
      </div>
      <hr className="postHr" />
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
  );
};

export default PostDetails;
