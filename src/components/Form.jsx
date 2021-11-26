import React from "react";
import Input from "./Input";
import Button from "./Button";
import "./Form.css";
function Form(props) {
  return (
    <form className={props.styles} onSubmit={props.onSubmitFunction}>
      <Input name="productName" placeholder="Name" />
      <Input name="productPrice" placeholder="Price" />
      <Button text="Add New" />
    </form>
  );
}

export default Form;
