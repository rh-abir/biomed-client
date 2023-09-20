import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateClient = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();


  if (user) {
    return children;
  }
  return <Navigate to={"/registerclient"} state={{ from: location }} replace />;
};

export default PrivateClient;
