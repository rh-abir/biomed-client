import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import ApplyModal from "../../../components/Modal/ApplyModal/ApplyModal";

const SingleTaskOverview = ({ client }) => {
  const [isOpenApply, setIsOpenApply] = useState(false);

  console.log();

  const closeApplyModal = () => {
    setIsOpenApply(false);
  };

  const { appliedjobdata, _id } = client;

  const {
    deadline,
    companyName,
    logo,
    image,
    title,
    taskId,
  } = appliedjobdata;
  console.log(appliedjobdata)

  const showInfoCompany = {
    _id,
    taskId,
    title,
    deadline,
  };

  return (
    <>
      {client?.appliedjobdata?.isApplied ? (
        <tr>
          <td className="py-2 md:py-4">
            <img className="w-16 h-16 rounded-full object-cover ml-5" src={logo} alt="" />

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
                <Link to={`/tasksDatail/${taskId}`} className="cursor-pointer">
                  <FaEye className="w-3 h-3 md:w-4 md:h-4 " />
                </Link>
              </span>
            </div>
          </td>
        </tr>
      ) : (
        ""
      )}

      <ApplyModal
        closeModal={closeApplyModal}
        isOpen={isOpenApply}
        showInfoCompany={showInfoCompany}
      />
    </>
  );
};

export default SingleTaskOverview;
