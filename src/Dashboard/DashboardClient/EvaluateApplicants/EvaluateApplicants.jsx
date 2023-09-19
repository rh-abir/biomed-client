import React, { useContext } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { PiToolboxLight } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";
import { useQuery } from "@tanstack/react-query";
import placeholder from "../../../assets/placeholder.jpg";

import axios from "axios";
import { AuthContext } from "../../../Provider/AuthProvider";

const EvaluateApplicants = () => {
  const { user } = useContext(AuthContext);
  console.log(user)
  const { data: evaluateTask = [] } = useQuery({
    queryKey: ["evaluateTask"],
    queryFn: async () => {
      const res = await axios(
        `https://biomed-server.vercel.app/evaluateTasks/${user?.email}`
      );
      return res.data;
    },
  });

  return (
    <div className="md:p-20 p-5">
      {/* Title Section */}
      <DashboardTitle
        title={"Evaluate Applicants"}
        slogan={"Ready to jump back in?"}
      />
      <div className="md:mt-10 mt-7 dark:bg-gray-800 dark:text-white bg-white md:p-7 p-5 rounded-xl shadow-sm">
        <div className="relative overflow-x-auto md:mt-8">
          <table className="w-full text-left">
            <thead className="text-sm text-[#1967d2]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Applications
                </th>
                <th scope="col" className="px-6 py-3">
                  Created & Expired
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {evaluateTask.map((evaluate) => (
              <tbody key={evaluate._id}>
                <tr className="dark:bg-gray-800 bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <div className="flex gap-4">
                      <img
                        src={
                          evaluate.appliedjobdata.image
                            ? evaluate.appliedjobdata.image
                            : placeholder
                        }
                        className="w-14 h-14 rounded-full object-cover"
                        alt=""
                      />
                      <div>
                        <p className="md:text-lg text-sm font-bold">
                          {evaluate.appliedjobdata.name
                            ? evaluate.appliedjobdata.name
                            : "Name not found"}
                        </p>
                        <div className="flex  text-sm mt-2">
                          <PiToolboxLight size={20} />
                          <p className="ms-1">
                            {evaluate.appliedjobdata.title
                              ? evaluate.appliedjobdata.title
                              : "Title not Found"}
                          </p>
                          <SlLocationPin size={18} className="ms-3" />
                          <p className="ms-1">
                            {evaluate.appliedjobdata.country
                              ? evaluate.appliedjobdata.country
                              : "Country Not Found"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4 underline text-sm text-[#1967d2]">
                    3+ Applied
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <p>October 27, 2017</p>
                    <p>{evaluate.deadline}</p>
                  </td>
                  <td className="px-6 py-4 text-green-700 text-sm">
                    {evaluate.appliedjobdata.isEvaluate && "Evaluated"}
                  </td>
                  <td className="px-6 py-4 text-[#1967d2]">
                    <div className="flex gap-3">
                      <RiDeleteBin6Line />
                      <MdOutlineModeEdit />
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
      <p className="text-center mt-20">© 2023 Biomed by All Right Reserved.</p>
    </div>
  );
};

export default EvaluateApplicants;
