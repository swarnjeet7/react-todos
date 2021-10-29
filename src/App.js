import React, { useState } from "react";
import Header from "./components/header/header";
import Todos from "./components/todos/todos";
import AddTodo from "./components/addTodo/addTodo";
import "./App.css";

function App() {
  const [total, setTotal] = useState(0);
  const [todos, setTodos] = useState({});
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="TodoApp">
      <Header totalTodos={total} setShowModal={setShowModal} />
      <main className="body">
        <Todos todos={todos} onSetTodos={setTodos} />
      </main>
      {showModal && (
        <AddTodo
          todos={todos}
          onClickCloseBtn={setShowModal}
          onSetTodos={setTodos}
          total={total}
          setTotal={setTotal}
        />
      )}
    </div>
  );
}

export default App;
