import React from "react";

export const ButtonRound = (props) => {
  const handleButtonClick = () => {
    props.setShowModal(true);
  };
  return (
    <button className="btn-round" onClick={handleButtonClick}>
      {props.children}
    </button>
  );
};
