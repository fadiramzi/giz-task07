import React from 'react'
import './css/mybutton.css'

export default function MyButton(props) {
    return (
        <button className="my-button" onClick={props.onClickFun}>{props.caption} </button>

    )
}
