import Input from "./Input";
import Messages from "./Messages";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
