import React from "react";

function Todo(props) {
  const { text, time, isComplete, id } = props.todo;

  const handleInputChange = () => {
    props.onUpdateTodo({
      ...props.todo,
      isComplete: !isComplete,
    });
  };

  const handleEditButton = () => {
    props.handleEditTask(id);
  };

  return (
    <div className="todo flex align-center">
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={isComplete}
        onChange={handleInputChange}
      />
      <span className="todo-text" onDoubleClick={handleEditButton}>
        {text}
      </span>
      <span className="todo-time ml-auto">{time}</span>
    </div>
  );
}

export default Todo;
