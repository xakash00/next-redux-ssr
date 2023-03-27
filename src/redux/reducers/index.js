import { combineReducers } from "redux";
import placeholderReducer from "./placeholderReducer";
import singlePostReducer from "./singlePostReducer";
import memeReducer from "./memeReducer";
import commentsReducer from "./commentsReducer";
import toggleReducer from "./toggleReducer";
const rootReducer = combineReducers({
  placeholderReducer,
  singlePostReducer,
  memeReducer,
  commentsReducer,
  toggleReducer
});

export default rootReducer;
