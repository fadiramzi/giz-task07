import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Header from './Header';
import {useState} from 'react';

function App() {
  const [Prodects, setProdects] = useState([{type: 'Snkers', name : 'Shose', price: 2000}])
  const AddProdects = ()=>{
    setProdects(
      prvProd =>[...prvProd, {type: 'Snkers', name : 'Shose', price: 2000}]
    );
  }
  console.log(Prodects)
  return (
    <div>
     <Header AddProdects={AddProdects}/>
     <Product Prodects={Prodects}/>
    </div>
  );
}

export default App;
