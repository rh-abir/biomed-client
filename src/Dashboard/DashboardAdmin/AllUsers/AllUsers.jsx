import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import {
  FaArrowLeft,
  FaArrowRight,
  FaEye,
  FaRegTrashAlt,
} from "react-icons/fa";
import Swal from "sweetalert2";
import { becomeModerator } from "../../../api/auth";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";
import EvaluateModal from "../../../components/Modal/EvaluateModal/EvaluateModal";
import ProfileModal from "../../../components/Modal/ProfileModal/ProfileModal";
import NoUserClient from "../../../components/Shared/NoUserClient/NoUserClient";

const AllUsers = () => {
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axios("https://biomed-server.vercel.app/allusers");
      return res.data;
    },
  });

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

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const handleDeleteUser = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/user?email=${email}`)
          .then((res) => {
            if (res?.data?.acknowledged) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((error) => {
            console.error("error:", error);
          });
      }
    });
  };

  return (
    <>
      <div className="px-10 py-6 bg-gray-100 min-h-screen flex flex-col">
        {/* Title Section */}
        <DashboardTitle title={"All User"} slogan={"Ready to jump back in?"} />

        {allUsers.length === 0 ? (
          <NoUserClient text={"No Users Here"} />
        ) : (
          <div className="bg-white shadow-md p-4 md:p-8 mx-2 md:mx-10 rounded-2xl">
            <h2 className="text-lg md:text-xl font-semibold pb-6 md:pb-10">
              All Users
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 text-green-400">
                  <tr>
                    <th className="py-3 md:py-5 text-left text-base md:text-lg px-3 md:ps-5">
                      Image
                    </th>
                    <th className="py-3 md:py-5 text-left text-base md:text-lg px-3 md:ps-5"></th>
                    <th className="py-3 md:py-5 text-left text-base md:text-lg">
                      Email
                    </th>
                    <th className="py-3 md:py-5 text-left text-base md:text-lg">
                      Give Role
                    </th>
                    <th className="py-3 md:py-5 text-left text-base md:text-lg">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {allUsers?.slice(startIndex, endIndex)?.map((user) => (
                    <tr key={user._id}>
                      <td className="py-2 md:py-4">
                        <img
                          src={user.image}
                          alt="Job"
                          className="w-12 h-12 md:w-14 md:h-14 rounded-xl mr-3 md:mr-4"
                        />
                      </td>
                      <td>
                        <p className="font-semibold xl:text-lg md:text-xs text-xs px-3">
                          {user.name}
                        </p>
                      </td>
                      <td className="py-2 xl:text-lg md:text-sm text-xs md:py-4">
                        {user.email}
                      </td>
                      <td className="py-2 md:py-4">
                        <button
                          onClick={() =>
                            becomeModerator(user.email).then((data) => {
                              console.log(data);
                              if (data.modifiedCount === 1) {
                                refetch();
                                toast.success(
                                  "Successfully as a moderator check the all moderator section "
                                );
                              }
                            })
                          }
                          className="bg-primary hover:bg-hover text-gray-50 xl:text-sm text-xs px-2 xl:mx-0 md:mx-3 mx-3 py-2 rounded-md"
                        >
                          Make Moderator
                        </button>
                      </td>
                      <td className="py-2 md:py-4">
                        <div className="flex space-x-1 md:space-x-2">
                          <span className="bg-gray-100 p-1 md:p-2 rounded-lg">
                            <button
                              onClick={() => {
                                setIsOpenProfile(true);
                                setUserEmail(user.email);
                              }}
                            >
                              <FaEye className="w-3 h-3 md:w-4 md:h-4" />
                            </button>
                          </span>
                          <span className="bg-gray-100 p-1 md:p-2 rounded-lg">
                            <FaRegTrashAlt
                              onClick={() => {
                                handleDeleteUser(user.email);
                              }}
                              className="w-3 h-3 md:w-4 md:h-4 cursor-pointer text-red-500"
                            />
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {!allUsers.length === 0 ? (
          <div className="flex justify-center mt-7">
            <button
              className={`mr-5 ${
                currentPage === 1 ? "cursor-not-allowed" : ""
              }`}
              onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
              disabled={currentPage === 1}
            >
              <FaArrowLeft />
            </button>
            <div className="flex">
              {Array.from({
                length: Math.ceil(allUsers.length / rowsPerPage),
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
                endIndex >= allUsers.length ? "cursor-not-allowed" : ""
              }`}
              onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
              disabled={endIndex >= allUsers.length}
            >
              <FaArrowRight />
            </button>
          </div>
        ) : (
          ""
        )}

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

export default AllUsers;
