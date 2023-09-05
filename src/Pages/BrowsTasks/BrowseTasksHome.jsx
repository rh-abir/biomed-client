// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import clsx from "clsx";
import { useRef, useState } from "react";
import { LoadingPosts } from "../../LoadingPost";
import useLazyLoad from "../../hook/useLazyLoad";
import TaskCard from "./TaskCard/TaskCard";

const NUM_PER_PAGE = 2;

const BrowseTasksHome = ({ browseJobsData }) => {
  const triggerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const onGrabData = (currentPage) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const startIndex = (currentPage - 1) * NUM_PER_PAGE;
        const endIndex = startIndex + NUM_PER_PAGE;
        const data = browseJobsData.slice(startIndex, endIndex);

        if (data.length === 0) {
          setLoading(false);
          resolve([]);
        } else {
          resolve(data);
        }
      }, 1000);
    });
  };

  const { data } = useLazyLoad({ triggerRef, onGrabData });
  return (
    <>
      {/* job card */}
      <div className="grid md:grid-cols-2 gap-5 mb-6">
        {data.map((jobsdata) => (
          <TaskCard key={jobsdata._id} task={jobsdata} />
        ))}
      </div>
      {/* Lazyloading Container */}
      <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
        <LoadingPosts loading={loading} />
      </div>
    </>
  );
};

export default BrowseTasksHome;
