import React from 'react';


function Card(props) {
    return ( 
        <div style={{backgroundColor:'white',height:'220px',width:'200px',margin:'10px' ,borderRadius:'6px'}}>
        <img style={{width:'190px',height:'130px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrl3cszFzP1XekjAkJvQGsPP1OHFdJU_t6YQ&usqp=CAU' />
        <p style={{backgroundColor:'rgb(212, 212, 212)',borderRadius:'5px'}} >{props.product.name}</p>
        <p >{props.product.price}$</p>
      </div>
     );
}

export default Card;