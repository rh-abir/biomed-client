import React, { useEffect, useState } from "react";
import Container from "../../../components/Shared/Container/Container";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import TrendingSlide from "../TrendingTasks/TrendingSlide/TrendingSlide";

const RecentJob = () => {
  const [recentJob, SetRecentJob] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/recenttask`)
      .then((res) => res.json())
      .then((data) => SetRecentJob(data));
  }, []);
  return (
    <div className="mt-20">
      <Container>
        <div>
          <SectionTitle
            heading="Recent Tasks Listing"
            text="“Required Skills” is one of the most-used job description sections."
          ></SectionTitle>
        </div>
        <div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {recentJob.map((task) => (
            <TrendingSlide key={task?._id} task={task} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default RecentJob;
