const Button = (props) => {
    return (
        <button 
            type={props.type}
            name={props.name}
            onClick={props.onClick}
            className={props.styles}> 
            {props.name}
        </button>
    )
}

export default Button
