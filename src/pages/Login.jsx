import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { User, Lock, Mail, ChevronRight } from 'lucide-react'; // Import icons

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  // const navigate = useNavigate();

  // Đây là nơi ông sẽ lắp logic Firebase sau này
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password, remember });
    // Ví dụ: Sau khi Firebase báo thành công, chuyển trang
    // navigate('/');
  };

  return (
    // -- BỐ CỤC CHÍNH VÀ HÌNH NỀN --
    // Sẽ tốt hơn nếu ông đặt một hình nền gallery mờ vào đây.
    // Ví dụ đặt file 'gallery-bg.jpg' vào src/assets/ và dùng:
    // style={{ backgroundImage: `url('/src/assets/gallery-bg.jpg')` }}
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center p-4 antialiased"
      style={{
        backgroundImage: `url('/src/assets/Login.png')`, // Tạm thời dùng placeholder cho seminar
        // backgroundBlendMode: 'soft-light' // Làm nền dịu đi
      }}
    >
      {/* -- CHỮ TRÊN CÙNG (Outside the form) -- */}
      <div className="absolute top-10 w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-950 tracking-tight">
          The Digital Auction
        </h1>
        <p className="mt-2 text-xs font-light text-gray-700 uppercase tracking-widest">
          BỘ SƯU TẬP GIÁ TRỊ & HIẾM CÓ
        </p>
      </div>

      {/* -- KHUNG FORM TRẮNG -- */}
      <div className="w-full max-w-xl bg-white/95 backdrop-blur-sm rounded-3xl shadow-[0_20px_60px_rgb(0,0,0,0.08)] p-10 md:p-14">
        {/* -- WELCOME SECTION -- */}
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Chào mừng trở lại!
        </h2>
        <p className="text-gray-600 mb-10">
          Vui lòng nhập thông tin đăng nhập của bạn để truy cập vào phiên đấu giá.
        </p>

        {/* -- FORM -- */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Address */}
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 block">
              ĐỊA CHỈ EMAIL
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="curator@example.com"
                className="w-full bg-gray-100 border border-gray-100 pl-12 pr-5 py-3.5 rounded-xl text-gray-900 placeholder:text-gray-400 focus:ring-1 focus:ring-gray-300 transition-all"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wide block">
                MẬT KHẨU
              </label>
              <Link
                to="/forgot-password"
                className="text-xs font-normal text-gray-500 hover:text-gray-700 hover:underline"
              >
                Quên Mật Khẩu?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••" // Dùng dot char thay vì dot placeholder
                className="w-full bg-gray-100 border border-gray-100 pl-12 pr-5 py-3.5 rounded-xl text-gray-900 placeholder:text-gray-400 focus:ring-1 focus:ring-gray-300 transition-all"
                required
              />
            </div>
          </div>

          {/* Remember & Footer controls */}
          <div className="flex items-center justify-between gap-4 pt-2 mb-10">
            <div className="flex items-center gap-2.5">
              <input
                type="checkbox"
                id="remember"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-5 h-5 border-gray-300 rounded focus:ring-gray-500 text-gray-950 transition-colors"
              />
              <label htmlFor="remember" className="text-sm text-gray-700">
                Ghi nhớ đăng nhập
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white text-sm font-bold uppercase py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors tracking-wider"
          >
            ĐĂNG NHẬP
            <ChevronRight className="w-5 h-5" />
          </button>
        </form>

        {/* -- FOOTER text -- */}
        <p className="mt-12 text-center text-sm text-gray-600">
          Bạn chưa có tài khoản?{' '}
          <Link
            to="/register"
            className="font-semibold text-gray-900 hover:text-gray-700"
          >
            Tạo tài khoản
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;