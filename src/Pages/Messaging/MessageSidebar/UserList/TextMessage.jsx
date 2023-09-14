import React, { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const TextMessage = ({ msg }) => {
  const { user } = useContext(AuthContext);

  console.log(msg?.email === user?.email);

  return (
    <div
      className={
        msg?.email === user?.email ? `flex justify-end` : `flex justify-start`
      }
    >
      <h2 className="bg-gray-400 my-5 px-4 py-2 mx-6 border rounded-2xl text-sm inline-block">
        {msg.message}
      </h2>
    </div>
  );
};

export default TextMessage;
