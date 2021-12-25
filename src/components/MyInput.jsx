import React from 'react';

function MyInput(props) {
    return (
        // <input type='text' onChange={props.onChangeFun} value={props.value} id={props.id} placeholder={props.ph}/>
        <input type='text' onChange={props.onChangeFun} value={props.value} id={props.id} placeholder={props.ph}/>
    );
}

export default MyInput;