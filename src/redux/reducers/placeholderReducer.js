import { HYDRATE } from "next-redux-wrapper";
import { FAILED, LOADED, LOADING } from "../actions/returnTypes";

const initialState = {
  loading: true,
  success: false,
  error: false,
  placeholderData: null,
};

function placeholderReducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload.placeholderReducer };
    }
    case LOADING:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
        placeholderData: null,
      };

    case LOADED:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        placeholderData: action.data,
      };
    case FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        placeholderData: null,
      };

    default:
      return state;
  }
}

export default placeholderReducer;
