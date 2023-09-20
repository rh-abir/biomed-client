import React from "react";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";
import InstructorForm from "./InstructorForm/InstructorForm";

const InstructorProfile = () => {
  return (
    <div className="min-h-screen p-6">
      <DashboardTitle
        title={"Company Profile!"}
        slogan={"Ready to jump back in?"}
      />
      <div className="dark:bg-slate-700 bg-white min-h-screen">
        <div className="p-10">
          <InstructorForm />
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
