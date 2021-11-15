export const editTodo = (state, todo, index = null) => {
  const keys = Object.keys(state);
  if (index > -1) {
    const result = {};
    let isTodoNotAdded = true;
    for (let i = 0, len = keys.length; i < len; i++) {
      const key = keys[i];
      if (index === i) {
        isTodoNotAdded = false;
        result[todo.id] = todo;
      }
      result[key] = state[key];
    }
    if (isTodoNotAdded) {
      result[todo.id] = todo;
    }
    return result;
  }

  return {
    ...state,
    [todo.id]: todo,
  };
};
