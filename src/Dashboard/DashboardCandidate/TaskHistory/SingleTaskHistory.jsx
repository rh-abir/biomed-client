import axios from "axios";
import React from "react";
import { FaEye, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTasktData from "../../../hooks/useTasktData";

const SingleTaskHistory = ({ client }) => {
  const { appliedjobdata } = client;

  const [, refetch] = useTasktData();

  const id = client?._id;

  const { title, taskId } = appliedjobdata;

  const handleApply = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://biomed-server.vercel.app/taskdelete/${id}`)
          .then((response) => {
            console.log(response);
            refetch();
            if (response.status === 200) {
              Swal.fire("Delete", "Your are successfully delete.", "success");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  // console.log(client?.appliedjobdata?.downloadEvaluate);

  return (
    <>
      {!client?.appliedjobdata?.isApplied ? (
        <tr>
          <td className="py-2 md:py-4">
            <div className="flex items-center">
              <p className="font-semibold text-base md:text-lg">{title}</p>
            </div>
          </td>

          <td className="py-2 md:py-4">
            {appliedjobdata.isEvaluate ? (
              <Link
                to={client?.appliedjobdata?.downloadEvaluate}
                target="_blank"
              >
                <button className="bg-primary px-3 py-2 hover:bg-hover rounded-md text-gray-100 hover:text-gray-50 transition">
                  Download
                </button>
              </Link>
            ) : (
              <Link
                to={client?.appliedjobdata?.downloadEvaluate}
                target="_blank"
              >
                <button
                  disabled={true}
                  className={`bg-green-300 px-3 py-2 rounded-md text-gray-100 hover:text-gray-50 transition cursor-not-allowed`}
                >
                  Download
                </button>
              </Link>
            )}
          </td>

          <td className="py-2 md:py-4">Rating</td>
          <td className="py-2 md:py-4">Feedback</td>
          <td className="py-2 md:py-4">
            <div className="flex space-x-1 md:space-x-2"></div>
            <div className="flex space-x-1 md:space-x-2">
              <span className="bg-gray-100 p-1 md:p-2 rounded-lg">
                <Link to={`/tasksDatail/${taskId}`} className="cursor-pointer">
                  <FaEye className="w-3 h-3 md:w-4 md:h-4 " />
                </Link>
              </span>
              <span className="bg-gray-100 p-1 md:p-2 rounded-lg">
                <FaRegTrashAlt
                  onClick={handleApply}
                  className="w-3 h-3 md:w-4 md:h-4 text-red-500 cursor-pointer hover:text-black"
                />
              </span>
            </div>
          </td>
        </tr>
      ) : (
        ""
      )}
    </>
  );
};

export default SingleTaskHistory;
