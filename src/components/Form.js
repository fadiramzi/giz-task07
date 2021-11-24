import React from "react"
export default function Form({inputText,setInputText,inputPrice,setInputPrice,setCarts,carts,searchProduct,setSearchProduct}){
    //get input value
    const inputName=(event)=>{
         setInputText(event.target.value)
    };

    const inputPrices=(event)=>{
        setInputPrice(event.target.value)
   };

   const searchInput=(event)=>{
    event.preventDefault();
    setSearchProduct(event.target.value)
  };
 
    const addNewCart=(event)=>{
        event.preventDefault();
        if(inputText,inputPrice !== ''){
        setCarts([
            ...carts,{text:inputText,price:inputPrice,id:Math.floor(Math.random()*1000)},
        ]);
        };
        setInputText("");
        setInputPrice("")
       
    };
   
    
    return(
        <div className="form">
            <input className="search-input" type="search" placeholder="Search Product" value={searchProduct} onChange={searchInput}/>
            <form>
                <input type="text" placeholder="Name"  value={inputText} onChange={inputName}/>
                <input type="text" placeholder="Price" value={inputPrice} onChange={inputPrices}/>
                <button onClick={addNewCart}>Add New</button>
            </form>
        </div>
    )
}