import React from "react";
import './card.css';
import img from './shoes.png';

class Cards extends React.Component{
    constructor(props)
    {
        super()
        this.state={
            name:'shop',
            points:[
                {
                    price:99,
                    img:"./src/Components/shoes.png"
                },
                {
                    price:77,
                    img:'./shoes.png'
                },
                {
                    price:88,
                    img:'./shoes.png'
                },
                {
                    price:131,
                    img:'./shoes.png'
                },
                {
                    price:143,
                    img:'./shoes.png'
                },
                {
                    price:111,
                    img:'./shoes.png'
                }
            ]
        }
    }
render()
{
    
return <div>
      <center><h3> Select item from {this.state.name} </h3>
 
    
      {
      this.state.points.map((item)=>{
        return   <span>
           <img class="shoes" src={img}/> </span>  
     })
    }
 
    <br/>
 {       this.state.points.map((item)=>{
        return   <span>
            <button class="addtoc">{item.price}$ Add To card</button>
            </span>  
     } )
   }  
         <br/>
    {
      this.state.points.map((item)=>{
        return   <span>
           <img class="shoes" src={img}/> </span>  
     })
    }
 
    <br/>
 {       this.state.points.map((item)=>{
        return   <span>
            <button class="addtoc">{item.price}$ Add To card</button>
            </span>  
     } )
   }    
            <br/>
    {
      this.state.points.map((item)=>{
        return   <span>
           <img class="shoes" src={img}/> </span>  
     })
    }
 
    <br/>
 {       this.state.points.map((item)=>{
        return   <span>
            <button class="addtoc">{item.price}$ Add To card</button>
            </span>  
     } )
   }     
    
 </center></div>
 
}}
export default Cards