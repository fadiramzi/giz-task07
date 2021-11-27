import { TextField } from "@mui/material";

const Input = (props)=> {
    return  <TextField  placeholder={props.placeholder} label={props.lablevalue} value={props.value} onChange={props.handelChange} />
}


export default Input;