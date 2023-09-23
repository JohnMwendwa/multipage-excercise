import { Route, Routes } from "react-router-dom";

import WelcomePage from "./pages/Welcome";
import ProductsPage from "./pages/Products";
import ProductDetailsPage from "./pages/ProductDetails";
import Layout from "./components/shared/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
