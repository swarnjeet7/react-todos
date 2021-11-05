import React from "react";
import Todo from "../todo/todo";

function Todos({ todos, onSetTodos, handleEditTask }) {
  const handleTodoChange = (todo) => {
    todos[todo.id] = todo;
    onSetTodos({ ...todos });
  };

  return Object.keys(todos).map((key, i) => (
    <Todo
      key={key}
      todo={todos[key]}
      onUpdateTodo={handleTodoChange}
      handleEditTask={handleEditTask}
    />
  ));
}

export default Todos;
