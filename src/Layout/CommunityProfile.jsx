import React from "react";
import { Outlet } from "react-router-dom";
import CommunityNavbar from "../Community/Shared/CommunityNavbar/CommunityNavbar";
import CommunitySidebar from "../Community/Shared/CommunitySidebar/CommunitySidebar";


const CommunityProfile = () => {
  return (
    <>
      <CommunityNavbar />
      <div className="grid grid-cols-6 bg-gray-200">
        <div className="col-span-2 hidden lg:block">
          <CommunitySidebar />
        </div>
        <div className="col-span-6 lg:col-span-4 bg-gray-200">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default CommunityProfile;
