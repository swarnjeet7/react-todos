import React, { useState } from "react";

function AddTodo(props) {
  const [todo, setTodo] = useState({
    text: "",
    date: "",
    time: "",
    isComplete: false,
  });
  const handleFormSubmit = (event) => {
    const id = props.total + 1;
    event.preventDefault();
    props.onSetTodos({
      ...props.todos,
      [id]: {
        id,
        ...todo,
      },
    });
    props.setTotal(props.total + 1);
    props.onClickCloseBtn(false);
    setTodo({
      todo: "",
      date: "",
      time: "",
      isComplete: false,
    });
  };
  const handleInputChange = (event) => {
    const { target } = event;
    let obj = {
      [target.id]: target.value,
    };
    if (target.type === "checkbox") {
      obj = {
        [target.id]: target.checked,
      };
    }
    setTodo({
      ...todo,
      ...obj,
    });
  };
  return (
    <div className="modal">
      <form className="form" onSubmit={handleFormSubmit}>
        <span
          className="btn-close"
          onClick={() => props.onClickCloseBtn(false)}
        >
          &times;
        </span>
        <h2 className="title">Add you todo</h2>
        <div className="form-group">
          <label htmlFor="text">
            Type your todo <span className="required">*</span>
          </label>
          <input
            id="text"
            type="text"
            value={todo.text}
            onChange={handleInputChange}
            placeholder="Type your todo's description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">
            Add date <span className="required">*</span>
          </label>
          <input
            id="date"
            type="date"
            value={todo.date}
            onChange={handleInputChange}
            placeholder="Type your todo's description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">
            Add time <span className="required">*</span>
          </label>
          <input
            id="time"
            type="time"
            value={todo.time}
            onChange={handleInputChange}
            placeholder="Type your todo's description"
          />
        </div>
        <div className="form-group">
          <input
            id="isComplete"
            type="checkbox"
            value={todo.isComplete}
            onChange={handleInputChange}
          />
          <label htmlFor="isComplete" className="inline-block">
            Is task Completed
          </label>
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
