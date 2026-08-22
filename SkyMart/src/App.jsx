import React from "react";
import { useLocation } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import Navbar from "./layouts/Navbar";
import CartDrawer from "./Components/cart/CartDrawer";

const App = () => {

  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <main className={hideNavbar ? "" : "pt-20"}>
        <AppRoutes />
      </main>
      <CartDrawer/>
      
    </>
  );
};

export default App;



