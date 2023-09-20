import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import LatestSpecificCategory from "./LatestSpecificCategory";
import TrendingSpecificCategory from "./TrendingSpecificCategory";

const SpecificCategorySidebar = () => {
  const { data: tasks = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios("https://biomed-server.vercel.app/trendingtask");
      return res.data;
    },
  });

  const { data: recentTasks = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios("https://biomed-server.vercel.app/recenttask");
      return res.data;
    },
  });
  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold mb-8">Trending Task</h1>
      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <TrendingSpecificCategory key={task._id} task={task} />
        ))}
      </div>
      <h1 className="text-3xl font-bold my-8">Recent Task</h1>
      <div className="flex flex-col gap-3">
        {recentTasks.map((latestData) => (
          <LatestSpecificCategory
            key={latestData._id}
            latestData={latestData}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecificCategorySidebar;
