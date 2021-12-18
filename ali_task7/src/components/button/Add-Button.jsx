import React from 'react'
import './StyleButton.css'

//stateless component
function AddButton(props) {
    return (
        <button className="btn" onClick={props.onClickFun}>{props.caption}</button>
    )
}

export default AddButton