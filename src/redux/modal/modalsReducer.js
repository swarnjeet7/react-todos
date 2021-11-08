import * as constants from "../../constant/constants";

const generalReducer = (state = constants.INITIAL_GENERAL_STATE, action) => {
  switch (action.type) {
    case "SET_MODAL_STATE":
      return handleModalState(state, action.payload);

    case "SET_GENERAL_INITIAL_STATE":
      return handleSetGeneralInitialState(state);

    case "SET_MODAL_TODO":
      return handleSetModalTodo(state, action.payload);

    case "SHOW_TOAST":
      return handleShowToast(state, action.payload);

    default:
      return state;
  }
};

function handleShowToast(state, visibility) {
  return {
    state,
  };
}

function handleSetModalTodo(state, todo) {
  return {
    todo,
    isModalOpen: true,
    isEditMode: true,
  };
}

function handleSetGeneralInitialState(state) {
  return constants.INITIAL_GENERAL_STATE;
}

function handleModalState(state, visibility) {
  return {
    ...state,
    isModalOpen: visibility,
  };
}

export default generalReducer;
