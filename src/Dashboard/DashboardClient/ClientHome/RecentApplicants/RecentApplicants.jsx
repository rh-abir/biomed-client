import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import ApplicantsCard from "./ApplicantsCard/ApplicantsCard";

const RecentApplicants = () => {
  const { isLoading, data: applicants = [] } = useQuery({
    queryKey: ["applicants"],
    queryFn: async () => {
      const res = await axios("https://biomed-server.vercel.app/applicants");
      return res.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mt-8 dark:bg-gray-800 dark:text-white bg-white rounded-lg p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-3">Recent Applicants</h3>
      <div className="grid md:grid-cols-2 md:gap-6">
        {applicants
        .sort((a,b)=> a._id > b._id ? 1 : -1)
        .slice(0,6)
        .map((applicant) => (
          <ApplicantsCard key={applicant._id} applicant={applicant} />
        ))}
      </div>
    </div>
  );
};

export default RecentApplicants;
