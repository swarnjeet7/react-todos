import React from "react";
import Hammer from "react-hammerjs";
import { connect } from "react-redux";
import { editTodo } from "../../redux/todos/todosActions";
import { setModalTodo } from "../../redux/general/generalActions";

function Todo(props) {
  const { text, time, isComplete, id } = props.todo;

  const handleInputChange = () => {
    props.editTodo({
      ...props.todo,
      isComplete: !isComplete,
    });
  };

  const handleEdit = () => {
    props.handleEditTodo(props.todo);
  };

  const handleDeleteTodo = () => {
    props.handleDeleteTodo(id);
  };

  return (
    <Hammer onSwipe={handleDeleteTodo} direction="DIRECTION_HORIZONTAL">
      <div className="todo flex align-center">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={isComplete}
          onChange={handleInputChange}
        />
        <span className="todo-text" onDoubleClick={handleEdit}>
          {text}
        </span>
        <span className="todo-time ml-auto">{time}</span>
      </div>
    </Hammer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  editTodo: (todo) => dispatch(editTodo(todo)),
  handleEditTodo: (todo) => dispatch(setModalTodo(todo)),
});

export default connect(null, mapDispatchToProps)(Todo);
