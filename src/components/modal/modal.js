import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, editTodo } from "../../redux/todos/todosActions";
import { setGeneralInitialState } from "../../redux/general/generalActions";
import * as constants from "../../constant/constants";

function Modal(props) {
  const [todo, setTodo] = useState(props.todo);

  const makeId = () => {
    let id = new Date().toLocaleString().replace(/[/|, |:]/g, "_");
    return id;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const id = makeId();
    props.addTodo({
      ...props.todos,
      [id]: {
        id,
        ...todo,
      },
    });
    setTodo(constants.DEFAULT_TODO);
    handleCloseButton();
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
  const handleEditButton = () => {
    props.editTodo(todo);
    setTodo(constants.DEFAULT_TODO);
    handleCloseButton();
  };

  const handleCloseButton = () => {
    props.handleCloseModal();
  };

  return (
    <div className="modal">
      <form className="form" onSubmit={handleFormSubmit}>
        <span className="btn-close" onClick={handleCloseButton}>
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
        {props.isEditMode ? (
          <button type="button" onClick={handleEditButton}>
            Edit Task
          </button>
        ) : (
          <button type="submit">Add Todo</button>
        )}
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    todo: state.modalsData.todo,
    isEditMode: state.modalsData.isEditMode,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
  editTodo: (todo) => dispatch(editTodo(todo)),
  handleCloseModal: () => dispatch(setGeneralInitialState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
