import { combineReducers } from "redux";

import todosReducer from "./todos/todosReducer";
import modalReducer from "./modal/modalsReducer";

export default combineReducers({
  todos: todosReducer,
  modalsData: modalReducer,
});
