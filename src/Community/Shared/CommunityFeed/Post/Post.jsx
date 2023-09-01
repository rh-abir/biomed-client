import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BiLike, BiSolidLike } from "react-icons/bi";
import {
  BsEmojiDizzyFill,
  BsFillEmojiAngryFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";
import { FcLike } from "react-icons/fc";

import { GoComment } from "react-icons/go";
import { GrMoreVertical } from "react-icons/gr";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import "./Post.css";

const Post = () => {
  const { user } = useContext(AuthContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const [like, setLike] = useState(null);
  const [love, setLove] = useState(null);

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

  const openDropdown = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 2000);
  };

  const toggleDropdown = () => {
    if (isDropdownOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };



  const { isLoading, data: posts = [] } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axios("/postsData/posts.json");
      return res.data;
    },
  });
  console.log(posts);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {posts.map((post) => (
        <div className="post" key={post._id}>
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <Link to={"/community/community-profile"}>
                  <div className="flex items-center">
                    <span
                      title="View Profile"
                      className="md:mx-2 w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden cursor-pointer"
                    >
                      <img
                        referrerPolicy="no-referrer"
                        src={
                          updateData?.image ? updateData?.image : user?.photoURL
                        }
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </span>
                    <span className="text-sm md:text-lg mx-2">
                      {updateData?.name2
                        ? updateData?.name2
                        : user?.displayName}
                    </span>
                  </div>
                </Link>
                <span className="text-xs md:text-sm">{post.date}</span>
              </div>
              <div className="postTopRight">
                <GrMoreVertical className="text-xl cursor-pointer" />
              </div>
            </div>
            <div className="postCenter">
              <span className="postText">{post.desc}</span>
              <img
                className="w-full h-[300px] md:h-[550px] lg:h-[350px] xl:h-[500px] object-cover"
                src={post.photo}
                alt="Post Image"
              />
            </div>
            <div className="flex items-center justify-between mx-2">
              <div className="flex items-center">
                <BiSolidLike className="text-xs md:text-2xl lg:text-xl text-blue-700 cursor-pointer" />
                <FcLike className="text-xs md:text-2xl lg:text-xl cursor-pointer" />
                <span className="text-xs md:text-base lg:text-sm ms-1">
                  {post.like} people like it
                </span>
              </div>
              <div className="text-xs md:text-base lg:text-sm">
                {post.comment} comments
              </div>
            </div>
          </div>
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
              className="absolute md:-mt-10 -mt-6 bg-white border border-teal-100 p-2 rounded-2xl"
            >
              <div className="flex   gap-5">
                <BiSolidLike
                  onClick={() => setLike("Like")}
                  className="text-3xl md:text-4xl text-blue-400  hover:text-blue-700 cursor-pointer"
                />
                <AiFillHeart
                  onClick={() => setLove("Love")}
                  className="text-3xl md:text-4xl text-red-400 hover:text-rose-500"
                />
                <BsFillEmojiAngryFill className="text-3xl text-orange-300 hover:text-orange-600 mt-1 md:text-3xl" />
                <BsEmojiDizzyFill className="text-3xl text-orange-300 hover:text-orange-600 mt-1 " />
                <BsFillEmojiFrownFill className="text-3xl text-orange-300 hover:text-orange-600 mt-1 " />
              </div>
            </div>
          )}
          <hr className="postHr" />
          <div className="flex items-center justify-around">
            <div
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
              className="flex items-center gap-1 text-sm md:text-lg cursor-pointer"
            >
              <BiLike />
              <span>Like</span>
            </div>
            <div className="flex items-center gap-1 text-sm md:text-lg cursor-pointer">
              <GoComment />
              <span>Comment</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
