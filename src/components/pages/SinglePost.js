import React from "react";
import { useSelector } from "react-redux";
import Meta from "../MetaHead";
import "react-loading-skeleton/dist/skeleton.css";
import CommentCard from "../cards/commentCard";
import PostCard from "../cards/postCard";
import { useRouter } from "next/router";
import { toTitleCase } from "../helper";
import { CiCircleChevLeft } from "react-icons/ci";
import Head from "next/head";
const SinglePost = ({ image }) => {
  const data = useSelector((store) => store.singlePostReducer);
  const commentsData = useSelector((store) => store.commentsReducer);
  const router = useRouter();

  return data.postData === null ? (
    <>
      <button
        onClick={() => {
          router.back();
        }}
        className="btn d-flex align-items-center m-4"
      >
        <CiCircleChevLeft size="1.4rem" /> <div className="ms-2">Go Back </div>
      </button>
      <h3 className="text-center">Post Not Found</h3>
    </>
  ) : data.loading === true ? (
    <p>Loading...</p>
  ) : (
    <>
    <Head>
        <title>{data?.postData?.title}</title>
        <link
          rel="icon"
          type="image/x-icon"
          href={image}
        ></link>
        <meta property="og:title" content={`Akash-${data?.postData?.title}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={data.image}
        />
        <meta
          property="og:description"
          name="description"
          content={data?.postData?.body}
        />
        <meta name="keywords" content={data?.postData?.body.split(" ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000"></meta>
      </Head>
      <div>
        <button
          onClick={() => {
            router.back();
          }}
          className="btn d-flex align-items-center m-4"
        >
          <CiCircleChevLeft size="1.4rem" />{" "}
          <div className="ms-2">Go Back </div>
        </button>
        <PostCard data={data} />
        <div>
          {commentsData.comments.map((item, index) => {
            return commentsData.loading === true ? (
              "loading..."
            ) : (
              <CommentCard item={item} key={item.id} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SinglePost;
