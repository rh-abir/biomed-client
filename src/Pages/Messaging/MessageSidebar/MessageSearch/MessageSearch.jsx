import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const MessageSearch = () => {
  return (
    <div>
      <form className="flex items-center">
        <input
          type="text"
          placeholder="search user"
          className="px-5 py-2 outline-none"
        />
        <button className="bg-primary py-3 text-gray-50  px-3"><AiOutlineSearch /></button>
      </form>
    </div>
  );
};

export default MessageSearch;
