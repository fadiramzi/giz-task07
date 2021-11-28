import React from 'react'
import './InputStyle.css'

function InputSearch (props){
    return (
        <input 
        className="input-style"
        id={props.inputId}
        type={props.typeOf}
        placeholder={props.content}
        onChange={props.functionalty}
        min={props.minNumber}
        />
    )
}

// const styles = StyleSheet.create({})
export default InputSearch
