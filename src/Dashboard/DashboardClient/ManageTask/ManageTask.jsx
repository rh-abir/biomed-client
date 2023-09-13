import axios from "axios";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";
import SingleManageTask from "./SingleManageTask/SingleManageTask";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const ManageTask = () => {
  const { user } = useContext(AuthContext);
  const { data: manageJobs = [] } = useQuery({
    queryKey: ["manageJobs"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/jobs/${user?.email}`
      );
      return res.data;
    },
  });

  return (
    <div className="md:p-20 p-5">
      {/* Title Section */}
      <DashboardTitle
        title={"Manage Tasks!"}
        slogan={"Ready to jump back in?"}
      />
      <div className="md:mt-10 mt-7 dark:bg-gray-800 dark:text-white bg-white md:p-7 p-5 rounded-xl shadow-sm">
        <div className="md:flex md:justify-between">
          <p className="text-lg">My Tasks Listings</p>
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
      <p className="text-center mt-20">© 2023 Biomed by All Right Reserved.</p>
    </div>
  );
};

export default ManageTask;
