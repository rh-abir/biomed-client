import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import Loader from "../components/Loader/Loader";

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);


  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="dark:bg-gray-800">
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Root;
