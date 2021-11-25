import { useState } from 'react';

const AddProduct = ({ addProductHandler }) => {
  const initialState = {
    brand: 'new brand',
    name: '',
    price: '',
    image:
      'https://images.unsplash.com/photo-1581619883162-4a1aa0a6a0c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  };

  const [productData, setProductData] = useState(initialState);

  const submitHandler = (e) => {
    e.preventDefault();
    addProductHandler(productData);
    setProductData(initialState);
  };

  const onChangeHandler = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  return (
    <form className="add_product_form" onSubmit={submitHandler}>
      <input
        name="name"
        className="input"
        type="text"
        placeholder="Name"
        onChange={onChangeHandler}
        value={productData.name}
      />
      <input
        value={productData.price}
        name="price"
        className="input price_input"
        type="number"
        placeholder="Price"
        onChange={onChangeHandler}
      />
      <button className="add_button">Add new</button>
    </form>
  );
};

export default AddProduct;
