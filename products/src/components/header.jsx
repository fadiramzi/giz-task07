import React from "react";
import './header.css';

class Header extends React.Component{
    constructor(props)
    {
        super()
        this.state={
            name:'Ahmed1'}
    }
render()
{
return <div class="container"><input type="text" class="input_search" placeholder=" Search Products"/>
<button class="btn1">Name </button>
<button class="btn1">Price </button>
<button class="btn2">Add new </button>
</div>}
}
export default Header