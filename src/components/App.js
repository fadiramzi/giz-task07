import { useState } from "react";
import image from "../img/0001.png";
import  AddProduct from "./AddProduct";
import { ProductList } from './ProductList';
import Search from './Search';
import '../index.css';
<<<<<<< HEAD

function App(){
  const state = [
    {
    name: "T shirt",
    price: "15",
    image: {image},
    },
    {
    name: "black T shirt",
    price: "15",
    image: {image},
    },
    {
    name: "xmas T- shirt",
    price: "15 $",
    image: {image},
    },

  ];
  const [products, setProducts] = useState(state);
  const [searchProducts, setSearchProducts] = useState('');
  const addProductHandler = (productData) => {
    setProducts([...products, productData]);
  };

  const handleSearch = (e) => {
    setSearchProducts(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchProducts.toLowerCase());
  });
  return (
    
    <div className="App">
      <div className="main">
        <div>
          <Search searchProducts={searchProducts} handleSearch={handleSearch} />
        </div>
        <div>
          <AddProduct addProductHandler={addProductHandler} />
        </div>
      </div>

      <div>
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );

}
export default App;
=======
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
>>>>>>> 2af559d3be17c8c19cabccbc1be7aab6793de7ec
