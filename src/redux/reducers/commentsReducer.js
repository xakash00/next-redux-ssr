import { HYDRATE } from "next-redux-wrapper";
import {
  COMMENTS_LOADED,
  COMMENTS_LOADING,
  COMMENTS_LOADING_FAILED,
} from "../actions/returnTypes";

const initialState = {
  loading: true,
  success: false,
  error: false,
  id: null,
  comments: null,
};

function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload.commentsReducer };
    }
    case COMMENTS_LOADING:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
        id: null,
        comments: null,
      };

    case COMMENTS_LOADED:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        id: action.id,
        comments: action.comments,
      };
    case COMMENTS_LOADING_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        id: null,
        comments: null,
      };

    default:
      return state;
  }
}

export default commentsReducer;
