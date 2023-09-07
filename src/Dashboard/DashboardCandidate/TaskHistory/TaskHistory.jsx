import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";
import useTasktData from "../../../hooks/useEmailgetData";
import SingleTaskHistory from "./SingleTaskHistory";

const TaskHistory = () => {
  const [allApplayJobs] = useTasktData();

  console.log(allApplayJobs);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return (
    <div className="px-10 py-6 bg-gray-100 min-h-screen flex flex-col">
      {/* Title Section */}
      <DashboardTitle
        title={"Complete Tasks"}
        slogan={"Ready to jump back in?"}
      />

      <div className="bg-white shadow-md p-4 md:p-8 mx-2 md:mx-10 rounded-2xl">
        <h2 className="text-lg md:text-xl font-semibold pb-6 md:pb-10">
          This task are completed
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 text-green-400">
              <tr>
                <th className="py-3 md:py-5 text-left text-base md:text-lg px-3 md:ps-5">
                  Task Name
                </th>
                <th className="py-3 md:py-5 text-left text-base md:text-lg">
                  Download Report
                </th>
                <th className="py-3 md:py-5 text-left text-base md:text-lg">
                  Rating
                </th>
                <th className="py-3 md:py-5 text-left text-base md:text-lg">
                  Feedback
                </th>
                <th className="py-3 md:py-5 text-left text-base md:text-lg">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {allApplayJobs
                ?.slice(startIndex, endIndex)
                ?.map((client, index) => (
                  <SingleTaskHistory
                    key={index}
                    client={client}
                  ></SingleTaskHistory>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center mt-7">
        <button
          className={`mr-5 ${currentPage === 1 ? "cursor-not-allowed" : ""}`}
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          disabled={currentPage === 1}
        >
          <FaArrowLeft />
        </button>
        <div className="flex">
          {Array.from({
            length: Math.ceil(allApplayJobs.length / rowsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              className={`mx-3 py-3 px-4 rounded-lg ${
                currentPage === index + 1
                  ? "bg-green-400 text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-green-400 hover:text-white"
              } `}
              onClick={() => setCurrentPage(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className={`ml-2 ${
            endIndex >= allApplayJobs.length ? "cursor-not-allowed" : ""
          }`}
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={endIndex >= allApplayJobs.length}
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="my-10 md:my-20 text-center text-gray-600 text-xs md:text-base">
        © 2023 Biomed LTD. All Rights Reserved.
      </div>
    </div>
  );
};

export default TaskHistory;
