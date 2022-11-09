import { put, call, takeLatest } from "redux-saga/effects";
import {
  MEME_LOADED,
  MEME_LOADING,
  MEME_LOADING_FAILED,
} from "../actions/returnTypes";
import { FETCH_MEME } from "../actions/types";
import { memeApi } from "../apis/memeApi";

export function* fetchMemeWorker(action) {
  try {
    yield put({ type: MEME_LOADING });
    const response = yield call(memeApi);
    console.log(response);
    if (response.status == 200 && response.statusText == "OK") {
      yield put({ type: MEME_LOADED, data: response.data });
    } else {
      yield put({ type: MEME_LOADING_FAILED, data: null });
    }
  } catch (err) {
    console.log(err);
    yield put({ type: MEME_LOADING_FAILED, data: null });
  }
}

export function* watchFetchMemeWorker() {
  yield takeLatest(FETCH_MEME, fetchMemeWorker);
}
