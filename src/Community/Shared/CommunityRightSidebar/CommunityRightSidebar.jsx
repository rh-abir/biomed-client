import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiBriefcase, BiSolidMessageDetail } from "react-icons/bi";
import { MdRssFeed } from "react-icons/md";
import { Link } from "react-router-dom";
import "./CommunityRightSidebar.css";

// Sidebar Items Data
const sidebarItems = [
  {
    icon: <MdRssFeed className="mr-1 text-2xl" />,
    text: "Feed",
    link: "/community",
  },
  {
    icon: <BiSolidMessageDetail className="mr-1 text-2xl" />,
    text: "Chats",
    link: "/",
  },
  {
    icon: <BiBriefcase className="mr-1 text-2xl" />,
    text: "Jobs",
    link: "/browseJobs/browseJobs-home",
  },
  {
    icon: <AiOutlineQuestionCircle className="mr-1 text-2xl" />,
    text: "Questions",
    link: "/",
  },
];

const CommunityRightSidebar = () => {
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axios("https://biomed-server.vercel.app/allusers");
      return res.data;
    },
  });

  return (
    <div className="leftSidebar">
      <div className="sidebarWrapper">
        {/* Sidebar Category */}
        <h3 className="mb-4 text-lg font-semibold">Category</h3>
        <div className="sidebarList">
          {sidebarItems.map((item, index) => (
            <Link key={index} to={item.link}>
              <li className="sidebarListItem">
                {item.icon}
                <span>{item.text}</span>
              </li>
            </Link>
          ))}
        </div>
        <hr className="sidebarHr" />
        {/* Sidebar Friends */}
         <h3 className="mb-4 text-lg font-semibold">Friends</h3>
        <ul className="space-y-4">
          {allUsers?.map((user) => (
            <li key={user._id} className="flex items-center cursor-pointer">
              <img src={user.image} alt="" className="sidebarFriendImg" />
              <span className="text-lg">{user.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommunityRightSidebar;
