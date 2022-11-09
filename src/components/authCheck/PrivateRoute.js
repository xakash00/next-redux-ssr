import React, { useContext } from "react";
import { useRouter } from "next/router";
import { currentUser } from "../helper";
// import { AuthContext } from "../context/AuthContext";
const PrivateRoute = ({ children }) => {
  const Router = useRouter();

  if (currentUser!==false) {
    return <>{children}</>;
  } else {
    Router.push("/signup");
    return <></>;
  }
};

export default PrivateRoute;
