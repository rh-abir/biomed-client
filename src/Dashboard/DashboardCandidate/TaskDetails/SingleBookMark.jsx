import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { FaEye, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useBookMarkData from "../../../hooks/useBookMarkData";

const SingleBookMark = ({ bookmark }) => {
  const [, refetch] = useBookMarkData();

  const { logo, deadline, title, _id } = bookmark.task;

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/bookmark/${_id}`).then((res) => {
      console.log(res.data.deletedCount);
      if (res.data.deletedCount >= 0) {
        toast.error("Delete confirm ");
      }

      refetch();
    });
  };

  return (
    <tr>
      <td className="py-2 md:py-4">
        <img
          className="w-16 h-16 rounded-full object-cover ml-5"
          src={logo}
          alt=""
        />
      </td>
      <td className="py-2 md:py-4">
        <p className="font-semibold text-base md:text-sm">{title}</p>
      </td>
      <td className="py-2 md:py-4">
        <p className="font-semibold text-base md:text-sm">{deadline}</p>
      </td>
      <td className="py-2 md:py-4 ">
        <div className="flex space-x-1 md:space-x-2">
          <span className="bg-gray-100 p-1 md:p-2 rounded-lg">
            <Link to={`/tasksDatail/${_id}`} className="cursor-pointer">
              <FaEye className="w-3 h-3 md:w-4 md:h-4 " />
            </Link>
          </span>
          <span className="bg-gray-100 p-1 md:p-2 rounded-lg">
            <FaRegTrashAlt
              onClick={handleDelete}
              className="w-3 h-3 md:w-4 md:h-4 text-red-500 cursor-pointer hover:text-black"
            />
          </span>
        </div>
      </td>
    </tr>
  );
};

export default SingleBookMark;
