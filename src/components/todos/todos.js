import React from "react";
import Todo from "../todo/todo";

function Todos({ todos, onSetTodos, handleEditTask, setTotal, total }) {
  const handleTodoChange = (todo) => {
    todos[todo.id] = todo;
    onSetTodos({ ...todos });
  };

  const handleDeleteTodo = (id) => {
    delete todos[id];
    setTotal(total - 1);
    onSetTodos({ ...todos });
  };

  return Object.keys(todos).map((key, i) => (
    <Todo
      key={key}
      todo={todos[key]}
      onUpdateTodo={handleTodoChange}
      handleEditTask={handleEditTask}
      handleDeleteTodo={handleDeleteTodo}
    />
  ));
}

export default Todos;
