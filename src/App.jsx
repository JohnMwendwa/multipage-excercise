import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import WelcomePage from "./pages/Welcome";
import Root from "./components/shared/Root";

const ProductsPage = lazy(() => import("./pages/Products"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetails"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route element={<WelcomePage />} index />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:id" element={<ProductDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
