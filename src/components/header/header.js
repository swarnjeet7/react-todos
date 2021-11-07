import React from "react";
import DateTime from "../dateTime/dateTime";
import ButtonRound from "../buttons/buttons";
import { connect } from "react-redux";

function Header(props) {
  const totalTodos = Object.keys(props.todos).length;
  return (
    <header className="header">
      <div className="flex justify-between">
        <DateTime />
        <div className="total-task">
          <strong>{totalTodos}</strong> Tasks
        </div>
        <ButtonRound>+</ButtonRound>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, null)(Header);
