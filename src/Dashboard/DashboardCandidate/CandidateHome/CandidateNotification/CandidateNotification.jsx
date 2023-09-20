import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { BiBriefcase } from "react-icons/bi";

const CandidateNotification = () => {
  const { isLoading, data: candidateNotifications = [] } = useQuery({
    queryKey: ["candidateNotifications"],
    queryFn: async () => {
      const res = await axios("/candidateNotification/candidateNotification.json");
      return res.data;
    },
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mt-8 dark:bg-gray-800 dark:text-white bg-white rounded-lg p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-3">Notifications</h3>
      <div>
        {candidateNotifications.slice(0, 6).map((notify) => (
          <div key={notify._id} className="flex items-center gap-2">
            <div className="bg-green-100 p-3 rounded-full">
              <BiBriefcase className="text-primary text-lg" />
            </div>
            <p className="py-4">
              <span className="text-blue-700 font-semibold">
                {notify.user}
              </span>{" "}
              applied for a job
              <span className="text-primary font-semibold">
                {" "}
                {notify.position}
              </span>
            </p>
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default CandidateNotification;
