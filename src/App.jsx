
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
        {/* Nếu muốn trang Login hiện ra ngay khi mở web, hãy để path="/" */}
        <Route path="/" element={<Home />} /> 
        {/* Hoặc nếu để path="/login", ông phải gõ thêm /login vào thanh địa chỉ */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
