import React from 'react'
import './StyleInput.css'

//stateless component
export default function Inputs(props) {
    return (
        <form>
            <input className="input-style" type="text"  placeholder={props.ph} onChange={props.onChangeFun} value={props.value} />
        </form>
    )
}
