import { useParams } from "react-router-dom";

import ProductDetails from "../components/products/ProductDetails";
import products from "../data/products";

export default function ProductDetailsPage() {
  const params = useParams();
  const id = params.id;
  const product = products.find((prod) => prod.id === id);
  return <ProductDetails {...product} />;
}
