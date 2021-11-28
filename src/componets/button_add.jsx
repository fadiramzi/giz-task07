import React from 'react'
import './Butt0nStyle.css'

function Button_add (props){
    return (
        <button className="button-test" onClick={props.onClickFunction}>{props.content}</button>
    )
}

export default Button_add
