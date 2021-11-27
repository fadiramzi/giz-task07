import React from 'react'
import './Butt0nStyle.css'

// const testFunction = () => {
//     console.log("It Worked")
// }

function Button_add (props){
    return (
        <button className="button-test" onClick={props.onClickFunction}>{props.content}</button>
    )
}

// const styles = StyleSheet.create({})
export default Button_add
