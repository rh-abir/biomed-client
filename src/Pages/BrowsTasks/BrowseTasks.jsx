import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AuthContext } from "../../Provider/AuthProvider";
import Loader from "../../components/Loader/Loader";
import Container from "../../components/Shared/Container/Container";
import BrowseTasksHome from "./BrowseTasksHome";
import TasksSidebar from "./TasksSidebar/TasksSidebar";

const BrowseTasks = () => {
  const { tasksSidebarToggle: tasksSidebarToggle, setTasksSidebarToggle } =
    useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const [jobsData, setFilterData] = useState();
  const { data: browseJobsData, isLoading } = useQuery({
    queryKey: ["jobs", user?.email],
    queryFn: async () => {
      const res = await axios(`https://biomed-server.vercel.app/jobs`);
      return res.data;
    },
  });
  if (isLoading) {
    return <Loader />;
  }
  const filteredData = (data) => {
    setFilterData(data);
    console.log(data);
  };
  return (
    <div className="pt-20">
      <Container>
        <button
          onClick={() => setTasksSidebarToggle(true)}
          className="text-base dark:bg-slate-700 text-primary hover:text-green-600 flex items-center gap-2 bg-slate-200 hover:bg-slate-300 duration-500 px-6 py-3 rounded-md mt-6 lg:hidden"
        >
          <HiOutlineMenuAlt3 /> Menu
        </button>
        <div className="grid grid-cols-4 lg:grid-cols-10 xl:grid-cols-4 pt-[20px]">
          <aside
            className={`col-span-3 lg:col-span-3 xl:col-span-1 lg:block hidden sticky top-[100px] h-screen mb-[300px] overflow-y-scroll`}
          >
            {browseJobsData && (
              <TasksSidebar
                getData={filteredData}
                browseJobsData={browseJobsData}
              />
            )}
          </aside>
          {tasksSidebarToggle && (
            <aside className="col-span-3 md:col-span-2 lg:hidden fixed top-[60px] min-h-screen mb-[400px] overflow-scroll bg-white">
              {browseJobsData && (
                <TasksSidebar
                  getData={filteredData}
                  browseJobsData={browseJobsData}
                />
              )}
            </aside>
          )}
          <div className="col-span-4 lg:col-span-7 xl:col-span-3">
            {browseJobsData && (
              <BrowseTasksHome browseJobsData={jobsData && jobsData} />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BrowseTasks;
