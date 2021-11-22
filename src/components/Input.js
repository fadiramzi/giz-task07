const Input = (props)=> {
    return  <input type={props.type} placeholder={props.placeholder} className={props.class} value={props.value} onChange={props.handelChange} />
}

export default Input;