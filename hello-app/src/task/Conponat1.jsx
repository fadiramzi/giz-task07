import React from "react";
import styles from './fildes.module.css'
import pair from './pair.jpg';
import { useState } from "react";

const  Conponat1= ({nameslist}) => {
    const cards = nameslist.map(({name,price},idx) => (
        <div className={styles.maincontenar} key={idx}>
            <div><img src={pair} alt="pair"
              width={"80px"}
              height={"80px"} /></div>
            <div>name:{name}</div>
            <div>price:{price}</div>
          </div>
      ))
      return(
          <div>{cards}</div>
      )
}
export default Conponat1;