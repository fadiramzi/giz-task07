const Product = ({ product }) => {
  const { image, type, name, price } = product;

  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="details">
        <p>{type}</p>
        <div className="name_price">
          <p className="name">{name}</p>
          <p className="price">$ {price}</p>
        </div>
      </div>
      <button className="cart_button">Add to Cart</button>
    </div>
  );
};

export default Product;
