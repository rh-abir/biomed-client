import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleTaskOverview = ({ client }) => {
  const { appliedjobdata } = client;

  const {
    deadline,
    companyName,

    title,
    taskId,
  } = appliedjobdata;

  console.log(appliedjobdata);
  return (
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
          <Button variant="outlined" className="w-6 h-6 text-[#5ADE80]">
            Submit
          </Button>
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
  );
};

export default SingleTaskOverview;
