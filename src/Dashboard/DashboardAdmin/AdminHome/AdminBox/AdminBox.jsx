import React from "react";
import { BiBriefcase, BiMessageDetail } from "react-icons/bi";
import { FaRegFileAlt } from "react-icons/fa";
import useGetData from "../../../../hooks/useGetData";
import { AiOutlineFileDone } from "react-icons/ai";
const AdminBox = () => {
  const postTask = useGetData("jobs");
  const application = useGetData("applidejobs");
  const evaluate = useGetData("evaluateTasks");

  return (
    <div className="mt-6 dark:bg-gray-800 dark:text-white space-y-8 md:space-y-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center gap-6">
      {/* box-1 */}
      <div className="p-8 flex justify-between w-full dark:bg-gray-800 bg-white rounded-lg items-center shadow-sm border-0">
        <div className="bg-blue-100 p-4 rounded-lg">
          <BiBriefcase className="text-blue-800  text-5xl" />
        </div>
        <div>
          <p className="text-blue-800 text-4xl font-semibold text-end">
            {postTask[0].length}
          </p>
          <p>Posted Tasks</p>
        </div>
      </div>
      {/* box-2 */}
      <div className="p-8 flex justify-between w-full dark:bg-gray-800 bg-white rounded-lg items-center shadow-sm border-0">
        <div className="bg-red-100 p-4 rounded-lg">
          <FaRegFileAlt className="text-red-700 text-5xl" />
        </div>
        <div>
          <p className="text-red-700 text-4xl font-semibold text-end">
            {application[0].length}
          </p>
          <p>Application</p>
        </div>
      </div>
      {/* box-3 */}
      <div className="p-8 flex justify-between w-full dark:bg-gray-800 bg-white rounded-lg items-center shadow-sm border-0">
        <div className="bg-yellow-100 p-4 rounded-lg">
          <BiMessageDetail className="text-yellow-500  text-5xl" />
        </div>
        <div>
          <p className="text-yellow-500 text-4xl font-semibold text-end">74</p>
          <p>Messages</p>
        </div>
      </div>
      {/* box-4 */}
      <div className="p-8 flex justify-between w-full dark:bg-gray-800 bg-white rounded-lg items-center shadow-sm border-0">
        <div className="bg-green-100 p-4 rounded-lg">
          <AiOutlineFileDone className="text-green-700  text-5xl" />
        </div>
        <div>
          <p className="text-green-700 text-4xl font-semibold text-end">
            {evaluate[0].length}
          </p>
          <p>Evaluated</p>
        </div>
      </div>
    </div>
  );
};

export default AdminBox;
