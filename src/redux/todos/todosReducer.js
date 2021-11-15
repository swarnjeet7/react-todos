import * as utils from "../../util/util";
const INITIAL_STATE = {};

const todosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return handleAddTodo(state, action.payload);

    case "EDIT_TODO":
      return handleEditTodo(state, action.payload);

    case "DELETE_TODO":
      return handleDeleteTodo(state, action.payload);

    default:
      return state;
  }
};

function handleDeleteTodo(state, id) {
  delete state[id];
  return {
    ...state,
  };
}

function handleEditTodo(state, payload) {
  const { todo, index = null } = payload;
  const newState = utils.editTodo(state, todo, index);
  return newState;
}

function handleAddTodo(state, todo) {
  return {
    ...state.todos,
    ...todo,
  };
}

export default todosReducer;
