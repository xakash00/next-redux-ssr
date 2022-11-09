import {
  FETCH_COMMENTS,
  FETCH_DATA,
  FETCH_MEME,
  FETCH_SINGLE_POST,
} from "./types";

export const placeholderDataAction = () => {
  return {
    type: FETCH_DATA,
  };
};

export const singlePostAction = (id) => {
  return {
    type: FETCH_SINGLE_POST,
    id,
  };
};

export const fetchMemeAction = () => {
  return {
    type: FETCH_MEME,
  };
};

export const fetchCommentsAction = (id) => {
  return {
    type: FETCH_COMMENTS,
    id,
  };
};

