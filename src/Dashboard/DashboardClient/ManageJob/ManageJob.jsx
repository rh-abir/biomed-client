import { MdOutlineModeEdit } from "react-icons/md";
import { PiToolboxLight } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/Loader/Loader";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext, useState } from "react";
import Select from "react-select";


const ManageJob = () => {
  const [setValue] = useState(null);
  const options = [
    { value: "Newest", label: "Newest" },
    { value: "Last 12 Months", label: "Last 12 Months" },
    { value: "Last 16 Months", label: "Last 16 Months" },
    { value: "Last 24 Months", label: "Last 24 Months" },
    { value: "Last 5 year", label: "Last 5 year" },
  ];
  const selectStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#f0f5f7",
      borderRadius: "0.375rem",
      borderColor: "1px solid #ced4da",
      boxShadow: "none",
      "&:hover": {
        borderColor: "transparent",
      },
    }),
  };
  const { user } = useContext(AuthContext);
  const { data: manageJobsData, isLoading } = useQuery({
    queryKey: ["manage", user?.email],
    queryFn: async () => {
      const res = await axios(`https://biomed-server.vercel.app/jobs`);
      return res.data;
    },
  });
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="md:p-20 p-5">
      {/* Title Section */}
      <DashboardTitle
        title={"Manage jobs!"}
        slogan={"Ready to jump back in?"}
      />
      <div className="md:mt-10 mt-7 dark:bg-gray-800 dark:text-white bg-white md:p-7 p-5 rounded-xl shadow-sm">
        <div className="md:flex md:justify-between">
          <p className="text-lg">My Job Listings</p>
          <Select
                className="text-sm"
                isSearchable={false}
                options={options}
                defaultValue={setValue}
                placeholder="Newest"
                styles={selectStyles}
              />
        </div>
        <div className="relative overflow-x-auto md:mt-8">
          <table className="w-full text-left">
            <thead className="text-sm text-[#1967d2]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Applications
                </th>
                <th scope="col" className="px-6 py-3">
                  Created & Expired
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {manageJobsData.map((job)=>(
              <tbody key={job._id}>
              <tr className="dark:bg-gray-800 bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  <div className="flex gap-4">
                    <img src={job.logo} className="rounded-2xl w-14 object-cover" alt="" />
                    <div>
                      <p className="md:text-lg text-sm font-bold">
                        Software Engineer (Android), Libraries
                      </p>
                      <div className="flex  text-sm font-thin mt-2">
                        <PiToolboxLight size={20} />
                        <p className="ms-1">{job.jobType}</p>
                        <SlLocationPin size={18} className="ms-3" />
                        <p className="ms-1">{job.city}, {job.country}</p>
                      </div>
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4 underline text-sm font-thin text-[#1967d2]">
                  3+ Applied
                </td>
                <td className="px-6 py-4 text-sm font-thin">
                  <p>October 27, 2017</p>
                  <p>{job.deadline}</p>
                </td>
                <td className="px-6 py-4 text-green-700 text-sm font-thin">
                  Active
                </td>
                <td className="px-6 py-4 text-[#1967d2]">
                  <div className="flex gap-3">
                    <RiDeleteBin6Line />
                    <MdOutlineModeEdit />
                  </div>
                </td>
              </tr>
            </tbody>
            ))}
          </table>
        </div>
      </div>
      <p className="text-center mt-20">
        © 2023 Biomed by All
        Right Reserved.
      </p>
    </div>
  );
};

export default ManageJob;
