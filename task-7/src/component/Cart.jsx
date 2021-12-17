import React from 'react';
import imgcart from './imgcart.jpg'
import '../style/cartstyle.css'

function Cart(props) {
    return (
        <div className='divcontiner center'>
            <img src={imgcart} alt="" width={200} />
            <p>Sneakers</p>
           <div className='divcontiner2'> 
            <span>{props.name_cart}</span>
            <span>{props.price_cart}$</span>
            </div>
            <button>add new</button>
        </div>
    );
}

export default Cart;