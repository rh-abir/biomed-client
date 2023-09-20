import React from "react";

const TextMessage = ({ msg }) => {
  return (
    <div>
      <h2 className="bg-gray-400 my-5 px-4 py-2 mx-6 border rounded-2xl text-sm inline-block">
        {msg.message}
      </h2>
    </div>
  );
};

export default TextMessage;
