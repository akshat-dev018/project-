import { Routes, Route, Navigate } from "react-router";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../Components/Home";
import ProductDetails from "../pages/ProductDetails";

function AppRoutes() {
  return (
    <Routes>

       <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />}/>

      <Route path="/home" element={<Home />} />

      <Route path="/products/:id" element={<ProductDetails/>} />

    </Routes>
  );
}

export default AppRoutes;