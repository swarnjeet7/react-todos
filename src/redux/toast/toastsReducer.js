const INITIAL_STATE = {
  showToast: false,
  todo: {},
  index: null,
};

const toastsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SHOW_TOAST":
      return handleShowToast(state, action.payload);

    default:
      return state;
  }
};

function handleShowToast(state, payload) {
  const { showToast, todo = {}, index = null } = payload;
  return {
    showToast,
    todo,
    index,
  };
}

export default toastsReducer;
