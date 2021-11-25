import React from 'react'

export default function addInput(props) {

     
    const handleChange = event => {
        props.onchange(event.target.value);
    }

    return (   
        < input 
        type="text" 
        placeholder={ props.placeholder } 
        className={ props.className } 
        onChange={ handleChange } />)
        }