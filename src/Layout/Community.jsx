import React from "react";
import { Outlet } from "react-router-dom";
import CommunityLeftSidebar from "../Community/Shared/CommunityLeftSidebar/CommunityLeftSidebar";
import CommunityNavbar from "../Community/Shared/CommunityNavbar/CommunityNavbar";
import CommunityRightSidebar from "../Community/Shared/CommunityRightSidebar/CommunityRightSidebar";

const Community = () => {
  return (
    <>
      <CommunityNavbar />
      <div className="grid grid-cols-9 bg-[#5bbb7b]">
        <div className="col-span-2 hidden lg:block">
          <CommunityLeftSidebar />
        </div>
        <div className="col-span-9 lg:col-span-5">
          <Outlet />
        </div>
        <div className="col-span-2 hidden lg:block">
          <CommunityRightSidebar />
        </div>
      </div>
    </>
  );
};

export default Community;
