import React from "react";
import { Outlet } from "react-router-dom";
import CommunityNavbar from "../Community/Shared/CommunityNavbar/CommunityNavbar";
import CommunitySidebar from "../Community/Shared/CommunitySidebar/CommunitySidebar";

const Community = () => {
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
      </div>
    </>
  );
};

export default Community;
