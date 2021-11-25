import { ProductList } from './components/ProductList';
import Search from './components/Search';
import AddProduct from './components/AddProduct';
import { useState } from 'react';

function App() {
  const initialProducts = [
    {
      brand: 'Sneakers',
      name: 'boots',
      price: '99',
      image:
        'https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80',
    },
    {
      brand: 'Sneakers',
      name: 'Wellington boots',
      price: '99',
      image:
        'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80',
    },
    {
      brand: 'Sneakers',
      name: 'Air Max 95 U',
      price: '99',
      image:
        'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [searchValue, setSearchValue] = useState('');

  const addProductHandler = (productData) => {
    setProducts([...products, productData]);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className="App">
      <div className="header">
        <div>
          <Search searchValue={searchValue} handleSearch={handleSearch} />
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
