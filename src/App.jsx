import { Route, Routes } from "react-router-dom";

import WelcomePage from "./pages/Welcome";
import Navbar from "./components/shared/Navbar";
import ProductsPage from "./pages/Products";
import ProductDetailsPage from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
