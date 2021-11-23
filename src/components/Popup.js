import React from "react";
import AddItemComp from "./AddItemComp";


const Popup = ({handleClose ,onAdd}) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>x</span>
        <AddItemComp onAdd={onAdd} />
      </div>
    </div>
  );
};

export default Popup;