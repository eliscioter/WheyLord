import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

export default function WebRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}
