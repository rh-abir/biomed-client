import React from "react";
import { Outlet } from "react-router-dom";
import SpecificCategorySidebar from "./SpecificCategorySidebar";

const SpecificCategoryLayout = () => {
  return (
    <div className="grid grid-cols-6 bg-gray-200">
      <div className="col-span-6 lg:col-span-4">
        <Outlet />
      </div>
      <div className="col-span-2 hidden lg:block">
        <SpecificCategorySidebar />
      </div>
    </div>
  );
};

export default SpecificCategoryLayout;
