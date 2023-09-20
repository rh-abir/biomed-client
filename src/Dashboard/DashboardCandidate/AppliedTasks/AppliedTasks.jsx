import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBriefcase,
  FaEye,
  FaMapMarkerAlt,
  FaRegTrashAlt,
} from "react-icons/fa";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const AppliedTasks = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const { data: appliedTasks = [] } = useQuery({
    queryKey: ["appliedTasks"],
    queryFn: async () => {
      const res = await axios(
        `https://biomed-server.vercel.app/applidejobs/${user?.email}`
      );
      return res.data;
    },
  });


  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return (
    <div className="px-10 py-6 bg-gray-100 min-h-screen flex flex-col">
      {/* Title Section */}
      <DashboardTitle
        title={"Applied Tasks!"}
        slogan={"Ready to jump back in?"}
      />

      <div className="bg-white shadow-md p-4 md:p-8 mx-2 md:mx-10 rounded-2xl">
        <h2 className="text-lg md:text-xl font-semibold pb-6 md:pb-10">
          My Applied Tasks
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 text-green-400">
              <tr>
                <th>
                  Company Image
                </th>
                <th className="py-3 md:py-5 text-left text-base md:text-lg px-3 md:ps-5">
                  Company Name
                </th>
                <th className="py-3 md:py-5 text-left text-base md:text-lg px-3 md:ps-5">
                  Task title
                </th>
                <th className="py-3 md:py-5 text-left text-base md:text-lg">
                  Date applied
                </th>
                <th className="py-3 md:py-5 text-left text-base md:text-lg">
                  Status
                </th>
                <th className="py-3 md:py-5 text-left text-base md:text-lg">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {appliedTasks?.slice(startIndex, endIndex)?.map((singleTask) => (
                <tr key={singleTask._id}>
                  <td className="py-2 md:py-4">
                    <div className="flex items-center">
                      <img
                        src={singleTask.image}
                        alt="Job"
                        className="w-12  h-12 md:w-14 md:h-14 rounded-xl mr-3 md:mr-4"
                      />
                    </div>
                  </td>
                  <td className="py-2 md:py-4">
                    <div className="flex ps-9  items-center">
                      <div>
                        <p className="font-semibold text-base md:text-lg">
                          {singleTask.appliedjobdata.name}
                        </p>
                        <div className="flex mt-1 text-gray-600 text-xs md:text-base">
                          <FaBriefcase className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                          <p>{singleTask.heading}</p>
                          <FaMapMarkerAlt className="w-3 h-3 md:w-4 md:h-4 mx-1 md:mx-2" />
                          <p>{singleTask.address}</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 md:py-4">{singleTask.date}</td>
                  <td className="py-2 md:py-4">{singleTask.status}</td>
                  <td className="py-2 md:py-4">
                    <div className="flex space-x-1 md:space-x-2">
                      <span className="bg-gray-100 p-1 md:p-2 rounded-lg">
                        <FaEye className="w-3 h-3 md:w-4 md:h-4" />
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className=" p-1 md:p-2 rounded-lg">
                      <FaRegTrashAlt className="w-3 h-3 md:w-4 md:h-4" />
                    </span>
                  </td>
                </tr>
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
            length: Math.ceil(appliedTasks.length / rowsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              className={`mx-3 py-3 px-4 rounded-lg ${currentPage === index + 1
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
          className={`ml-2 ${endIndex >= appliedTasks.length ? "cursor-not-allowed" : ""
            }`}
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={endIndex >= appliedTasks.length}
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="my-10 md:my-20 text-center text-gray-600 text-xs md:text-base">
        © 2023 Biomed. All Rights Reserved.
      </div>
    </div>
  );
};

export default AppliedTasks;
