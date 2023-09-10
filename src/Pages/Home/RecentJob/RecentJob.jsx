import React, { useEffect, useState } from "react";
import Container from "../../../components/Shared/Container/Container";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import SingleRecentJob from "./SingleRecentJob/SingleRecentJob";

const RecentJob = () => {
  const [recentJob, SetRecentJob] = useState([]);
  useEffect(() => {
    fetch("recentJobData/recentJob.json")
      .then((res) => res.json())
      .then((data) => SetRecentJob(data));
  }, []);
  return (
    <div className="mt-20">
      <Container>
        <div>
          <SectionTitle
            heading="Most Recent Job Listing"
            text="“Required Skills” is one of the most-used job description sections."
          ></SectionTitle>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {recentJob.map((job) => (
            <SingleRecentJob key={job.id} job={job}></SingleRecentJob>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default RecentJob;
