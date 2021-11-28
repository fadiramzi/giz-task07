import React from "react";

function Inputs(props) {
  return (
    <input
      onChange={props.onChange}
      name={props.name}
      value={props.value}
      placeholder={props.ph}
    ></input>
  );
}


export default Inputs;