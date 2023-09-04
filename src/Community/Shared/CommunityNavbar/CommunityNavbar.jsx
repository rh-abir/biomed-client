import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiMessageDetail, BiSearchAlt2 } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import logo from "../../../assets/logo.png";
import "./CommunityNavbar.css";

const CommunityNavbar = () => {
  const { user } = useContext(AuthContext);
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
  return (
    <>
      <nav className="px-2 md:px-0 h-14 w-full bg-white flex items-center justify-evenly sticky top-0 z-50">
        {/* Navbar Left SIde */}
        <div className="topbarLeft">
          {/* Logo section for large devices */}
          <span className="hidden md:block ml-5 cursor-pointer">
            <Link to="/">
              <img className="w-40" src={logo} alt="" />
            </Link>
          </span>
          {/* Profile section for small devices */}
          <div className="flex justify-center items-center">
            <Link to={"/"}>
              <div className="topbarIconItem md:hidden">
                <AiOutlineHome className="text-3xl text-white" />
              </div>
            </Link>
            <Link to={"/community/community-profile"}>
              <div
                title="View Profile"
                className="mx-2 w-9 h-9 rounded-full overflow-hidden cursor-pointer border-[3px] border-black/50 md:hidden"
              >
                <img
                  referrerPolicy="no-referrer"
                  src={updateData?.image ? updateData?.image : user?.photoURL}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
        {/* Navbar Center SIde */}
        <div className="topbarCenter flex justify-center items-center gap-4">
           {/* Text section */}
           <div className="gap-2 text-base">
            <Link to={"/community"}>Homepage</Link>
          </div>
          {/* Icons section */}
          <div className="flex justify-center items-center gap-4">
            <div className="topbarIconItem">
              <BiMessageDetail />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem hidden md:block">
              <MdNotifications />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          {/* Profile section for large devices */}
          {/* <Link to={"/community/community-profile"}>
            <div
              title="View Profile"
              className="hidden md:block w-9 h-9 rounded-full overflow-hidden cursor-pointer border-[3px] border-black/50"
            >
              <img
                referrerPolicy="no-referrer"
                src={updateData?.image ? updateData?.image : user?.photoURL}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </Link> */}
        </div>
        {/* Navbar Right SIde */}
        <div className="topbarRight flex items-center justify-around text-gray-600 mx-4">
        <div className="w-11/12 md:w-full h-8  bg-slate-200 rounded-full flex items-center ">
            <BiSearchAlt2 className="text-2xl mt-1 ml-2" />
            <input
              type="text"
              placeholder="Search"
              className="border-none w-11/12 md:w-full focus:outline-none rounded-full px-1  bg-slate-200"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default CommunityNavbar;
