import React from "react";

const Toast = (props) => {
  return (
    <div className="toast">
      <div>Task has been deleted.</div>
      <a href="#toast">UNDO</a>
    </div>
  );
};

export default Toast;
