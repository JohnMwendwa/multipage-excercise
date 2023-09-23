import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import WelcomePage from "./pages/Welcome";
import Layout from "./components/shared/Layout";

const ProductsPage = lazy(() => import("./pages/Products"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetails"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
