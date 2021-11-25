import './Button.css'

function Button(props) {
    return (
        <input className="Button" type="button" value={props.value} onClick={props.onClick} />
    )
}

export default Button
