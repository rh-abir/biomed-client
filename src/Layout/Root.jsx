import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const Root = () => {


  return (
    <>
      <div className="dark:bg-gray-800">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Root;
