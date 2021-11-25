// import React, { useState } from "react";
import "./style.css"

// const Form = props => {
//     const [title, setTitle] = useState('ss');
   
//     return (
//         <div className="row d-flex form mb-4">
//             <form >
//                 <div className="form-group ">
//                     <label >Enter Card Title</label>
//                     <input 
//                     type="text" 
//                     required 
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     />
//                 </div>
//                 <div className="form-group ">
//                     <label  >Enter Card Price</label>
//                     <input 
//                     type="text" 
//                     required 
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     />
//                 </div>
//                 <div className="form-group btnSubmit">
//                     <button type="submit" className="btn btn-success ">Add</button>
//                 </div>
//             </form>
           
//         </div>
        
//     );
// }

import { useState } from "react";

const Form = (props) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    const card = { title, price };
   props.GetCard(card)
  }

  return (
    <div className="row d-flex form mb-4">
      <h2>Add a New card</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Card title:</label>
            <input 
            type="text" 
            className="form-control"
            required 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />      
        </div>
        <div className="form-group">
            <label>Card price:</label>
            <input 
            type="number" 
            className="form-control"
            required 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />      
        </div>
       
       <div className="form-group btnSubmit">
        <button className="btn btn-success ">Add Blog</button>
       </div>
      </form>
    </div>
  );
}

export default Form;
