import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiArrowLeft } from "react-icons/fi";
import { MdSend } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import logo from "../../../assets/logo.png";
import "./CommunityNavbar.css";

const CommunityNavbar = () => {
  const [searchText, setSerchText] = useState("");
  const { user, adminRole, setSearchPosts,clientRole } = useContext(AuthContext);

  // Define a function to determine which icon to display based on the route
  const location = useLocation();
  const getIcon = () => {
    if (location.pathname === "/community") {
      return (
        <Link to="/" title="Back to Home" className="topbarIconItem md:hidden">
          <AiOutlineHome className="text-3xl text-gray-600" />
        </Link>
      );
    } else if (location.pathname === "/community/community-profile") {
      return (
        <Link
          to="/community"
          title="Back to Community"
          className="topbarIconItem md:hidden"
        >
          <FiArrowLeft className="text-3xl text-gray-600" />
        </Link>
      );
    }
    return null;
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


  // Search handler
  const handleSearch = () => {
    setSearchPosts(searchText)
  }


  return (
    <>
      <nav className="px-2 md:px-0 h-14 w-full bg-white flex items-center justify-between sticky top-0 z-50">
        {/* Navbar Left SIde */}
        <div>
          {/* Logo section for large devices */}
          <span
            title="Biomed Home"
            className="hidden md:block ml-5 cursor-pointer"
          >
            <Link to="/">
              <img className="w-40" src={logo} alt="logo for community forum" />
            </Link>
          </span>
          {/* Profile section for small devices */}
          <div className="flex justify-center items-center">
            <Link to={"/community"}>
              <div title="Back to Home" className="topbarIconItem md:hidden">
                {getIcon()} {/* Render the dynamic icon */}
              </div>
            </Link>
            <Link
              to={
                adminRole
                  ? "/dashboard/admin-profile"
                  : clientRole
                  ? "/dashboard/instructor-view"
                  : "/dashboard/my-profile"
              }
            >
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
        {/* Navbar Right SIde */}
        <div className="flex items-center justify-around text-gray-600 ms-4 md:mx-4 gap-6">
          <div className="w-full h-8 bg-slate-200 rounded-full flex items-center ">
            <BiSearchAlt2 className="text-2xl mt-1 ml-2" />
            <input
              onChange={(e) => setSerchText(e.target.value)}
              type="text"
              placeholder="Search"
              className="border-none w-full focus:outline-none rounded-full px-1  bg-slate-200"
            />
            <button onClick={handleSearch}>
              <MdSend className="text-xl me-2" />
            </button>
          </div>
          {/* Profile section for large devices */}
          <Link
            to={
              adminRole
                ? "/dashboard/admin-profile"
                : clientRole
                ? "/dashboard/instructor-view"
                : "/dashboard/my-profile"
            }
          >
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
          </Link>
        </div>
      </nav>
    </>
  );
};

export default CommunityNavbar;
