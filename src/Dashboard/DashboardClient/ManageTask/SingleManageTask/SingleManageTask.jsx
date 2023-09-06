import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { PiToolboxLight } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";

const SingleManageTask = ({ data }) => {
  return (
    <tr className="dark:bg-gray-800 bg-white border-b ">
      <td
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        <div className="flex gap-4">
          <img src="https://i.ibb.co/yyx3Vvb/Manage-Job.png" alt="" />
          <div>
            <p className="md:text-lg text-sm font-bold">
              {data.title}
            </p>
            <div className="flex  text-sm font-thin mt-2">
              <PiToolboxLight size={20} />
              <p className="ms-1">Segment</p>
              <SlLocationPin size={18} className="ms-3" />
              <p className="ms-1">London, UK</p>
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 underline text-sm font-thin text-[#1967d2]">
        3+ Applied
      </td>
      <td className="px-6 py-4 text-sm font-thin">
        <p>October 27, 2017</p>
        <p>April 25, 2011</p>
      </td>
      <td className="px-6 py-4 text-green-700 text-sm font-thin">Active</td>
      <td className="px-6 py-4 text-[#1967d2]">
        <div className="flex gap-3">
          <RiDeleteBin6Line />
          <MdOutlineModeEdit />
        </div>
      </td>
    </tr>
  );
};

export default SingleManageTask;
