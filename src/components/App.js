import { useState } from "react";
import image from "../img/0001.png";
import { ItemCard } from "./Product";
import { Nav } from "./Nav";
import { AddItem } from "./AddItem";
import '../index.css';
function App () { 
 const [setState] = useState([]);
  const state = {
   name: "", 
   price: "",
   items: [
     {
       id: 1, 
       name: "T shirt",
       price: "15 $",  
     },       {        
       id: 2, 
       
       name: "T shirt",
       price: "10",
     },
     { 
       id: 3,
       name: "T shirt",
       price: "20",
     },
   ],
  }; 
  function handleInputChange(e) { 
    const target = e.target;
    const value = e.target.value;
    const name = e.target.name;
    setState({
      [name]: value,
    });   }; 
  function addItem (e) {
    const { name, price } =state; 
    const itemsInState = state.items;
    const itemsArrayLength = itemsInState.length;
    const id = itemsArrayLength ? itemsInState[itemsArrayLength - 1].id + 1 : 1;
    setState({ 
    items: [
      ...itemsInState,
      Object.assign( 
        {}, 
        {  
          id,
          name, 
          price, 
        } 
      ), 
    ],  
      name: "", 
      price: "",
    });   };
  const { name, price } = state;
  return (
    <div>  
    <Nav />
    <div className="container pt-4"> 
    <AddItem 
    name={name} 
price={price}   
onChange={handleInputChange}
onSubmit={addItem} 
/>   
  <h1 className="display-4 my-4 text-center text-muted">Items</h1> 
<div className="row">  
  {state.items.map((item, index) => ( 
    <ItemCard key={item.id} index={index} image={image} item={item} />  
    ))} 
      </div>  
<hr />   
        </div>    
</div> 
);  
} export default App;
