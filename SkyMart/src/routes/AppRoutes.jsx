import { Routes, Route, Navigate } from "react-router";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../Components/Home";
import Products from "../Components/products/Product";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import About from "../pages/About";
import ProtectedRoute from "./ProtectedRoutes";

function AppRoutes() {
  return (
    <Routes>

       <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />}/>

      <Route path="/home" element={<ProtectedRoute>
        <Home/>
      </ProtectedRoute>} />

      <Route path="/products" element={<ProtectedRoute>
        <Products/>
      </ProtectedRoute>} />

      <Route path="/products/:id" element={<ProtectedRoute>
        <ProductDetails/>
      </ProtectedRoute>} />

      <Route path="/cart" element={<ProtectedRoute>
        <Cart/>
      </ProtectedRoute>} />

      <Route path="/about" element={<ProtectedRoute>
        <About/>
      </ProtectedRoute>} />

    </Routes>
  );
}

export default AppRoutes;

