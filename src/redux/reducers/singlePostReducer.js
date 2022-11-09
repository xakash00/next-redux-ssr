import { HYDRATE } from "next-redux-wrapper";
import {
  SINGLE_FAILED,
  SINGLE_LOADED,
  SINGLE_LOADING,
} from "../actions/returnTypes";

const initialState = {
  loading: true,
  success: false,
  error: false,
  id: null,
  postData: null,
};

function singlePostReducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload.singlePostReducer };
    }
    case SINGLE_LOADING:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
        id: null,
        postData: null,
      };

    case SINGLE_LOADED:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        id: action.id,
        postData: action.data,
      };
    case SINGLE_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        id: null,
        postData: null,
      };

    default:
      return state;
  }
}

export default singlePostReducer;
