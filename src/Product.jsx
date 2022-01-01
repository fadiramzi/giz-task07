import './Product.css';
import React from 'react';
import shoose from './shoose.png';


const Product = ({Prodects}) =>{

    console.log(Prodects)
    return <body>

    <section id="add">
        <div class="card">
            {Prodects.map((prd)=>
            <div>
                <img src={shoose}></img>
                <p>{prd.type}</p>
             <div class="text">
                <p>{prd.name}</p>
                <p>{prd.price}</p>
            </div>
            <button className="btn">Add to Cart</button>
            </div>)}
        </div>
    </section>
</body>

}


export default Product;