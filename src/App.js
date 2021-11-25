import { ProductList } from './components/ProductList';
import Search from './components/Search';
import AddProduct from './components/AddProduct';
import { useState } from 'react';

function App() {
  const initialProducts = [
    {
      type: 'Sneakers',
      name: 'Air Max 95 U',
      price: '99',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      type: 'Sneakers',
      name: 'Air Max 95 U',
      price: '99',
      image:
        'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    },
    {
      type: 'Sneakers',
      name: 'Air Max 95 U',
      price: '99',
      image:
        'https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80',
    },
    {
      type: 'Sneakers',
      name: 'Air Max 95 U',
      price: '99',
      image:
        'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80',
    },
    {
      type: 'Sneakers',
      name: 'Air Max 95 U',
      price: '99',
      image:
        'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      type: 'Sneakers',
      name: 'Air Max 95 U',
      price: '99',
      image:
        'https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
    },
    {
      type: 'Sneakers',
      name: 'Air Max 95 U',
      price: '99',
      image:
        'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      type: 'Sneakers',
      name: 'Air Max 95 U',
      price: '99',
      image:
        'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=800',
    },
    {
      type: 'Sneakers',
      name: 'Air Max 95 U',
      price: '99',
      image:
        'https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
    },
    {
      type: 'Sneakers',
      name: 'Air Max 95 U',
      price: '99',
      image:
        'https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
    },
    {
      type: 'Sneakers',
      name: 'Air Max 95 U',
      price: '99',
      image:
        'https://images.unsplash.com/photo-1581619883162-4a1aa0a6a0c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  const addProductHandler = (productData) => {
    setProducts([...products, productData]);
  };

  return (
    <div className="App">
      <div className="header">
        <div>
          <Search />
        </div>
        <div>
          <AddProduct addProductHandler={addProductHandler} />
        </div>
      </div>

      <div>
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default App;
