import React from "react";

export default function Inputs(props) {
  return (
    <input
      onChange={props.onChange}
      name={props.name}
      value={props.value}
      placeholder={props.ph}
      className={props.ClassName}
    ></input>
  );
}
