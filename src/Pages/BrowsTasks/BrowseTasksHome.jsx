import React, { useState } from "react";
import TaskCard from "./TaskCard/TaskCard";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const BrowseTasksHome = ({ browseJobsData }) => {
  const cardsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = browseJobsData?.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(browseJobsData?.length / cardsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      {/* Task cards */}
      <div className="grid md:grid-cols-2 gap-5 mb-6">
        {currentCards?.map((jobsdata) => (
          <TaskCard key={jobsdata._id} task={jobsdata} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-4 my-5">
        <button className="text-xl font-bold"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <AiOutlineDoubleLeft />
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={currentPage === i + 1 ? "font-bold py-2 px-4 bg-primary rounded-full text-xl" : "font-bold text-xl"}
          >
            {i + 1}
          </button>
        ))}
        <button className="text-xl font-bold"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <AiOutlineDoubleRight />
        </button>
      </div>
    </>
  );
};

export default BrowseTasksHome;
