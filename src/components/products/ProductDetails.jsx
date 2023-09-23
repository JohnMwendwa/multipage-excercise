import products from "../../data/products";

export default function ProductDetails({ id }) {
  const { title, description, price } = products.find((prod) => prod.id === id);
  return (
    <div>
      <h1>{title}</h1>
      <p id="product-price">{price}</p>
      <p>{description}</p>
    </div>
  );
}
