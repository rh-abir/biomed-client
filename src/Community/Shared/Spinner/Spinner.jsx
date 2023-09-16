import React from "react";
import { RingLoader } from "react-spinners";
const Spinner = () => {
  return (
    <div
      className="
      h-screen
      flex 
      justify-center 
      items-start 
      dark:bg-gray-700
      mt-16
      lg:mt-20
    "
    >
      <RingLoader size={70} color="#5BBB7B" />
    </div>
  );
};

export default Spinner;
