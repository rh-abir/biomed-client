import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiBriefcase, BiSolidMessageDetail } from "react-icons/bi";
import { MdOutlineContentCopy, MdRssFeed } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import "./CommunitySidebar.css";

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
    text: "Tasks",
    link: "/browseTasks/browseTasks-home",
  },
  {
    icon: <MdOutlineContentCopy className="mr-1 text-2xl" />,
    text: "Contents",
    link: "/blogs",
  },
];

const CommunitySidebar = () => {
  const {setCommunitySidebarToggle}=useContext(AuthContext)

  return (
    <div className="rightSidebar">
      <div className="flex justify-start p-4 lg:hidden">
        <button
          className="bg-primary p-2 rounded-full text-white hover:bg-hover mb-3"
          onClick={() => setCommunitySidebarToggle(false)}
        >
          <AiOutlineClose />
        </button>
      </div>
      <div className="px-5 pb-5 lg:p-5">
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
      </div>
    </div>
  );
};

export default CommunitySidebar;
