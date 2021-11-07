import { combineReducers } from "redux";

import todosReducer from "./todos/todosReducer";
import generalReducer from "./general/generalReducer";

export default combineReducers({
  todos: todosReducer,
  modalsData: generalReducer,
});
