export const setModalVisibility = (visibility) => {
  return {
    type: "SET_MODAL_STATE",
    payload: visibility,
  };
};

export const setModalTodo = (todo) => {
  return {
    type: "SET_MODAL_TODO",
    payload: todo,
  };
};

export const setGeneralInitialState = () => {
  return {
    type: "SET_GENERAL_INITIAL_STATE",
  };
};
