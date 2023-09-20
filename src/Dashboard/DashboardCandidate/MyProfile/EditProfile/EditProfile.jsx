import React from "react";
import DashboardTitle from "../../../../components/DashboardTitle/DashboardTitle";
import EditForm from "../EditForm/EditForm";

const EditProfile = () => {
  return (
    <div className="p-6  dark:bg-gray-800 dark:text-white">
      {/* Title Section */}
      <DashboardTitle title={"My Profile!"} slogan={"Ready to jump?"} />
      <EditForm />
    </div>
  );
};

export default EditProfile;
