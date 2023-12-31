import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../../Provider/AuthProvider";
import canva from "../../../../../assets/placeholder.jpg";
import PostDropdown from "../PostDropdown/PostDropdown";
import "./PostDetails.css";

const PostDetails = () => {
  const { user } = useContext(AuthContext);


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
        <div className="text-sm md:text-lg font-semibold md:hidden pb-2">
          {title}
        </div>
        <p className="text-sm md:text-lg xl:text-xl">{desc}</p>
      </div>
      <img className="w-11/12 mx-auto pb-3 md:pb-6 xl:pb-8" src={photo} alt="Posted Image" />
    </div>
  );
};

export default PostDetails;
