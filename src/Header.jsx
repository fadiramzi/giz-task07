import React from 'react'

const Header = ({AddProdects})=>{
    return (
        <div class="navbar">
        <div>
            <input class="search" type="text" placeholder="Search Products"/>
        </div>
        <div class="btn">
            <button>Name</button>
            <button>Price</button>
            <button class="active" onClick={AddProdects}>Add New</button>
        </div>
    </div>
    )
}

export default Header;