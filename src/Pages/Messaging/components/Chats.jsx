import { Link } from "react-scroll";
import useMessageData from "../../../hooks/useMessageData";

const Chats = () => {
  const [getApplayMessage, refetch] = useMessageData();

  const { email, image, name, message } = getApplayMessage[0]?.appliedjobdata;

  const messageText = message[0]?.text;

  return (
    <Link to={`/messagedetails/${email}`}>
      <div className="chats">
        <div className="userChat">
          <img src={image} alt="" />
          <div className="userChatInfo">
            <span>{name}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Chats;
