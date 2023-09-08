import React from "react";
import { FaEye, FaRegTrashAlt } from "react-icons/fa";

const SingleTaskHistory = ({ client }) => {
  console.log(client.appliedjobdata.title);

  return (
    <>
      {!client?.appliedjobdata?.isApplied ? (
        <tr>
          <td className="py-2 md:py-4">
            <div className="flex items-center">
              <p className="font-semibold text-base md:text-lg">
                {client.appliedjobdata.title}
              </p>
            </div>
          </td>

          <td className="py-2 md:py-4">Download</td>
          <td className="py-2 md:py-4">Rating</td>
          <td className="py-2 md:py-4">Feedback</td>
          <td className="py-2 md:py-4">
            <div className="flex space-x-1 md:space-x-2"></div>
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
      ) : (
        ""
      )}
    </>
  );
};

export default SingleTaskHistory;
