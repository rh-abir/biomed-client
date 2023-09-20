import React from "react";

const Cover = ({ title, text }) => {
  return (
    <div className="bg-gradient-to-tr from-green-300 via-green-400 to-green-500 py-12 px-4 text-white text-center rounded-sm">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-xl">{text}</p>
    </div>
  );
};

export default Cover;
