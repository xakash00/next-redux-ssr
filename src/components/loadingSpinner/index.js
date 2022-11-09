import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = ({color}) => {
  return (
    <>
      <div
        style={{ marginTop: "10rem" }}
        className="d-flex justify-content-center"
      >
        <Spinner style={{color: "red"}} animation="border" />
      </div>
    </>
  );
};

export default Loading;
