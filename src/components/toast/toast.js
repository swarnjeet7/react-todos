import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../redux/toast/toastsActions";
import { editTodo } from "../../redux/todos/todosActions";

const Toast = (props) => {
  const todo = useSelector((state) => state.toastsData.todo);
  const index = useSelector((state) => state.toastsData.index);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(showToast(false));
    }, props.delay);

    return () => {
      clearTimeout(timer);
    };
  }, [props.delay, dispatch]);

  const handleUndoButton = () => {
    dispatch(editTodo(todo, index));
    dispatch(showToast(false));
  };

  return (
    <div className="toast">
      <span className="toast-text">Task has been deleted.</span>
      <button onClick={handleUndoButton} className="toast-link">
        UNDO
      </button>
    </div>
  );
};

export default Toast;
