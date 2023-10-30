import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Equipments from "./pages/Equipments";
import Supplements from "./pages/Supplements";
import About from "./pages/About-Us";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function WebRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/equipments" element={<Equipments />} />
        <Route path="/supplements" element={<Supplements />} />
        <Route path="/about-us" element={<About />} />

        {/* User Login & Registration */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
