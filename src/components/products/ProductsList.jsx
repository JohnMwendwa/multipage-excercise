import products from "../../data/products";
import Product from "./Product";

export default function ProductsList() {
  return (
    <div>
      <h1>Our Products</h1>
      <ul id="products-list">
        {products.map((product) => (
          <Product details={product} />
        ))}
      </ul>
    </div>
  );
}
