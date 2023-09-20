import React from "react";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";
import AdminApplications from "./AdminApplication/AdminApplications";
import AdminBox from "./AdminBox/AdminBox";
import AdminNotifications from "./AdminNotifications/AdminNotifications";
import AdminProfileViews from "./AdminProfileViews/AdminProfileViews";

const AdminHome = () => {
  return (
    <div className="p-6">
      {/* Heading Section */}
      <DashboardTitle title={"Dashboard Home!"} slogan={"Ready to Jump"} />
      {/* Box Section */}
      <AdminBox />

      {/* Chart Section &  Notification Section */}
      <div className="xl:flex items-start gap-4 w-full">
        <AdminProfileViews />
        <AdminNotifications />
      </div>

      {/* Recent Applicants Section */}
      <AdminApplications />
    </div>
  );
};

export default AdminHome;
