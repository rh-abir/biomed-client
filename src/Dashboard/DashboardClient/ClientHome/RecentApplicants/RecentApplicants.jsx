import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import ApplicantsCard from "./ApplicantsCard/ApplicantsCard";
import { AuthContext } from "../../../../Provider/AuthProvider";

const RecentApplicants = () => {
  const { user } = useContext(AuthContext);
  const { data: recentApplication = [], isLoading } = useQuery({
    queryKey: ["recentApplication"],
    queryFn: async () => {
      const res = await axios(
        `${import.meta.env.VITE_BASE_URL}/recentApplications/${user.email}`
      );
      return res.data;
    },
  });

  console.log(recentApplication);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mt-8 dark:bg-gray-800 dark:text-white bg-white rounded-lg p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-3">Recent Applicants</h3>
      <div className="grid md:grid-cols-2 md:gap-6">
        {recentApplication.map((applicant) => (
          <ApplicantsCard key={applicant._id} applicant={applicant} />
        ))}
      </div>
    </div>
  );
};

export default RecentApplicants;
