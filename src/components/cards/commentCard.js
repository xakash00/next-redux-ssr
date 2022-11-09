import React from "react";
import { CommentDiv } from "../../stylesJs/header";

const CommentCard = ({item}) => {
  return (
    <>
      <CommentDiv
        className="card border-0 shadow text-dark bg-light mb-3 mt-5 m-auto"
      >
        <div className="card-header">
          {item.email}
          <span className="float-end">Comment Id - {item.id}</span>
        </div>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.body}</p>
        </div>
      </CommentDiv>
    </>
  );
};

export default CommentCard;
