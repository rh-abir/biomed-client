import React from "react";
import { Outlet } from "react-router-dom";
import CommunityNavbar from "../Community/Shared/CommunityNavbar/CommunityNavbar";
import CommunityRightSidebar from "../Community/Shared/CommunityRightSidebar/CommunityRightSidebar";


const CommunityProfile = () => {
  return (
    <>
      <CommunityNavbar />
      <div className="grid grid-cols-7">
        <div className="col-span-2">
          <CommunityRightSidebar />
        </div>
        <div className="col-span-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default CommunityProfile;
