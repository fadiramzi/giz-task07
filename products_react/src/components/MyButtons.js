import * as React from 'react';

import { Button } from "@mui/material";

const MyButtons = (props)=> {
    return <Button size="small" variant="contained" onClick={props.handelClick}>{props.value}</Button>
}
 
export default MyButtons;