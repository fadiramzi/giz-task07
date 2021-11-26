import React from "react";

export default function Buttons(props) {
  return (
    <button onClick={props.onClick} className={props.ClassName}>
      {props.title}
    </button>
  );
}
