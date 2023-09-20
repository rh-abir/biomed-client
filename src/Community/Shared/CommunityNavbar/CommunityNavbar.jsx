import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import logo from "../../../assets/logo.png";
import "./CommunityNavbar.css";

const CommunityNavbar = () => {
  const {
    user,
    adminRole,
    setSearchPosts,
    clientRole,
    setCommunitySidebarToggle,
  } = useContext(AuthContext);

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
        <div className="flex items-center justify-around text-gray-600 ms-4 md:mx-4 gap-1 md:gap-6">
          <div className="w-full h-8 bg-slate-200 rounded-full flex items-center ">
            <BiSearchAlt2 className="text-2xl mt-1 ml-2" />
            <input
              onChange={(e) => setSearchPosts(e.target.value)}
              type="text"
              placeholder="Search"
              className="border-none w-full focus:outline-none rounded-full px-1 bg-slate-200"
            />
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
          {/* Hamburger Menue */}
          <button
            onClick={() => setCommunitySidebarToggle(true)}
            className="topbarIconItem lg:hidden"
          >
            <GiHamburgerMenu className="text-2xl md:text-3xl text-gray-600" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default CommunityNavbar;
