import { combineReducers } from "redux";

import user from "./user";
import videos from "./videos";
import categories from "./categories";

export default combineReducers({
  user,
  videos,
  categories
});
