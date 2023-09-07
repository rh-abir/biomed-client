import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { PiToolboxLight } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const SingleManageTask = ({ data }) => {
  return (
    <tr className="dark:bg-gray-800 bg-white border-b ">
      <td
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        <div className="flex gap-4">
          <img
            src={data.logo}
            className="w-16 h-16 object-cover rounded-full"
            alt=""
          />
          <div>
            <Link to={`/tasksDatail/${data?._id}`} className="md:text-lg hover:text-primary transition text-sm font-bold">{data.title}</Link>
            <div className="flex  text-sm mt-2">
              <PiToolboxLight size={20} />
              <p className="ms-1">{data.industry}</p>
              <SlLocationPin size={18} className="ms-3" />
              <p className="ms-1">{data.address}</p>
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 underline text-sm  text-[#1967d2] cursor-pointer">
        <Link to={`/dashboard/tasksApplied/${data?._id}`}>
          {" "}
          {data.appliedCount ? data.appliedCount : "No"} Applied
        </Link>
      </td>
      <td className="px-6 py-4 text-sm">
        <p>{data.deadline}</p>
      </td>
      <td className="px-6 py-4 text-green-700 text-sm ">Active</td>
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
