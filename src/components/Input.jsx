import React from "react";

function Input(props) {
  return (
    <input name={props.name} type="text" placeholder={props.placeholder} />
  );
}

export default Input;
