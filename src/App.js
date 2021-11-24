import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Product from './components/Product';
import ViewProduct from './components/ViewProduct';
function App() {
  const [inputText,setInputText]=useState("");
  const [inputPrice,setInputPrice]=useState("");
  const [carts,setCarts]=useState([]);
  const[searchProduct,setSearchProduct]=useState("");

  return (
   <div className="container">

     <Form 
       inputText={inputText}
       setInputText={setInputText}
       inputPrice={inputPrice}
       setInputPrice={setInputPrice}
       carts={carts}
       setCarts={setCarts}
       searchProduct={searchProduct}
       setSearchProduct={setSearchProduct}
       
     />

     <ViewProduct
      carts={carts}
      searchProduct={searchProduct}
      

     />
    
     
    
   </div>
  )
}

export default App;
