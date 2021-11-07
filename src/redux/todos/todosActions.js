export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export const editTodo = (todo) => {
  return {
    type: "EDIT_TODO",
    payload: todo,
  };
};
