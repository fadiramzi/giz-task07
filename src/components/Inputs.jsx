
import React from 'react'

const inputs = (props) => {
    return (
    
            <input onChangeCapture ={props.onChangee}className={props.className} type={props.type} placeholder={props.placeholder} onChange={props.onAdd} />

        
    )
}

export default inputs

