import React from "react";
import { connect } from "react-redux";
import { setModalVisibility } from "../../redux/modal/modalsActions";

const ButtonRound = (props) => {
  const handleButtonClick = () => {
    props.setModalVisibility(true);
  };

  return (
    <button className="btn-round" onClick={handleButtonClick}>
      {props.children}
    </button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setModalVisibility: (visibility) =>
      dispatch(setModalVisibility(visibility)),
  };
};

export default connect(null, mapDispatchToProps)(ButtonRound);
