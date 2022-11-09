import React, { useEffect, useRef, useState } from "react";
import Meme from "../src/components/pages/Meme";
import HeaderLayout from "../src/components/Layouts/HeaderLayout";
import { wrapper } from "../src/redux/store";
import { fetchMemeAction } from "../src/redux/actions/actions";
import { END } from "redux-saga";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../src/redux/actions/actions";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MemePage = () => {
  const data = useSelector((store) => store.memeReducer);
  const [next, setNext] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.fetchMemeAction());
  }, [next]);
  return (
    <HeaderLayout>
      {data.loading === true ? (
        <SkeletonTheme baseColor="#ccc" highlightColor="#fff">
          <div className="d-flex justify-content-center">
            <Skeleton height={"18rem"} width={"18rem"} count={1} />
          </div>
        </SkeletonTheme>
      ) : (
        <div className="text-center">
          <Meme data={data} />
          <div>
            <button
              onClick={() => setNext((prev) => prev + 1)}
              className="btn mt-4"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </HeaderLayout>
  );
};
// export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
//   console.log("inside getStaticProps.. store.dispatch");
//   console.log(ctx, "aslkiub");
//   if (!ctx.store.getState().placeholderData) {
//     ctx.store.dispatch(fetchMemeAction());
//     console.log("ending saga on server now...");
//     ctx.store.dispatch(END);
//   }
//   await ctx.store.sagaTask.toPromise();
// });

export default MemePage;
