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
       {/* Định nghĩa đường dẫn cho từng trang */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Đường dẫn động cho chi tiết đấu giá (id có thể thay đổi) */}
        <Route path="/watch" element={<AuctionDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
