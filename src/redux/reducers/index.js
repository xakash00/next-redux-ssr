import { combineReducers } from "redux";
import placeholderReducer from "./placeholderReducer";
import singlePostReducer from "./singlePostReducer";
import memeReducer from "./memeReducer";
import commentsReducer from "./commentsReducer";
import themeReducer from "./themeReducer";
const rootReducer = combineReducers({
  placeholderReducer,
  singlePostReducer,
  memeReducer,
  commentsReducer,
});

export default rootReducer;
