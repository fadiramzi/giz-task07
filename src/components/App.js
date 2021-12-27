import { useState } from "react";
import image from "../img/0001.png";
import  AddProduct from "./AddProduct";
import { ProductList } from './ProductList';
import Search from './Search';
import '../index.css';

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
