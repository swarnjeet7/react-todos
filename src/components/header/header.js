import React from "react";
import DateTime from "../dateTime/dateTime";
import { ButtonRound } from "../buttons/buttons";

function Header(props) {
  return (
    <header className="header">
      <div className="flex justify-between">
        <DateTime />
        <div className="total-task">
          <strong>{props.totalTodos}</strong> Tasks
        </div>
        <ButtonRound setShowModal={props.setShowModal}>+</ButtonRound>
      </div>
    </header>
  );
}

export default Header;
