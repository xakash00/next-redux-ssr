import React from "react";
import { toTitleCase } from "../helper";

const PostCard = ({ data }) => {
  return (
    <>
      <div className="card m-auto shadow border-0" style={{ width: "18rem" }}>
        <div className="card-header">
          <h6>Post Id - {data?.postData?.id}</h6>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {toTitleCase(data?.postData?.title)}
          </li>
          <li className="list-group-item">{data?.postData?.body}</li>
        </ul>
      </div>
    </>
  );
};

export default PostCard;
