import React from "react";
import styles from './fildes.module.css'
import pair from './pair.jpg';
import Conponat1 from './Conponat1'
import Search from './Search';
import { useState } from "react";
const Fildes = () => {
  const [filter,setfilter]=useState("")
  const [state, setState] = useState([
    {
      name: "shoes",
      price: "5$"

    },
    {
      name: "hhhhh",
      price: "10$"

    },
    {
      name: "jjj",
      price: "15$"

    }
  ]);
  const searchPrice = (name) =>
  {
   setfilter(name);
  }
  const priceHandeler =() =>{ 
   if (filter.length !== 0){
      return state.filter((el) => el.name.includes(filter) )
    }
    return state;}

  return (
    <div className={styles.cardmap}>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="price"/>
      <button>add</button>
      <div>
        <Search  searchPrice={searchPrice}/>
      </div>
      <Conponat1 nameslist={priceHandeler()} />
    </div>
  )
}
export default Fildes;