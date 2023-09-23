import { Link } from "react-router-dom";

import products from "../../data/products";
import Product from "./Product";

export default function ProductsList() {
  return (
    <div>
      <h1>Our Products</h1>
      <ul id="products-list">
        {products.map((product) => (
          <Link to={`/products/${product.id}`}>
            <Product key={product.id} {...product} />
          </Link>
        ))}
      </ul>
    </div>
  );
}
