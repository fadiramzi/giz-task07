import React from 'react';
import './singleCard.css'
import pic from './product2.jpg'



const Cards = () => {

    const n = 16

    return (<div class='cards'>{[...Array(n)].map((e, i) => <span key={i} class='cards'><div class='card '>
        <img src={pic} class='pic' />
        <div class="container">
            <div class='sneakers' >
                <h5>Sneakers</h5>
                <div class='cardInfo'>
                    <h4>Air Max 95 U</h4>
                    <h4>$ 99</h4>
                </div>
            </div>
            <button class='button'>
                Add to Card
</button>
        </div>



    </div></span>)}</div>)




};

export default Cards;