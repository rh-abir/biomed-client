import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiFillEdit, AiFillHome, AiOutlineHome, AiOutlineLogout } from "react-icons/ai";

const ProfileDropdown = () => {
  const {
    user,
    logoutUser,
    clientRole,
    setClientRole,
    adminRole,
    moderatorRole,
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

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const openDropdown = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const toggleDropdown = () => {
    if (isDropdownOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  const logoutHandler = () => {
    logoutUser().then(() => {
      setClientRole(null);
      navigate("/");
    });
  };

  return (
    <div className=" relative inline-block">
      <div
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
        className="flex items-center border py-0 px-2 rounded-2xl gap-1 cursor-pointer hover:border-primary transition duration-100"
      >
        <FaAlignJustify className="text-xl" />
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            referrerPolicy="no-referrer"
            src={updateData?.image || user?.photoURL}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
          className="absolute top-full right-0 mt-2 dark:bg-gray-800 bg-white border border-gray-300 shadow-md rounded-md"
        >
          <ul className="flex flex-col">
            <Link
              to={
                clientRole
                  ? "/dashboard/company-profile"
                  : "/dashboard/editProfile"
              }
              className="px-10 py-2 w-full dark:hover:bg-slate-600 hover:bg-gray-100 cursor-pointer flex items-center gap-2" 
            >
              <AiFillEdit />
              Edit Profile
            </Link>

            <Link
              to={
                adminRole
                  ? "/dashboard/client-home"
                  : moderatorRole
                  ? "/dashboard/client-home"
                  : clientRole
                  ? "/dashboard/client-home"
                  : "/dashboard/candidate-home"
              }
            >
              <li className="px-10 py-2 w-full dark:hover:bg-slate-600 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                <AiOutlineHome /> Dashboard
              </li>
            </Link>
            <li
              onClick={logoutHandler}
              className="px-10 py-2 w-full mt-auto  dark:hover:bg-red-500 hover:bg-gray-100  cursor-pointer flex items-center gap-2"
            >
              <AiOutlineLogout />
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
