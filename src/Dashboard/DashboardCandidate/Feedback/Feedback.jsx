import React from "react";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";

const Feedback = () => {
  return (
    <div className="px-10 py-6 bg-gray-100 min-h-screen ">
      {/* Title Section */}
      <DashboardTitle
        title={"Give Feedback!"}
        slogan={"Ready to jump back in?"}
      />
    </div>
  );
};

export default Feedback;
