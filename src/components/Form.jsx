import React from "react";
import Input from "./Input";
import Button from "./Button";
function Form(props) {
  return (
    <form onSubmit={props.onSubmitFunction}>
      <Input name="productName" placeholder="Name" />
      <Input name="productPrice" placeholder="Price" />
      <Button text="Add New" />
    </form>
  );
}

export default Form;
