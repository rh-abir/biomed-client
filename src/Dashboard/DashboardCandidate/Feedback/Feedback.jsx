import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";
import FeedbackForm from "./FeedbackForm/FeedbackForm";

const Feedback = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className="px-4 md:px-10 py-2 md:py-6 bg-gray-100 min-h-screen dark:bg-gray-700 dark:text-white">
      {/* Title Section */}
      <DashboardTitle
        title={`Hey, ${user?.displayName}`}
        slogan={"Please Share Your Feedback!"}
      />
      <FeedbackForm />
    </div>
  );
};

export default Feedback;
