import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const MessageNavbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex items-center gap-2">
      <img src={user?.photoURL} className="w-12 h-12 rounded-full object-cover" alt="" />
      <h2 className="text-lg font-semibold">{user?.displayName}</h2>
    </div>
  );
};

export default MessageNavbar;
