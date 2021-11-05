import React, { useState } from "react";
import Header from "./components/header/header";
import Todos from "./components/todos/todos";
import AddTodo from "./components/addTodo/addTodo";
import "./App.css";

function App() {
  const [total, setTotal] = useState(0);
  const [todos, setTodos] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editTodo, setEditTodo] = useState({
    text: "",
    date: "",
    time: "",
    isComplete: false,
  });

  const handleEditTask = (id) => {
    setEditTodo(todos[id]);
    setShowModal(true);
    setIsEditMode(true);
  };

  return (
    <div className="TodoApp">
      <Header totalTodos={total} setShowModal={setShowModal} />
      <main className="body">
        <Todos
          todos={todos}
          onSetTodos={setTodos}
          handleEditTask={handleEditTask}
        />
      </main>
      {showModal && (
        <AddTodo
          todo={editTodo}
          todos={todos}
          onClickCloseBtn={setShowModal}
          onSetTodos={setTodos}
          total={total}
          setTotal={setTotal}
          isEditMode={isEditMode}
        />
      )}
    </div>
  );
}

export default App;
