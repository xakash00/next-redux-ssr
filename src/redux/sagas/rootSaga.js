import {
  watchFetchCommentsWorker,
  watchFetchSinglePost,
  watchLoadDataSaga,
} from "./saga";
import { all } from "redux-saga/effects";
import { watchFetchMemeWorker } from "./memeSaga";
function* rootSaga() {
  yield all([
    watchLoadDataSaga(),
    watchFetchSinglePost(),
    watchFetchMemeWorker(),
    watchFetchCommentsWorker(),
  ]);
}

export default rootSaga;
