import Header from './components/Header';
import './components/styles.css'
import { useState } from 'react';
import Products from './components/Products';
 
function App() {
  const [products,setProducts] = useState([
    {
        id:1,
        productName:'Ball',
        productPrice:'5000 IQD',
        productDiscription:'White Ball for football',
    },
    {
        id:2,
        productName:'Realme Gt 5G',
        productPrice:'700000 IQD',
        productDiscription:'Realme phone',
    },
    {
        id:3,
        productName:'Laptop',
        productPrice:'400000 IQD',
        productDiscription:'Dell laptop',
    }
    
    ])

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
