import React from 'react';
import { useState } from 'react';
import image from "../img/0001.png";

const AddProduct = ({addProductHandler}) => {
const state = {
  name: '',
  price: '',
  image: {image},
};
const [productData, setProductData] = useState(state);
const submitHandler = (e) => {
  e.preventDefault();
  addProductHandler(productData);
  setProductData(state);
};
const onChangeHandler = (e) => {
  setProductData({ ...productData, [e.target.name]: e.target.value });
};
 
return (
  <form  onSubmit={submitHandler}>
    <input
      name="name"
      className="box"
      type="text"
      placeholder="Name"
      onChange={onChangeHandler}
      value={productData.name}
    />
    <input
      name="price"
      className="box"
      type="number"
      placeholder="Price"
      onChange={onChangeHandler}
      value={productData.price}
    />
    <button className="add_button">Add</button>
  </form>
);
};
export default AddProduct;
