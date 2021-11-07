const INITIAL_STATE = {};

const todosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return handleAddTodo(state, action.payload);

    case "EDIT_TODO":
      return handleEditTodo(state, action.payload);

    default:
      return state;
  }
};

function handleEditTodo(state, todo) {
  console.log(state.todos, "state");
  return {
    ...state,
    [todo.id]: todo,
  };
}

function handleAddTodo(state, todo) {
  return {
    ...state.todos,
    ...todo,
  };
}

export default todosReducer;
