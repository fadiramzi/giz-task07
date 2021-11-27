import React from 'react'

function AddNew(props) {
    return (
        <button onClick={props.handelClick}>{props.value}</button>
    )
}

export default AddNew;
