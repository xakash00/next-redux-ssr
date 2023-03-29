import React from "react";
import { FooterText, Title } from "../../stylesJs/home";
import { toTitleCase } from "../helper";

const PostCard = ({ data }) => {
  return (
    <>
      <div className="card m-auto shadow border-0" style={{ width: "18rem" }}>
        <div className="card-header">
          <h6>Post Id - {data?.postData?.data?.id}</h6>
        </div>
        <ul className="list-group list-group-flush">
          <Title className="list-group-item">
            {toTitleCase(data?.postData?.data?.title)}
          </Title>
          <FooterText className="list-group-item">{data?.postData?.data?.body}</FooterText>
        </ul>
      </div>
    </>
  );
};

export default PostCard;
