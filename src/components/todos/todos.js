import React from "react";
import { connect } from "react-redux";
import Todo from "../todo/todo";

function Todos({ todos }) {
  return Object.keys(todos).map((key, i) => (
    <Todo key={key} todo={todos[key]} index={i} />
  ));
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    modalsData: state.modalsData,
  };
};

export default connect(mapStateToProps, null)(Todos);
