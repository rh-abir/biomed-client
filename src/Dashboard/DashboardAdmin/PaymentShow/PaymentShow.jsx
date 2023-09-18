import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";
import NoUserClient from "../../../components/Shared/NoUserClient/NoUserClient";
import { useAxiosSecure } from "../../../components/hook/useAxiosSecure";

// Function to format a date string as "YYYY-MM-DD"
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const PaymentShow = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    data: paidUsers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["paidUsers"],
    queryFn: async () => {
      const res = await axiosSecure(`/payment`);
      return res.data;
    },
  });

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return (
    <>
      <div className="px-10 py-6 bg-gray-100 min-h-screen flex flex-col">
        {/* Title Section */}
        <DashboardTitle title={"Paid user"} slogan={"Ready to jump back in?"} />

        {paidUsers.length === 0 ? (
          <NoUserClient text={"No paid Users Here"} />
        ) : (
          <div className="bg-white shadow-md p-4 md:p-8 mx-2 md:mx-10 rounded-2xl">
            <h2 className="text-lg md:text-xl font-semibold pb-6 md:pb-10">
              Paid User
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 text-green-400">
                  <tr>
                    <th className="py-3 md:py-5 text-left text-base md:text-lg px-3 md:ps-5">
                      Image
                    </th>
                    <th className="py-3 md:py-5 text-left text-base md:text-lg">
                      Name
                    </th>
                    <th className="py-3 md:py-5 text-left text-base md:text-lg">
                      Email
                    </th>
                    <th className="py-3 md:py-5 text-left text-base md:text-lg">
                      Payment Date
                    </th>
                    <th className="py-3 md:py-5 text-left text-base md:text-lg">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {paidUsers?.slice(startIndex, endIndex)?.map((user) => (
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
                        {formatDate(user?.date)} {/* Format the date */}
                      </td>
                      <td className="py-2 md:py-4 text-primary">Paid</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {!paidUsers.length === 0 ? (
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
                length: Math.ceil(paidUsers.length / rowsPerPage),
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
                endIndex >= paidUsers.length ? "cursor-not-allowed" : ""
              }`}
              onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
              disabled={endIndex >= paidUsers.length}
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
    </>
  );
};

export default PaymentShow;
