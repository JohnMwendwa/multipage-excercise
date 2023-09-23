import { Link } from "react-router-dom";

import products from "../../data/products";
import Product from "./Product";

export default function ProductsList() {
  return (
    <div>
      <h1>Our Products</h1>
      <ul id="products-list">
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <Product {...product} />
          </Link>
        ))}
      </ul>
    </div>
  );
}
