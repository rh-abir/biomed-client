import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import "../style.scss";

const MessageHome = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default MessageHome;
