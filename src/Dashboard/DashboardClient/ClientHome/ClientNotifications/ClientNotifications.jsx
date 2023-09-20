import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { BiBriefcase } from "react-icons/bi";

const ClientNotifications = () => {
  const { isLoading, data: notifications = [] } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      const res = await axios("/notificationData/notifications.json");
      return res.data;
    },
  });
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mt-8 dark:bg-gray-800  dark:text-white bg-white rounded-lg p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-3">Notifications</h3>
      <div>
        {notifications.slice(0, 6).map((notification) => (
          <div key={notification._id} className="flex items-center gap-2">
            <div className="bg-green-100 p-3 rounded-full">
              <BiBriefcase className="text-primary text-lg" />
            </div>
            <p className="py-4">
              <span className="text-blue-700 font-semibold">
                {notification.user}
              </span>{" "}
              applied for a job
              <span className="text-primary font-semibold">
                {" "}
                {notification.position}
              </span>
            </p>
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default ClientNotifications;
