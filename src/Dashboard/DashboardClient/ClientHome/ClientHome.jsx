import React from "react";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";
import ClientBox from "./ClientBox/ClientBox";
import ClientNotifications from "./ClientNotifications/ClientNotifications";
import ClientProfileViews from "./ClientProfileViews/ClientProfileViews";
import RecentApplicants from "./RecentApplicants/RecentApplicants";

const ClientHome = () => {
  return (
    <div className="p-6">
      {/* Heading Section */}
      <DashboardTitle title={"Dashboard Home!"} slogan={"Ready to Jump"} />
      {/* Box Section */}
      <ClientBox />

      {/* Chart Section &  Notification Section */}
      <div className="xl:flex items-start gap-4 w-full">
        <ClientProfileViews />
        <ClientNotifications />
      </div>

      {/* Recent Applicants Section */}
      <RecentApplicants />
    </div>
  );
};

export default ClientHome;
