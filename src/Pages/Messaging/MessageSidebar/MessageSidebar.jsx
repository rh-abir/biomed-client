import React from "react";
import MessageSearch from "./MessageSearch/MessageSearch";
import UserList from "./UserList/UserList";
import useMessageData from "../../../hooks/useMessageData";

const MessageSidebar = () => {
  const [getApplyMessage] = useMessageData();
  return (
    <div className="p-5">
      <div>
        <MessageSearch />
        <div className="mt-10 flex flex-col gap-4">
          {getApplyMessage.map((user) => (
            <UserList key={user._id} data={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessageSidebar;
