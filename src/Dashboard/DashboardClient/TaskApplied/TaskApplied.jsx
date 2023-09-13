import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";
import { Link, useParams } from "react-router-dom";
import placeholder from "../../../assets/placeholder.jpg";
import EvaluateModal from "../../../components/Modal/EvaluateModal/EvaluateModal";
import ProfileModal from "../../../components/Modal/ProfileModal/ProfileModal";

const TaskApplied = () => {
  const { id } = useParams();
  const { data: applicants = [] } = useQuery({
    queryKey: ["taskApplied"],
    queryFn: async () => {
      const res = await axios(
        `https://biomed-server.vercel.app/applyTaskInstructor/${id}`
      );
      return res.data;
    },
  });

  console.log(applicants);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // const showInfoCompany = {
  //   _id,
  //   title,
  //   deadline,
  // };

  const [isOpenEvaluate, setIsOpenEvaluate] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [applicantInfo, setApplicantInfo] = useState(null);
  const [userEmail, setUserEmail] = useState("");

  const closeEvaluateModal = () => {
    setIsOpenEvaluate(false);
  };

  const closeProfileModal = () => {
    setIsOpenProfile(false);
  };

  return (
    <>
      <div className="px-10 py-6 bg-gray-100 min-h-screen flex flex-col">
        {/* Title Section */}
        <DashboardTitle
          title={"All Applicants"}
          slogan={"Ready to jump back in?"}
        />

        <div className="bg-white shadow-md p-4 md:p-8 mx-2 md:mx-10 rounded-2xl">
          <h2 className="text-lg md:text-xl font-semibold pb-6 md:pb-10">
            All Applicants
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 text-green-400">
                <tr>
                  <th className="py-3 md:py-5 text-left text-base md:text-lg px-3 md:ps-5">
                    Applicants Name
                  </th>
                  <th className="py-3 md:py-5 text-left text-base md:text-lg">
                    Applicants Date
                  </th>
                  <th className="py-3 md:py-5 text-left text-base md:text-lg">
                    Status
                  </th>
                  <th className="py-3 md:py-5 text-left text-base md:text-lg">
                    Evaluate task
                  </th>
                  <th className="py-3 md:py-5 text-left text-base md:text-lg">
                    View Profile
                  </th>
                  <th className="py-3 md:py-5 text-left text-base md:text-lg">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {applicants?.slice(startIndex, endIndex)?.map((applicant) => (
                  <tr key={applicant._id}>
                    <td className="py-2 md:py-4">
                      <div className="flex items-center">
                        <img
                          src={
                            applicant?.appliedjobdata.image
                              ? applicant?.appliedjobdata.image
                              : placeholder
                          }
                          alt="Job"
                          className="w-12 h-12 md:w-14 md:h-14 rounded-xl mr-3 md:mr-4"
                        />
                        <div>
                          <p className="font-semibold text-base md:text-lg">
                            {applicant?.appliedjobdata.name
                              ? applicant?.appliedjobdata.name
                              : "Name not found"}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 md:py-4">
                      {applicant?.appliedjobdata.deadline}
                    </td>
                    <td className="py-2 md:py-4">Active</td>
                    {applicant?.appliedjobdata?.downloadPdf ||
                    !applicant?.appliedjobdata?.downloadEvaluate ? (
                      <td className="py-2 md:py-4">
                        <button
                          onClick={() => {
                            setApplicantInfo(applicant);
                            setIsOpenEvaluate(true);
                          }}
                          className="bg-primary text-gray-50 px-5 py-1 rounded-md"
                        >
                          Evaluate
                        </button>
                      </td>
                    ) : (
                      <td className="py-2 md:py-4">
                        <button className="bg-green-200 text-gray-400 px-5 py-1 rounded-md cursor-not-allowed">
                          Evaluate
                        </button>
                      </td>
                    )}
                    <td className="py-2 md:py-4">
                      <button
                        onClick={() => {
                          setIsOpenProfile(true);
                          setUserEmail(applicant?.appliedjobdata?.email);
                        }}
                        className="bg-primary text-gray-50 px-5 py-1 rounded-md"
                      >
                        Profile
                      </button>
                    </td>
                    {applicant?.appliedjobdata?.downloadPdf ? (
                      <td className="py-2 md:py-4">
                        <Link
                          to={applicant?.appliedjobdata?.downloadPdf}
                          target="_blank"
                          className="bg-primary text-gray-50 px-5 py-1 rounded-md"
                        >
                          Submitted File
                        </Link>
                      </td>
                    ) : (
                      <td>
                        <span className="bg-green-200 text-gray-400 px-5 py-1 rounded-md cursor-not-allowed">
                          Submitted File
                        </span>
                      </td>
                    )}
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
              length: Math.ceil(applicants.length / rowsPerPage),
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
              endIndex >= applicants.length ? "cursor-not-allowed" : ""
            }`}
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
            disabled={endIndex >= applicants.length}
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="my-10 md:my-20 text-center text-gray-600 text-xs md:text-base">
          © 2023 Biomed LTD. All Rights Reserved.
        </div>
      </div>

      <ProfileModal
        isOpen={isOpenProfile}
        closeModal={closeProfileModal}
        email={userEmail}
      />

      <EvaluateModal
        isOpen={isOpenEvaluate}
        closeModal={closeEvaluateModal}
        applicantInfo={applicantInfo}
      />
    </>
  );
};

export default TaskApplied;
