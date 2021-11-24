import Header from './components/Header';
import './components/styles.css'
import { useEffect, useState } from 'react';
import Products from './components/Products';
import Content from './components/Content';

function App() {
  const [products] = useState(Content)
  const [itemFound,setItemFound] = useState(products)
  
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

    const deleteProduct = (id) => {
      setItemFound(itemFound.filter((product) => product.id !== id ))
    }
    
    const addProduct = (product) => {
      const id = Math.floor(Math.random()*10000)+1
      const newProduct = {id, ...product}
      setItemFound([...itemFound,newProduct])
  }

  const searchHandler = (e) => {
    setItemFound(products)
    console.log(products)
     let filteredProduct= itemFound.filter((item) => {
         return  item.productName.toLowerCase().includes(e.target.value.toLowerCase())
       })
       setItemFound(filteredProduct)
  }

  return (
    <div>
      <Header onAdd={addProduct} onChange={searchHandler} />
      {itemFound.length>0 ? <Products products={itemFound} onDelete={deleteProduct}  /> : 'No products to show' }
    </div>
  );
}

export default App;
