import React from "react";
import MessageNavbar from "./MessageNabvar/MessageNavbar";
import MessageSidebar from "./MessageSidebar/MessageSidebar";
import { Outlet } from "react-router-dom";
import MessageSend from "./MessageSend/MessageSend";

const MessageRoot = () => {
  return (
    <div className="pt-[90px]">
      <div className="bg-gray-100 py-5 px-5">
        <MessageNavbar />
      </div>
      <div className="grid grid-cols-8 h-[700px]">
        <div className="col-span-3 bg-gray-200 ">
          <MessageSidebar />
        </div>
        <div className="col-span-5 flex flex-col">
          <Outlet />
          <div className="mt-auto">
            <MessageSend />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageRoot;
