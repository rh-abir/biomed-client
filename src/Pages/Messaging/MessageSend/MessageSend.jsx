import React from "react";

const MessageSend = () => {
  return (
    <div className="mb-1">
      <form action="" className="flex">
        <input
          type="text"
          className="flex-grow border outline-none px-5 py-3"
          placeholder="send message"
        />
        <button className="px-16 bg-primary text-gray-100">Send</button>
      </form>
    </div>
  );
};

export default MessageSend;
