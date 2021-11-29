import React from 'react';

function Button(props) {
  return (
    <button className={props.class} type={props.type} >{props.label}</button>
  );
}

export default Button;