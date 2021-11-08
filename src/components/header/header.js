import React from "react";
import { connect } from "react-redux";
import DateTime from "../dateTime/dateTime";
import ButtonRound from "../buttons/buttonRound";

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
