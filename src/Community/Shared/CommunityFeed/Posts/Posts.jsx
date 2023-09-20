import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { AuthContext } from "../../../../Provider/AuthProvider";
import canvas from "../../../../assets/placeholder.jpg";
import Spinner from "../../Spinner/Spinner";
import PostDropdown from "./PostDropdown/PostDropdown";
import "./Posts.css";

const Posts = () => {
  // const [toggleFavourite, setToggleFavourite] = useState(false);
  const { user, clientRole, getPosts, searchPosts, tab, categories } =
    useContext(AuthContext);

  // Initialize favorites from local storage or an empty array
  const initialFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // State for favorite posts
  const [favorites, setFavorites] = useState(initialFavorites);

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
    return <Spinner />;
  }

  // Function to add a post to favorites
  const addToFavorites = (postId) => {
    const newFavorites = [...favorites, { postId, userEmail: user.email }];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setFavorites(newFavorites);
    console.log(postId);
  };

  // Add favourite posts handler
  const handleAddToFavorites = async (post) => {
    try {
      const postData = {
        post,
        userEmail: user.email,
      };
      const response = await axios.post(
        "https://biomed-server.vercel.app/favouritePosts",
        postData
      );
      if (response.status === 200) {
        addToFavorites(post._id);
        toast.success("Post added to favorites");
      } else {
        toast.error("Failed to add post to favorites");
      }
    } catch (error) {
      console.error("Error adding to favorites:", error);
      toast.error("An error occurred while adding to favorites");
    }
  };

  // Function to remove a post from favorites
  const removeFromFavorites = (postId) => {
    const filteredFavorites = favorites.filter(
      (favorite) => favorite.postId !== postId
    );

    localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
    setFavorites(filteredFavorites);
  };

  // Remove favorited post handler
  const handleRemoveFromFavorites = async (post) => {
    try {
      const response = await axios.delete(
        `https://biomed-server.vercel.app/favouritePosts/${post._id}`
      );
      if (response.status === 200) {
        removeFromFavorites(post._id);
        console.log(post._id);
        toast.success("Removed from favorites");
      } else {
        toast.error("Failed to remove from favorites");
      }
    } catch (error) {
      console.error("Error removing from favorites:", error);
      toast.error("An error occurred while removing from favorites");
    }
  };

  return (
    <div>
      {getPosts.length === 0 &&
      categories.length === 0 &&
      reversedPosts.length === 0 ? (
        <p className="text-center mt-10 lg:mt-20 text-gray-600">
          No posts found!
        </p>
      ) : (
        <>
          {getPosts.length === 0 && searchPosts && (
            <p className="text-center mt-10 lg:mt-20 text-gray-600">
              No post found!
            </p>
          )}
          {categories.length === 0 && tab && (
            <p className="text-center mt-10 lg:mt-20 text-gray-600">
              No post in this category!
            </p>
          )}
          {reversedPosts.length === 0 && !searchPosts && !tab && (
            <p className="text-center mt-10 lg:mt-20 text-gray-600">
              No posts have been made yet!
            </p>
          )}
          {searchPosts
            ? getPosts.map((post) => (
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
                        {/* Add and Remove favourite post */}
                        <button
                          className="text-sm md:text-lg mx-2 font-semibold"
                          onClick={() => {
                            const isFavorite = favorites.some(
                              (favorite) =>
                                favorite.postId === post?._id &&
                                favorite.userEmail === user?.email
                            );

                            if (isFavorite) {
                              handleRemoveFromFavorites(post);
                            } else {
                              handleAddToFavorites(post);
                            }
                          }}
                        >
                          {favorites.some(
                            (favorite) =>
                              favorite.postId === post?._id &&
                              favorite.userEmail === user?.email
                          ) ? (
                            <>
                              <AiFillHeart
                                className="text-2xl cursor-pointer text-red-600"
                                data-tooltip-id="tooltip-2"
                              />
                              <ReactTooltip
                                id="tooltip-2"
                                place="left"
                                content="Remove from your favorites"
                              />
                            </>
                          ) : (
                            <>
                              <AiOutlineHeart
                                className="text-2xl cursor-pointer"
                                data-tooltip-id="tooltip-3"
                              />
                              <ReactTooltip
                                id="tooltip-3"
                                place="left"
                                content="Add to your favorites"
                              />
                            </>
                          )}
                        </button>
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
                              <button className="font-semibold">
                                See more
                              </button>
                            </>
                          ) : (
                            post.desc
                          )}
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              ))
            : tab
            ? categories.map((post) => (
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
                        {/* Add and Remove favourite post */}
                        <button
                          className="text-sm md:text-lg mx-2 font-semibold"
                          onClick={() => {
                            const isFavorite = favorites.some(
                              (favorite) =>
                                favorite.postId === post?._id &&
                                favorite.userEmail === user?.email
                            );

                            if (isFavorite) {
                              handleRemoveFromFavorites(post);
                            } else {
                              handleAddToFavorites(post);
                            }
                          }}
                        >
                          {favorites.some(
                            (favorite) =>
                              favorite.postId === post?._id &&
                              favorite.userEmail === user?.email
                          ) ? (
                            <>
                              <AiFillHeart
                                className="text-2xl cursor-pointer text-red-600"
                                data-tooltip-id="tooltip-2"
                              />
                              <ReactTooltip
                                id="tooltip-2"
                                place="left"
                                content="Remove from your favorites"
                              />
                            </>
                          ) : (
                            <>
                              <AiOutlineHeart
                                className="text-2xl cursor-pointer"
                                data-tooltip-id="tooltip-3"
                              />
                              <ReactTooltip
                                id="tooltip-3"
                                place="left"
                                content="Add to your favorites"
                              />
                            </>
                          )}
                        </button>
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
                              <button className="font-semibold">
                                See more
                              </button>
                            </>
                          ) : (
                            post.desc
                          )}
                        </span>
                      </div>
                    </Link>
                  </div>
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
                        {/* Add and Remove favourite post */}
                        <button
                          className="text-sm md:text-lg mx-2 font-semibold"
                          onClick={() => {
                            const isFavorite = favorites.some(
                              (favorite) =>
                                favorite.postId === post?._id &&
                                favorite.userEmail === user?.email
                            );

                            if (isFavorite) {
                              handleRemoveFromFavorites(post);
                            } else {
                              handleAddToFavorites(post);
                            }
                          }}
                        >
                          {favorites.some(
                            (favorite) =>
                              favorite.postId === post?._id &&
                              favorite.userEmail === user?.email
                          ) ? (
                            <>
                              <AiFillHeart
                                className="text-2xl cursor-pointer text-red-600"
                                data-tooltip-id="tooltip-2"
                              />
                              <ReactTooltip
                                id="tooltip-2"
                                place="left"
                                content="Remove from your favorites"
                              />
                            </>
                          ) : (
                            <>
                              <AiOutlineHeart
                                className="text-2xl cursor-pointer"
                                data-tooltip-id="tooltip-3"
                              />
                              <ReactTooltip
                                id="tooltip-3"
                                place="left"
                                content="Add to your favorites"
                              />
                            </>
                          )}
                        </button>
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
                              <button className="font-semibold">
                                See more
                              </button>
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
        </>
      )}
    </div>
  );
};

export default Posts;
