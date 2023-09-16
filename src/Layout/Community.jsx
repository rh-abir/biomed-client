import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import CommunityFooter from "../Community/Shared/CommunityFooter/CommunityFooter";
import CommunityNavbar from "../Community/Shared/CommunityNavbar/CommunityNavbar";
import CommunitySidebar from "../Community/Shared/CommunitySidebar/CommunitySidebar";
import { AuthContext } from "../Provider/AuthProvider";

const Community = () => {
  const { communitySidebarToggle } =
    useContext(AuthContext);
    console.log(communitySidebarToggle);
  return (
    <>
      <CommunityNavbar />
      <div className="grid grid-cols-6 bg-gray-200">
        <div className="col-span-6 lg:col-span-4">
          <Outlet />
        </div>
        <div className="col-span-2 hidden lg:block">
          <CommunitySidebar />
        </div>
        {communitySidebarToggle && (
          <div className="lg:hidden fixed -right-5 top-5 w-3/4 md:w-2/5">
            <CommunitySidebar />
          </div>
        )}
      </div>
      <CommunityFooter />
    </>
  );
};

export default Community;
