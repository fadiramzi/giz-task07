import React from 'react'
import './InputStyle.css'

function InputSearch (props){
    return (
        <input className="input-style" id={props.inputId} type="text" placeholder={props.content} />
    )
}

// const styles = StyleSheet.create({})
export default InputSearch
