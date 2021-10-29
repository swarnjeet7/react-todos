import React from "react";

function Todo(props) {
  const { text, time, isComplete } = props.todo;
  const handleInputChange = () => {
    props.onUpdateTodo({
      ...props.todo,
      isComplete: !isComplete,
    });
  };

  return (
    <div className="todo flex align-center">
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={isComplete}
        onChange={handleInputChange}
      />
      <span className="todo-text">{text}</span>
      <span className="todo-time ml-auto">{time}</span>
    </div>
  );
}

export default Todo;
