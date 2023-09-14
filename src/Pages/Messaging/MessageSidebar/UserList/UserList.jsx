import React from "react";
import { Link } from "react-router-dom";

const UserList = ({ data }) => {
  const { image, name, email, instrucurEmail } = data.appliedjobdata;
  return (
    <Link
      to={`/messageroot/messagedetails`}
      className="flex bg-gray-100 px-5 py-2 gap-2 rounded-md"
    >
      <div className="">
        <img
          src={image}
          alt="user image"
          className="w-12 h-12 object-cover rounded-full"
        />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </Link>
  );
};

export default UserList;
