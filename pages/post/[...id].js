import { useDispatch, useSelector } from "react-redux";
import { END } from "redux-saga";
import { wrapper } from "../../src/redux/store";
import { useRouter } from "next/router";
import {
  fetchCommentsAction,
  singlePostAction,
} from "../../src/redux/actions/actions";
import HeaderLayout from "../../src/components/Layouts/HeaderLayout";
import SinglePost from "../../src/components/pages/SinglePost";
import PrivateRoute from "../../src/components/authCheck/PrivateRoute";
import Head from "next/head";

const Post = (props) => {
  return (
    <>
      <HeaderLayout>
        <SinglePost image={props.data} />
      </HeaderLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  if (!ctx.store.getState().placeholderData) {
    ctx.store.dispatch(singlePostAction(ctx.query.id));
    ctx.store.dispatch(fetchCommentsAction(ctx.query.id));
    ctx.store.dispatch(END);
  }
  // if (!ctx.req.cookies.isLogin) {
  //   return {
  //     redirect: {
  //       destination: `/signup?next=post/${ctx.query.id}`,
  //     },
  //   };
  // }
  await ctx.store.sagaTask.toPromise();
  const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { data:data.message }, // will be passed to the page component as props
  }
});

export default Post;
