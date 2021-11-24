import React from "react";
import AddItemComp from "./AddItemComp";


const Popup = ({handleClose, onAdd, onComplete}) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>x</span>
        <AddItemComp onAdd={onAdd} onComplete={onComplete} />
      </div>
    </div>
  );
};

export default Popup;