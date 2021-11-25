import './App.css';
import React,{useState,useEffect} from 'react';
import './Products/products.jsx';
import Products from './Products/products.jsx';

function App() {

  const [data,setData]=useState([]);

  // const getData=()=>{

  //   fetch('./Products/data.json')

  //     .then(function(response){

  //       console.log(response)
        
  //       return response.json();

  //     }).then(function(myJson) {

        

  //       setData(myJson)
 
  //     });

  // }

  // useEffect(()=>{

  //   getData()

  // },[])

  return (
    <div className="App">
      <Products/>
    </div>
  );
}

export default App;
