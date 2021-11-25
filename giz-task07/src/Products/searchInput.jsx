import React from 'react'
 export default function SearchInput(props) {

    const handleChange = event => {
        props.onchange(event.target.value);
    }

    return (
      
        
        <input type="search" placeholder={props.placeholder}   className="searchIn"
        onChange={ handleChange }  />
        
    )
}
