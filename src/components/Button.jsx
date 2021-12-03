import React from 'react'
import './Home.css'

export default function Button(props) {
    return (
    <button onClick={props.handelClick}>{props.value} </button>
    )
}