import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpecificCategoryDetails from "./SpecificCategoryDetails";
import Container from "../../components/Shared/Container/Container";
import SectionTitle from "../../components/Shared/SectionTitle/SectionTitle";
import TrendingSpecificCategory from "./TrendingSpecificCategory";
import LatestSpecificCategory from "./LatestSpecificCategory";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const SpecificCategory = () => {
  const { title } = useParams();

  const [specificCategoryData, setSpecificCategoryData] = useState([]);

  const [latestTaskData, setLatestTaskData] = useState([]);

  useEffect(() => {
    fetch(`https://biomed-server.vercel.app/categoryjobs/?industry=${title}`)
      .then((res) => res.json())
      .then((data) => setSpecificCategoryData(data));
  }, [title]);

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
    <div className="pt-32">
      <Container>
        <SectionTitle
          heading="Explore Task Categories"
          text="Discover a World of Opportunities"
        ></SectionTitle>
        <div className="grid md:grid-cols-6 gap-10">
          <div className="grid md:grid-cols-2 gap-5 mb-6 md:col-span-4">
            {specificCategoryData?.map((singleData) => (
              <SpecificCategoryDetails
                key={singleData._id}
                singleData={singleData}
              />
            ))}
          </div>
          <div className="md:col-span-2">
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
        </div>
      </Container>
    </div>
  );
};

export default SpecificCategory;
