import React, { useContext } from "react";
import { useRouter } from "next/router";
import { currentUser } from "../helper";
// import { AuthContext } from "../context/AuthContext";
const ProtectedRoute = ({ children }) => {
  const Router = useRouter();

  if (currentUser === false) {
    Router.push("/");
    return <></>;
  }
};

export default ProtectedRoute;
