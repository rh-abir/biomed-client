import React from "react";
import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className="
      h-screen
      flex 
      flex-col 
      justify-center 
      items-center 
      dark:bg-gray-700
    "
    >
      <HashLoader size={100} color="#5BBB7B" />
    </div>
  );
};

export default Loader;
