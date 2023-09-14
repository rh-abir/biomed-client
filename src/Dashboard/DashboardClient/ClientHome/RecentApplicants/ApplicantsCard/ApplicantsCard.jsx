import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs";
import { LiaEyeSolid, LiaTrashAltSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";
import { Tooltip as ReactTooltip } from "react-tooltip";

const ApplicantsCard = ({ applicant }) => {
  const { appliedjobdata } = applicant;
  console.log(appliedjobdata);

  return (
    <div className="xl:flex gap-4 mb-2 border w-full px-5 py-5 lg:py-10 rounded-xl">
      <div>
        <img
          className="rounded-full h-28 w-28 mb-2 xl:mb-0 object-cover bg-gray-50"
          src={appliedjobdata?.image}
          alt=""
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{appliedjobdata?.name}</h3>
        <p className="text-base text-blue-700 mb-2">{appliedjobdata?.email}</p>
        <div className="md:flex items-center gap-4">
          <p className="flex items-center gap-1">
            <SlLocationPin />
            <span>{appliedjobdata?.country}</span>
          </p>
        </div>
        <div className="space-x-2 md:space-x-3 pt-4">
          {/* Button - 1 */}
          <button
            className="dark:bg-gray-800 bg-blue-100 p-2 text-lg rounded-lg hover:bg-blue-700 hover:text-white duration-500"
            data-tooltip-id="tooltip-1"
          >
            <LiaEyeSolid />
          </button>
          <ReactTooltip
            id="tooltip-1"
            place="bottom"
            content="View Application"
          />
          {/* Button - 2 */}
          <button
            className="dark:bg-gray-800 bg-blue-100 p-2 text-lg rounded-lg hover:bg-blue-700 hover:text-white duration-500"
            data-tooltip-id="tooltip-2"
          >
            <BsCheck2 />
          </button>
          <ReactTooltip
            id="tooltip-2"
            place="bottom"
            content="Approve Application"
          />
          {/* Button - 3 */}
          <button
            className="dark:bg-gray-800 bg-blue-100 p-2 text-lg rounded-lg hover:bg-blue-700 hover:text-white duration-500"
            data-tooltip-id="tooltip-3"
          >
            <AiOutlineCloseCircle />
          </button>
          <ReactTooltip
            id="tooltip-3"
            place="bottom"
            content="Reject Application"
          />
          {/* Button - 4 */}
          <button
            className="dark:bg-gray-800 bg-blue-100 p-2 text-lg rounded-lg hover:bg-blue-700 hover:text-white duration-500"
            data-tooltip-id="tooltip-4"
          >
            <LiaTrashAltSolid />
          </button>
          <ReactTooltip
            id="tooltip-4"
            place="bottom"
            content="Delete Application"
          />
        </div>
      </div>
    </div>
  );
};

export default ApplicantsCard;
