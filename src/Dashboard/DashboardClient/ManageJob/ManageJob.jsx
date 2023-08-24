import { BsChevronDown } from "react-icons/bs";
import { MdOutlineModeEdit } from "react-icons/md";
import { PiToolboxLight } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";
const ManageJob = () => {
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
          <details className="dropdown mt-3 md:mt-0">
            <summary className="m-1 btn dark:bg-gray-800 bg-[#F0F5F7] border-1 border-gray-300">
              Short by <BsChevronDown />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1]dark: bg-gray-800 bg-[#F0F5F7] rounded-box w-52">
              <li>
                <a>Last 6 Months</a>
              </li>
              <li>
                <a>Last 12 Months</a>
              </li>
              <li>
                <a>Last 16 Months</a>
              </li>
              <li>
                <a>Last 24 Months</a>
              </li>
              <li>
                <a>Last 5 Years</a>
              </li>
            </ul>
          </details>
        </div>
        <div className="relative overflow-x-auto md:mt-8">
          <table className="w-full text-left">
            <thead className="text-sm text-[#1967d2]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                n
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
            <tbody>
              <tr className="dark:bg-gray-800 bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  <div className="flex gap-4">
                    <img src="https://i.ibb.co/yyx3Vvb/Manage-Job.png" alt="" />
                    <div>
                      <p className="md:text-lg text-sm font-bold">
                        Software Engineer (Android), Libraries
                      </p>
                      <div className="flex  text-sm font-thin mt-2">
                        <PiToolboxLight size={20} />
                        <p className="ms-1">Segment</p>
                        <SlLocationPin size={18} className="ms-3" />
                        <p className="ms-1">London, UK</p>
                      </div>
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4 underline text-sm font-thin text-[#1967d2]">
                  3+ Applied
                </td>
                <td className="px-6 py-4 text-sm font-thin">
                  <p>October 27, 2017</p>
                  <p>April 25, 2011</p>
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
              <tr className="dark:bg-gray-800 dark:text-white bg-white ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium dark:text-white text-gray-900 whitespace-nowrap "
                >
                  Sample
                </th>
                <td className="px-6 py-4">Sample</td>
                <td className="px-6 py-4">Sample</td>
                <td className="px-6 py-4">Sample</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-center mt-20">
        © 2023 Biomed by <span className="text-[#1967d2]">ib-themes.</span> All
        Right Reserved.
      </p>
    </div>
  );
};

export default ManageJob;
