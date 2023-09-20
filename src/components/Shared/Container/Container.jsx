import React from "react";

const Container = ({ children }) => {
  return (
    <div className="dark:bg-gray-800 dark:text-white max-w-[2520px] mx-auto xl:px-40 md:px-20 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
