import React from 'react'

export default function Button(props) {
    return (
    <button onClick={props.handelClick}>{props.value} </button>
    )
}