import { combineReducers } from "redux";

import todosReducer from "./todos/todosReducer";
import modalReducer from "./modal/modalsReducer";
import toastsReducer from "./toast/toastsReducer";

export default combineReducers({
  todos: todosReducer,
  modalsData: modalReducer,
  toastsData: toastsReducer,
});
