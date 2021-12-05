import React from 'react';
import ReactDom from 'react-dom'




function Buttons(props) {
    return (
        <button  className={props.className} onClick={props.onChabge}>{props.caption}</button>
    );
}

export default Buttons;