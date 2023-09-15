import React, { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import useMessageData from "../../../../hooks/useMessageData";
import MessageSend from "../../MessageSend/MessageSend";
import TextMessage from "./TextMessage";

const Demo = () => {
  const { user } = useContext(AuthContext);

  const [getApplyMessage, refetch] = useMessageData();

  console.log(getApplyMessage[0]?.appliedjobdata.message);
  const messages = getApplyMessage[0]?.appliedjobdata.message;

  return (
    <div className="flex flex-col h-full">
      <div className="h-[700px] overflow-y-scroll">
        {" "}
        {/* Added overflow-y-scroll */}
        {messages.map((msg, index) => (
          <TextMessage key={index} msg={msg} />
        ))}
      </div>
      <div className="mt-auto">
        <MessageSend />
      </div>
    </div>
  );
};

export default Demo;
