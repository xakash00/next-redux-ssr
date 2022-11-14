import React from "react";
import { useSelector } from "react-redux";
import Meta from "../MetaHead";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CommentCard from "../cards/commentCard";
import PostCard from "../cards/postCard";
import { useRouter } from "next/router";
import { toTitleCase } from "../helper";
import { CiCircleChevLeft } from "react-icons/ci";
const SinglePost = () => {
  const data = useSelector((store) => store.singlePostReducer);
  const commentsData = useSelector((store) => store.commentsReducer);
  const router = useRouter();
  console.log(data);

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
    <SkeletonTheme baseColor="#ccc" highlightColor="#fff">
      <div className="d-flex justify-content-center">
        <Skeleton height={"18rem"} width={"18rem"} count={1} />
      </div>
    </SkeletonTheme>
  ) : (
    <>
      <Meta
        title={toTitleCase(data?.postData?.title)}
        description={data?.postData?.body}
        keywords={data?.postData?.body.split(" ")}
      />
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
              <SkeletonTheme key={index} baseColor="#ccc" highlightColor="#fff">
                <div className="d-flex justify-content-center mt-5">
                  <Skeleton height={"10rem"} width={"50rem"} count={1} />
                </div>
              </SkeletonTheme>
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
