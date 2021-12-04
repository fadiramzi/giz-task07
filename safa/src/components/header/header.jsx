import React from 'react';
import './header.css'

const Header = props => {
    return (
        <div class='header'>
            <div class='header-left'>
                <input type='text' class='search' placeholder='Search Product' />
            </div>
            <div class='header-right'>
                <button class='nameButton'>
                    Name
                </button>
                <button class='priceButton'>Price</button>
                <button class='addButton'>Add New</button>


            </div>


        </div>
    )

};

export default Header;