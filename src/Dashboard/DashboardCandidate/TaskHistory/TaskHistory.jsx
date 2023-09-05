import React from "react";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";
import { FaEye, FaRegTrashAlt } from "react-icons/fa";

const TaskHistory = () => {
    
  return (
    <div className="px-10 py-6 bg-gray-100 min-h-screen flex flex-col">
      {/* Title Section */}
      <DashboardTitle title={"Tasks History"} slogan={"Ready to jump back in?"} />

      <div className="bg-white shadow-md p-4 md:p-8 mx-2 md:mx-10 rounded-2xl">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 text-green-400">
              <tr>
                <th className="py-3 md:py-5 text-left text-base md:text-lg px-3 md:ps-5">
                  Image
                </th>
                <th className="py-3 md:py-5 text-left text-base md:text-lg">
                  Email
                </th>
                <th className="py-3 md:py-5 text-left text-base md:text-lg">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              
                <tr >
                  <td className="py-2 md:py-4">
                    <div className="flex items-center">
                      <img
                        src=""
                        alt="Job"
                        className="w-12 h-12 md:w-14 md:h-14 rounded-xl mr-3 md:mr-4"
                      />
                      <div>
                        <p className="font-semibold text-base md:text-lg">
                          sourave
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 md:py-4">souravh02@gamic.com</td>
                  <td className="py-2 md:py-4">
                    <div className="flex space-x-1 md:space-x-2">
                      <span className="bg-gray-100 p-1 md:p-2 rounded-lg">
                        <FaEye className="w-3 h-3 md:w-4 md:h-4" />
                      </span>
                      <span className="bg-gray-100 p-1 md:p-2 rounded-lg">
                        <FaRegTrashAlt className="w-3 h-3 md:w-4 md:h-4" />
                      </span>
                    </div>
                  </td>
                </tr>


            </tbody>
          </table>
        </div>
      </div>
      <div className="my-10 md:my-20 text-center text-gray-600 text-xs md:text-base">
        © 2023 Biomed LTD. All Rights Reserved.
      </div>
    </div>
  );
};

export default TaskHistory;
