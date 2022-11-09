import React from "react";
import { END } from "redux-saga";
import HeaderLayout from "../src/components/Layouts/HeaderLayout";
import Meta from "../src/components/MetaHead";
import Page from "../src/components/pages/Home";
import { placeholderDataAction } from "../src/redux/actions/actions";
import { wrapper } from "../src/redux/store";

const Home = () => {
  return (
    <>
      <Meta
        title="Next-Redux - Server Side Rendering with next.js and redux"
        description="Dynamic Meta tags and Seo with Next js ssr JSON Placeholder Apis "
        keywords="nextjs, jsonplaceholder,dynamic meta tags ,ssr,dynamic seo"
      />
      <HeaderLayout>
        <Page />
      </HeaderLayout>
    </>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  console.log("inside getStaticProps.. store.dispatch");
  console.log(ctx, "aslkiub");
  if (!ctx.store.getState().placeholderData) {
    ctx.store.dispatch(placeholderDataAction());
    console.log("ending saga on server now...");
    ctx.store.dispatch(END);
  }
  await ctx.store.sagaTask.toPromise();
});

export default Home;
