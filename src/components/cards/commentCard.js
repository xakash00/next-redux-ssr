import React from "react";
import { CommentDiv } from "../../stylesJs/header";
import { CommentId, FooterText, Title } from "../../stylesJs/home";

const CommentCard = ({item}) => {
  return (
    <>
      <CommentDiv
        className="card border-0 shadow text-dark bg-light mb-3 mt-5 m-auto"
      >
        <div className="card-header">
          <CommentId>{item.email}</CommentId>
        </div>
        <div className="card-body">
          <Title className="card-title">{item.name}</Title>
          <FooterText className="card-text">{item.body}</FooterText>
        </div>
      </CommentDiv>
    </>
  );
};

export default CommentCard;
