import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import SingleManageTask from "./SingleManageTask/SingleManageTask";

const ManageTask = () => {
  const { manageJobs } = useContext(AuthContext);

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
          {/* <details className="dropdown mt-3 md:mt-0">
              <summary className="m-1 btn dark:bg-gray-800 bg-[#F0F5F7] border-1 border-gray-300">
                Short by <BsChevronDown />
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1]dark: rounded-box w-52">
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
            </details> */}
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
            <tbody>
              {manageJobs.map((job) => (
                <SingleManageTask key={job._id} data={job} />
              ))}
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

export default ManageTask;
