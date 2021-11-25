import Product from './Product';

export const ProductList = ({ products }) => {
  return (
    <div className="flex_container">
      {products.map((product) => (
        <Product key={product.name} product={product} />
      ))}
    </div>
  );
};
