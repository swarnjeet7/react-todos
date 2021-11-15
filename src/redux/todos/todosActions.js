export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export const editTodo = (todo, index) => {
  console.log(index, todo);
  return {
    type: "EDIT_TODO",
    payload: { todo, index },
  };
};

export const deleteTodo = (todo) => {
  return {
    type: "DELETE_TODO",
    payload: todo,
  };
};
