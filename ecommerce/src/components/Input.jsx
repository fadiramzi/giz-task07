import React from 'react';

const Input = props => {
    return (
        <div>
            <input
                type="text"
                className={props.class}
                onChange={props.onChange}
                placeholder={props.placeholder}
                value={props.value}
                />
        </div>
    );
};

export default Input;