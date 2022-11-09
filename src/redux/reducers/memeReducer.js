import { HYDRATE } from "next-redux-wrapper";
import {
  MEME_LOADED,
  MEME_LOADING,
  MEME_LOADING_FAILED,
} from "../actions/returnTypes";

const initialState = {
  loading: true,
  success: false,
  error: false,
  data: null,
};

const memeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload.memeReducer,
      };
    case MEME_LOADING:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
        data: null,
        messsage: "",
      };
    case MEME_LOADED:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        data: action.data,
      };
    case MEME_LOADING_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        data: null,
      };
    default:
      return state;
  }
};

export default memeReducer;
