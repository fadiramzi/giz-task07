const Button = (props)=> {
    return <button className={props.class} onClick={props.handelClick} >{props.value}</button>
}
 
export default Button;