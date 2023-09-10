import React from "react";

import AdminForm from "../AdminForm/AdminForm";
import DashboardTitle from "../../../../components/DashboardTitle/DashboardTitle";

const AdminProfileEdit = () => {
  return (
    <div className="min-h-screen p-6">
      <DashboardTitle
        title={"Admin Profile"}
        slogan={"Ready to jump back in?"}
      />
      <div className="dark:bg-slate-700 bg-white min-h-screen">
        <div className="p-10">
          <AdminForm />
        </div>
      </div>
    </div>
  );
};

export default AdminProfileEdit;
