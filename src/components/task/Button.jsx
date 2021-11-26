import React from 'react'
import './page.css'
const Button = ({bgColor, txtColor, caption, clickFun}) => {
    return (
        <button onClick={clickFun} style={{backgroundColor: bgColor, color:txtColor}}  className={"btn"}>
            {caption}
        </button>
    )
}

export default Button;
