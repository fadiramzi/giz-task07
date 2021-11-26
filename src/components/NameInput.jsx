import React from 'react'

export default function NameInput(props) {
    return <input placeholder='Name' type="text" value={props.value} onChange={props.onChange} />

}
