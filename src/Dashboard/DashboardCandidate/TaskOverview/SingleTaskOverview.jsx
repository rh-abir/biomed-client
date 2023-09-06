import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import ApplyModal from "../../../components/Modal/ApplyModal/ApplyModal";

const SingleTaskOverview = ({ client }) => {
  console.log(client._id);
  const [isOpenApply, setIsOpenApply] = useState(false);

  const closeApplyModal = () => {
    setIsOpenApply(false);
  };

  const openApplyModal = () => {
    setIsOpenApply(true);
  };
  const { appliedjobdata, _id } = client;

  const {
    deadline,
    companyName,

    title,
    taskId,
  } = appliedjobdata;

  const showInfoCompany = {
    _id,
    taskId,
    title,
    deadline,
  };

  console.log(appliedjobdata);
  return (
    <>
      <tr>
        <td className="py-2 md:py-4">
          <p className="font-semibold text-base md:text-sm">
            {companyName ? "" : "hello"}
          </p>
        </td>
        <td className="py-2 md:py-4">
          <p className="font-semibold text-base md:text-sm">{title}</p>
        </td>
        <td className="py-2 md:py-4">
          <p className="font-semibold text-base md:text-sm">{deadline}</p>
        </td>
        <td className="py-2 md:py-4">
          <p className="font-semibold text-base md:text-sm">
            <button
              onClick={() => setIsOpenApply(true)}
              className="w-6 h-6 text-[#5ADE80]"
            >
              Submit
            </button>
          </p>
        </td>
        <td className="py-2 md:py-4 ">
          <div className="flex space-x-1 md:space-x-2">
            <span className="bg-gray-100 ml-6 p-1 md:p-2 rounded-lg">
              <Link to={`/jobsDatail/${taskId}`} className="cursor-pointer">
                <FaEye className="w-3 h-3 md:w-4 md:h-4 " />
              </Link>
            </span>
          </div>
        </td>
        <td className="py-2 md:py-4">
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </td>
      </tr>
      <ApplyModal
        closeModal={closeApplyModal}
        isOpen={isOpenApply}
        showInfoCompany={showInfoCompany}
      />
    </>
  );
};

export default SingleTaskOverview;
