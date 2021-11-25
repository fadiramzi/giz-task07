import './Input.css'

function Input(props) {
    return (
        <input className="Input" type="text" placeholder={props.placeholder} value={props.value}/>
    )
}

export default Input
