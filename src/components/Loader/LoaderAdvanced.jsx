import React from "react";
import { BeatLoader } from "react-spinners";

const LoaderAdvanced = () => {
  return (
    <div
      className="
      flex 
      flex-col 
      justify-center 
      items-center 
      dark:bg-gray-700
    "
    >
      <BeatLoader size={100} color="#5BBB7B" />
    </div>
  );
};

export default LoaderAdvanced;
