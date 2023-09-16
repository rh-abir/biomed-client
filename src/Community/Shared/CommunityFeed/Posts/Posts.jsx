import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { AuthContext } from "../../../../Provider/AuthProvider";
import canvas from "../../../../assets/placeholder.jpg";
import PostDropdown from "./PostDropdown/PostDropdown";
import "./Posts.css";

const Posts = () => {
  const { user, clientRole, getPosts, searchPosts } = useContext(AuthContext);
  console.log("Post component", getPosts);
  // const { photo, title, desc, _id } = useLoaderData();

  const { isLoading, data: posts = [] } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axios("https://biomed-server.vercel.app/posts");
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
                    <div className="flex items-center justify-center">
                      {user?.email === post?.email && (
                        <>
                          <div
                            className="postTopRight"
                            data-tooltip-id="tooltip-1"
                          >
                            <PostDropdown
                              postId={post?._id}
                              photo={post?.photo}
                              title={post?.title}
                              desc={post?.desc}
                            />
                          </div>
                          <ReactTooltip
                            id="tooltip-1"
                            place="left"
                            content="View Details"
                          />
                        </>
                      )}

                      <div
                        className="text-sm md:text-lg mx-2 font-semibold"
                        data-tooltip-id="tooltip-2"
                      >
                        <AiOutlineHeart className="text-2xl cursor-pointer" />
                      </div>
                      <ReactTooltip
                        id="tooltip-2"
                        place="left"
                        content="Add to your favourite"
                      />
                    </div>
                  </div>
                  <Link to={`/community/postDetails/${post?._id}`}>
                    <div className="md:grid grid-cols-5 py-4 px-1 gap-4">
                      <img
                        className="w-full rounded-md col-span-2 h-60 object-cover"
                        src={post.photo ? post.photo : "No image found"}
                        alt="Post Image"
                      />
                      <span className="postText col-span-3">
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
                  </Link>
                </div>
              </Link>
            </div>
          ))
        : reversedPosts.map((post) => (
            <div className="post" key={post?._id}>
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

                        <div className="text-sm md:text-lg mx-2 font-semibold hidden md:block">
                          {post.title}
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="flex items-center justify-center">
                    {user?.email === post?.email && (
                      <>
                        <div
                          className="postTopRight"
                          data-tooltip-id="tooltip-1"
                        >
                          <PostDropdown
                            postId={post?._id}
                            photo={post?.photo}
                            title={post?.title}
                            desc={post?.desc}
                          />
                        </div>
                        <ReactTooltip
                          id="tooltip-1"
                          place="left"
                          content="View Details"
                        />
                      </>
                    )}
                    <div
                      className="text-sm md:text-lg mx-2 font-semibold"
                      data-tooltip-id="tooltip-2"
                    >
                      <AiOutlineHeart className="text-2xl cursor-pointer" />
                    </div>
                    <ReactTooltip
                      id="tooltip-2"
                      place="left"
                      content="Add to your favourite"
                    />
                  </div>
                </div>
                {/* title for mobile device */}
                <div className="text-sm md:text-lg mx-2 font-semibold md:hidden">
                  {post.title}
                </div>
                <Link to={`/community/postDetails/${post?._id}`}>
                  <div className="md:grid grid-cols-5 py-4 px-1 gap-4">
                    <img
                      className="w-full rounded-md col-span-2 h-52 lg:h-52 object-cover mb-2 md:mb-0"
                      src={post.photo ? post.photo : "No image found"}
                      alt="Post Image"
                    />
                    <span className="col-span-3 text-sm md:text-base xl:text-lg">
                      {post.desc && post.desc.length > 50 ? (
                        <>
                          {post.desc.slice(0, 450)}...
                          <button className="font-semibold">See more</button>
                        </>
                      ) : (
                        post.desc
                      )}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Posts;
