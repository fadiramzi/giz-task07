import React from 'react';

function Input(props) {
  return (
    <div className="input">
      <input type='text' placeholder={props.placeholder} />
    </div>
  );
}

export default Input;