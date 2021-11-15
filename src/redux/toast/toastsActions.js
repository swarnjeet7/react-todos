export const showToast = (showToast, todo, index) => {
  return {
    type: "SHOW_TOAST",
    payload: {
      showToast,
      todo,
      index,
    },
  };
};
