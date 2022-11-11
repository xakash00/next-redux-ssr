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

const Post = () => {
  return (
    <>
      <HeaderLayout>
        {/* <SinglePost /> */}

        <h1>Post</h1>
      </HeaderLayout>
    </>
  );
};

// export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
//   console.log("inside getStaticProps.. store.dispatch");
//   console.log(ctx, "aslkiub");
//   if (!ctx.store.getState().placeholderData) {
//     ctx.store.dispatch(singlePostAction(ctx.query.id));
//     ctx.store.dispatch(fetchCommentsAction(ctx.query.id));
//     console.log("ending saga on server now...");
//     ctx.store.dispatch(END);
//   }
//   await ctx.store.sagaTask.toPromise();
// });

export default Post;