import React from 'react';

const Input = props => {
    return (
            <input
                type="text"
                className={props.class}
                onChange={props.onChange}
                placeholder={props.placeholder}
                value={props.value}
                />
    );
};

export default Input;