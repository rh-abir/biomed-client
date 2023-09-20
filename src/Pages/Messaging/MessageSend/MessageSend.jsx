import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useMessageShow from "../../../hooks/useMessageShow";

const MessageSend = () => {
  const { user, getId } = useContext(AuthContext);

  console.log(getId);

  const [allmessage, refetch] = useMessageShow(getId);
  console.log(allmessage);

  const { displayName, email, photoURL } = user;

  // // console.log(user);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const message = e.target.text.value;
    console.log(message);

    const messageData = { displayName, email, photoURL, message };

    fetch(`${import.meta.env.VITE_BASE_URL}/put/appliedtask/${getId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(messageData),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  return (
    <div className="mb-1">
      <form onSubmit={handleSendMessage} className="flex">
        <input
          type="text"
          className="flex-grow border outline-none px-5 py-3"
          placeholder="send message"
          name="text"
        />
        <button className="px-16 bg-primary text-gray-100">Send</button>
      </form>
    </div>
  );
};

export default MessageSend;
