import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import ProfileDropdown from "../../../components/ProfileDropdown/ProfileDropdown";


const Navbar = () => {
  // const [getApplayMessage, refetch] = useMessageData();

  // console.log(getApplayMessage);

  return (
    <nav className="lg:px-20 px-6 py-5 flex items-center justify-between  dark:bg-gray-800 dark:text-white shadow-md fixed w-full z-10 bg-white ">
      <Link to={"/"} className="flex items-center gap-10">
        <img src={logo} alt="" />
      </Link>
      <div className="flex items-center gap-10">
        <Link to="/nofication/message">
          <div className="relative">
            <IoMdNotificationsOutline className="text-2xl font-bold" />
            <span className="absolute bottom-3 -right-2 text-gray-100 z-10 bg-[#4bd674] p-1 w-5 h-5 rounded-full flex items-center justify-center">
              0 {/* {getApplayMessage ? 1 : 0} */}
            </span>
          </div>
        </Link>

        <ProfileDropdown />
      </div>
    </nav>
  );
};

export default Navbar;
