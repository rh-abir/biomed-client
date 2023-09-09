import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { GrMoreVertical } from "react-icons/gr";
import { PiShareFatLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import "./Posts.css";

const Posts = () => {
  const { user } = useContext(AuthContext);
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  //likeHandler

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

  const { isLoading, data: posts = [] } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axios("http://localhost:5000/posts");
      return res.data;
    },
  });

  // To see recent post at the top
  const reversedPosts = [...posts].reverse();

  console.log(posts);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {reversedPosts.map((post) => (
        <div className="post" key={post._id}>
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <Link to={"/community/community-profile"}>
                  <div className="flex items-center">
                    <div
                      title="View Profile"
                      className="w-8 h-8 rounded-full overflow-hidden cursor-pointer"
                    >
                      <img
                        referrerPolicy="no-referrer"
                        src={
                          updateData?.image ? updateData?.image : user?.photoURL
                        }
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-sm md:text-lg mx-2">
                      {updateData?.name2
                        ? updateData?.name2
                        : user?.displayName}
                    </div>

                    <div className="text-sm md:text-lg mx-2 font-semibold">
                      {post.title}
                    </div>
                  </div>
                </Link>
              </div>
              <div className="postTopRight">
                <GrMoreVertical className="text-xl cursor-pointer" />
              </div>
            </div>
            <div className="flex py-4 px-1 gap-4">
              <img
                className="w-40 h-36 object-cover rounded-md"
                src={post.photo ? post.photo : "No image found"}
                alt="Post Image"
              />
              <span className="postText">
                {post.desc && post.desc.length > 50 ? (
                  <>
                    {post.desc.slice(0, 500)}...
                    <button className="font-semibold">See more</button>
                  </>
                ) : (
                  post.desc
                )}
              </span>
            </div>
            <div className="flex items-center justify-between mx-1">
              <div className="flex items-center">
                <BiSolidLike className="text-xs md:text-2xl lg:text-xl text-blue-700 cursor-pointer" />
                <span className="text-xs md:text-base lg:text-sm ms-1 flex items-center gap-2">
                  {like ? like : 0} <span>people like it</span>
                </span>
              </div>
            </div>
          </div>
          <hr className="postHr" />
          <div className="flex items-center justify-between py-3 px-4">
            {/* <button
              onClick={likeHandler}
              className="flex items-center gap-1 text-sm md:text-lg cursor-pointer"
            >
              <BiLike className="md:text-xl" />
              <span className="text-sm">Like</span>
            </button> */}

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
              <div className="flex items-center gap-1 text-sm md:text-lg cursor-pointer">
                <GoComment className="md:text-xl" />
                <span className="text-sm">Comment</span>
              </div>
              <div className="flex items-center gap-1 text-sm md:text-lg cursor-pointer">
                <PiShareFatLight className="md:text-xl" />
                <span className="text-sm">Share</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
