import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";
import CandidateBox from "./CandidateBox/CandidateBox";
import CandidateNotification from "./CandidateNotification/CandidateNotification";
import CandidateProfileViews from "./CandidateProfileViews/CandidateProfileViews";
import RecentAppliedJobs from "./RecentAppliedJobs/RecentAppliedJobs";

const CandidateHome = () => {
  const { user } = useContext(AuthContext);
  const { data: myProfileData = [] } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await axios(`https://biomed-server.vercel.app/users/${user?.email}`);
      return res.data;
    },
  });
  const { updateData } = myProfileData;
  return (
    <div className="p-6">
      {/* Title Section */}
      <DashboardTitle title={`Howdy, ${updateData?.name2 || user?.displayName}!`} slogan={"Welcome"}  />
      {/* Box Section */}
      <CandidateBox/>

      {/* Chart Section &  Notification Section */}
      <div className="xl:flex items-start gap-4 w-full">
        <CandidateProfileViews/>
        <CandidateNotification/>
      </div>

      {/* Recent Applicants Section */}
      <RecentAppliedJobs />
    </div>
  );
};

export default CandidateHome;
