import React from "react"
import Product from './Product';
export default function ViewProduct({carts,searchProduct}){

    if(searchProduct.length > 0){
        carts = carts.filter((val)=>{
           console.log(carts)
            return val.text.match(searchProduct)
        });
      }
      
    return(
    
        <div className="flex">
         
           {carts.map(cart=>(
               <Product  id={cart.id} name={cart.text} price={cart.price} />
           ))}
           
        </div>
        
    )
}