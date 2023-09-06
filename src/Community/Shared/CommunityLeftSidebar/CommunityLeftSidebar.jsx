import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import "./CommunityLeftSidebar.css";

const CommunityLeftSidebar = () => {
    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ["allUsers"],
        queryFn: async () => {
          const res = await axios("https://biomed-server.vercel.app/allusers");
          return res.data;
        },
      });
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {/* Birthday and Ad Section */}
        <div className="birthdayContainer">
          <img
            src="https://i.ibb.co/jZMH9zG/gift.png"
            alt="Birthday Image"
            className="birthdayImg"
          />
          <span className="birthdayText">
            <b>Rakib Hasan</b> and <b>2 other friends</b> have birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="https://i.ibb.co/gWvL61x/ad.png" alt="" />
        {/* Online Friends Section */}
        <h3 className="mb-4 text-lg font-semibold">Online Friends</h3>
        <ul className="rightbarFriendList">
            {allUsers?.map((user) => (<li  key={user._id} className="flex items-center mb-4 cursor-pointer">
                <div  className="rightbarProfileImgContainer">
                <img src={user.image} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
                </div>
                <span className="text-lg">{user.name}</span>
            </li> ))}
        </ul>
      </div>
    </div>
  );
};

export default CommunityLeftSidebar;
