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
import NavigationBar from "./pages/components/Navbar";
import { useAuthStore } from "./stores/login";
import { useAdminAuthStore } from "./stores/adminlogin";
import ViewOrder from "./pages/ViewOrder";
import Inventory from "./pages/Inventory";
import AdminLogin from "./pages/AdminLogin";
import AdminNavigationBar from "./pages/components/AdminNavbar";

export default function WebRoutes() {
  const { user } = useAuthStore();
  const { admin } = useAdminAuthStore();
  const isLogin = user ? true : false;
  const isAdmin = admin ? true : false;
  return (
    <>
      {!isAdmin && <NavigationBar />}
      {isAdmin && <AdminNavigationBar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/equipments" element={<Equipments />} />
        <Route path="/supplements" element={<Supplements />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/products/:type/:id" element={<ProductPage />} />

        {/* ADMIN PATH */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/inventory" element={<Inventory />} />
        {isLogin && (
          <>
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/view-order/:id" element={<ViewOrder />} />
          </>
        )}

        {!isLogin && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-pass" element={<ForgotPass />} />
          </>
        )}

        <Route path="*" element={<Homepage />} />
      </Routes>
    </>
  );
}
