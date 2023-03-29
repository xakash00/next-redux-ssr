import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import {
  COMMENTS_LOADED,
  COMMENTS_LOADING,
  COMMENTS_LOADING_FAILED,
  FAILED,
  LOADED,
  LOADING,
  SINGLE_FAILED,
  SINGLE_LOADED,
  SINGLE_LOADING,
} from "../actions/returnTypes";
import {
  FETCH_COMMENTS,
  FETCH_DATA,
  FETCH_SINGLE_POST,
} from "../actions/types";
import * as placeholderApis from "../apis/placeholderApi";

function* loadDataSaga() {
  try {
    yield put({ type: LOADING });
    const res = yield call(placeholderApis.jsonApi);
    yield put({ type: LOADED, data: res.data });
  } catch (err) {
    console.log(err);
    yield put({ type: FAILED, data: "Something went wrong !" });
  }
}

function* fetchSinglePost(action) {
  try {
    yield put({ type: SINGLE_LOADING });
    const res = yield call(placeholderApis.singlePostApi, action.id);
    const meta = yield call(placeholderApis.metaImageApi);
    yield put({
      type: SINGLE_LOADED,
      id: action.id,
      data: { data: res.data, image: meta?.data?.file },
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: SINGLE_FAILED,
      id: action.id,
      data: "Something went wrong !",
    });
  }
}

export function* fetchCommentsWorker(action) {
  try {
    yield put({ type: COMMENTS_LOADING });
    const response = yield call(placeholderApis.commentApi, action.id);
    yield put({
      type: COMMENTS_LOADED,
      id: action.id,
      comments: response.data,
    });
  } catch (err) {
    yield put({
      type: COMMENTS_LOADING_FAILED,
      comments: "Something went wrong",
    });
    console.log(err);
  }
}
export function* watchFetchCommentsWorker() {
  yield takeLatest(FETCH_COMMENTS, fetchCommentsWorker);
}
export function* watchLoadDataSaga() {
  yield takeLatest(FETCH_DATA, loadDataSaga);
}
export function* watchFetchSinglePost() {
  yield takeLatest(FETCH_SINGLE_POST, fetchSinglePost);
}
