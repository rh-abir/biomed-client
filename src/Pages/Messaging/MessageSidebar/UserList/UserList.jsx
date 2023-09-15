import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";

const UserList = ({ data }) => {
  const { user, clientRole } = useContext(AuthContext);

  const { image, name, email, instrucurEmail, logo, companyName } =
    data.appliedjobdata;

  console.log(data);

  return (
    <Link
      to={`/messageroot/messagedetails/${data?._id}`}
      className="flex bg-gray-100 px-5 py-2 gap-2 rounded-md"
    >
      <div className="">
        <img
          src={clientRole ? image : logo}
          alt="user image"
          className="w-12 h-12 object-cover rounded-full"
        />
      </div>
      <div>
        <h2>{clientRole ? name : companyName}</h2>
        <p>{clientRole ? email : instrucurEmail}</p>
      </div>
    </Link>
  );
};

export default UserList;
