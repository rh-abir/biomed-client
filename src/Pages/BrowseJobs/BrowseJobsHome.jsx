import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import JobCard from "./JobsCard/JobsCard";

const BrowseJobsHome = ({ browseJobsData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  return (
    <div>
      {/* job card */}
      <div className="mb-6">
        <div className="grid md:grid-cols-2 gap-5">
          {browseJobsData
            ?.slice(startIndex, endIndex)
            ?.map((jobsdata) => (
              <JobCard key={jobsdata._id} task={jobsdata} />
            ))}
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
              length: Math.ceil(browseJobsData?.length / rowsPerPage),
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
              endIndex >= browseJobsData?.length ? "cursor-not-allowed" : ""
            }`}
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
            disabled={endIndex >= browseJobsData?.length}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowseJobsHome;
