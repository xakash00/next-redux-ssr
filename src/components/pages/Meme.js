import React, { useRef } from "react";
import Image from "next/image";
const Meme = ({ data, compRef }) => {
  console.log(data.data.postLink);
  return (
    <div>
      <a
        href={data.data.postLink}
        target="_blank"
        className="card border-0 shadow m-auto text-decoration-none"
        style={{ width: "18rem" }}
      >
        <img
          ref={compRef}
          src={data.data.url}
          className="card-img-top"
          alt="..."
          layout="fill"
        />
        <div className="card-body">
          <p className="card-text">{data.data.title}</p>
        </div>
      </a>
    </div>
  );
};

export default Meme;
