import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Dashboard/Shared/Navbar/Navbar";
import Sidebar from "../Dashboard/Shared/Sidebar/Sidebar";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../components/Loader/Loader";

const Dashboard = () => {
  const { dashboardToggle, adminRole, clientRole } = useContext(AuthContext);

  if (adminRole === null || clientRole === null ) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-4 dark:bg-gray-700 lg:grid-cols-6 xl:grid-cols-4 pt-[94px]">
        <aside
          className={`col-span-1 dark:bg-gray-700 lg:col-span-2 xl:col-span-1 hidden lg:block`}
        >
          <Sidebar />
        </aside>

        {dashboardToggle && (
          <aside className="lg:hidden">
            <Sidebar />
          </aside>
        )}

        <div className="col-span-4 lg:col-span-4 xl:col-span-3 dark:bg-gray-700 bg-slate-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
