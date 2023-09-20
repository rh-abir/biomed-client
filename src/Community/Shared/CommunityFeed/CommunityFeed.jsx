import React from "react";
import "./CommunityFeed.css";
import Posts from "./Posts/Posts";
import SharePostForm from "./SharePostForm/SharePostForm";

const CommunityFeed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper bg-gray-200">
        <SharePostForm />
        <Posts />
      </div>
    </div>
  );
};

export default CommunityFeed;
