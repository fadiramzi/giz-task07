import image from "../img/0001.png";

const Product = ({ product }) => {
  const {  name, price } = product;

  return (
    <div className="card">
     <img src={image} alt={name} />
      <div className="details">
        <div className="card-body">
          <p className="name">{name}</p>
          <p className="price">$ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
