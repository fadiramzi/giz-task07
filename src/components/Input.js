import React from 'react'

const Input = (props) => {
    return (
        <div className={'inputDiv'}>
          {props.label ? <label htmlFor={props.inputName}>
            {props.label}
          </label> : ''}

          <input type={props.type}
                 name={props.inputName}
                 placeholder={props.disc}
                 className={props.styles}
                 onChange={props.onChange}
                 value={props.text}
                 id={props.id} />
        </div>
    )
}

export default Input
