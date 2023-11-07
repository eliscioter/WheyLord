import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Equipments from "./pages/Equipments";
import Supplements from "./pages/Supplements";
import About from "./pages/About-Us";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductPage from "./pages/Products";
import ShoppingCart from "./pages/Shopping-Cart";
import Checkout from "./pages/Checkout";
import ForgotPass from "./pages/ForgotPass";

export default function WebRoutes() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/equipments" element={<Equipments />} />
        <Route path="/supplements" element={<Supplements />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* User Login & Registration */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-pass" element={<ForgotPass />} />
      </Routes>
    </>
  );
}
