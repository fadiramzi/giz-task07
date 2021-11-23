import Header from './components/Header';
import './components/styles.css'
import { useState } from 'react';
import Products from './components/Products';
import Content from './components/Content';

function App() {
  const [products,setProducts] = useState(Content)
  
    const deleteProduct = (id) => {
      setProducts(products.filter((product) => product.id !== id ))
    }
    
    const addProduct = (product) => {
      const id = Math.floor(Math.random()*10000)+1
      const newProduct = {id, ...product}
      setProducts([...products,newProduct])
  }

  return (
    <div>
      <Header onAdd={addProduct} />
      {products.length>0 ? <Products products={products} onDelete={deleteProduct}  /> : 'No products to show' }
    </div>
  );
}

export default App;
