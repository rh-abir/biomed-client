import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { GrMoreVertical } from "react-icons/gr";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import canvas from "../../../../assets/placeholder.jpg";
import "./Posts.css";

const Posts = () => {
  const { user, clientRole, getPosts, searchPosts } = useContext(AuthContext);
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  console.log("Post component", getPosts);
  //likeHandler

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const { isLoading, data: posts = [] } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axios(`http://localhost:5000/posts`);
      return res.data;
    },
  });

  // To see recent post at the top
  const reversedPosts = [...posts].reverse();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {searchPosts
        ? getPosts.map((post) => (
            <div className="post" key={post?._id}>
              <Link to={`/community/postDetails/${post?._id}`}>
                <div className="postWrapper">
                  <div className="postTop">
                    <div className="postTopLeft">
                      <Link
                        to={
                          clientRole
                            ? "/dashboard/instructor-view"
                            : "/dashboard/my-profile"
                        }
                      >
                        <div className="flex items-center">
                          <div
                            title="View Profile"
                            className="w-8 h-8 rounded-full overflow-hidden cursor-pointer"
                          >
                            <img
                              referrerPolicy="no-referrer"
                              src={post?.image ? post?.image : canvas}
                              alt="Profile"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="text-sm md:text-lg mx-2">
                            {post?.name ? post?.name : "Unknown User"}
                          </div>

                          <div className="text-sm md:text-lg mx-2 font-semibold">
                            {post.title}
                          </div>
                        </div>
                      </Link>
                    </div>
                    {user?.email === post?.email && (
                      <div className="postTopRight">
                        <GrMoreVertical className="text-xl cursor-pointer" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col md:flex-row py-4 px-1 gap-4">
                    <img
                      className="w-full md:w-40 md:h-36 object-cover rounded-md"
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
              </Link>
              <hr className="postHr" />
              <div className="flex items-center justify-between py-3 px-6">
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
                <div>
                  <Link to={`/community/postDetails/${post._id}`}>
                    <div className="flex items-center gap-1 text-sm md:text-lg cursor-pointer">
                      <GoComment className="md:text-xl" />
                      <span className="text-sm">Comment</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))
        : reversedPosts.map((post) => (
            <div className="post" key={post?._id}>
              <Link to={`/community/postDetails/${post?._id}`}>
                <div className="postWrapper">
                  <div className="postTop">
                    <div className="postTopLeft">
                      <Link
                        to={
                          clientRole
                            ? "/dashboard/instructor-view"
                            : "/dashboard/my-profile"
                        }
                      >
                        <div className="flex items-center">
                          <div
                            title="View Profile"
                            className="w-8 h-8 rounded-full overflow-hidden cursor-pointer"
                          >
                            <img
                              referrerPolicy="no-referrer"
                              src={post?.image ? post?.image : canvas}
                              alt="Profile"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="text-sm md:text-lg mx-2">
                            {post?.name ? post?.name : "Unknown User"}
                          </div>

                          <div className="text-sm md:text-lg mx-2 font-semibold">
                            {post.title}
                          </div>
                        </div>
                      </Link>
                    </div>
                    {user?.email === post?.email && (
                      <div className="postTopRight">
                        <GrMoreVertical className="text-xl cursor-pointer" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col md:flex-row py-4 px-1 gap-4">
                    <img
                      className="w-full md:w-40 md:h-36 object-cover rounded-md"
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
              </Link>
              <hr className="postHr" />
              <div className="flex items-center justify-between py-3 px-6">
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
                <div>
                  <Link to={`/community/postDetails/${post._id}`}>
                    <div className="flex items-center gap-1 text-sm md:text-lg cursor-pointer">
                      <GoComment className="md:text-xl" />
                      <span className="text-sm">Comment</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Posts;
