import React from "react";

function Buttons(props) {
  return (
    <button onClick={props.onClick}>
      {props.title}
    </button>
  );
}

export default Buttons;