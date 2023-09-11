import React from "react";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";

const AddTeamMember = () => {
  return (
    <div className="px-10 py-6 bg-gray-100 min-h-screen">
      {/* Title Section */}
      <DashboardTitle title={"Add a Team Member"} slogan={"Ready to Increase your team?"} />
    </div>
  );
};

export default AddTeamMember;
