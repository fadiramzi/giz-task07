import React from "react"
import img from '../images/shoose.png';
export default function Product({name,price}){
  
    return(
        <div className="card">
         <img src={img}/>
         <span>Sneakers</span>
         <div className="text">
           <p>{name}</p>
           <span>$ {price}</span>
         </div>
         <button>Add To Cart</button>
       </div>
       
    )
}