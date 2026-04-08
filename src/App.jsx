import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import các trang của ông
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuctionDetail from "./pages/AuctionDetail";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
