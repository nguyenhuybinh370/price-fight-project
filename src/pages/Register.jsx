import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lock, Mail, User } from "lucide-react";
import galleryImage from "../assets/Register2.png";

// Component chính hiển thị toàn bộ giao diện và quản lý dữ liệu form đăng ký.
const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Cập nhật đúng trường dữ liệu khi người dùng nhập vào từng ô input.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Chặn reload trang khi submit và là nơi để gắn logic đăng ký thật sau này.
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Register attempt:", formData);
  };

  const inputClassName =
    "w-full rounded-none border border-[#ece7df] bg-[#f4f1eb]/80 py-4 pl-[52px] pr-4 text-sm text-[#171717] outline-none transition duration-200 placeholder:text-[#a5a097] focus:border-[#171717] focus:bg-white";

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#faf8f4_0%,#f4f1ea_100%)] px-4 py-6 text-[#171717] md:px-8 lg:px-10">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-7xl flex-col">
        <header className="flex items-center justify-between border-b border-black/6 pb-6">
          <Link
            to="/"
            className="text-xl font-semibold tracking-[-0.03em] text-[#111111] sm:text-2xl"
          >
            The Digital Curator
          </Link>

          <div className="hidden items-center gap-10 text-sm text-[#6f7680] lg:flex">
            <a href="#!" className="transition hover:text-[#111111]">
              Auctions
            </a>
            <a href="#!" className="transition hover:text-[#111111]">
              Artists
            </a>
            <a href="#!" className="transition hover:text-[#111111]">
              About
            </a>
            <Link
              to="/login"
              className="bg-black px-8 py-3 font-semibold text-white transition hover:bg-[#202020]"
            >
              Sign In
            </Link>
          </div>
        </header>

        <main className="flex flex-1 items-center justify-center py-8 lg:py-12">
          <section className="grid w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-[0_28px_90px_rgba(30,22,12,0.09)] lg:grid-cols-[1fr_0.98fr]">
            <div className="relative min-h-[320px] overflow-hidden">
              <img
                src={galleryImage}
                alt="Art gallery interior"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex items-center bg-[#fffdfa] px-6 py-8 sm:px-10 md:px-12 lg:px-[52px]">
              <div className="mx-auto w-full max-w-md">
                <div className="mb-10">
                  <h1 className="text-[2.35rem] font-semibold tracking-[-0.06em] text-[#111111]">
                    Tạo tài khoản
                  </h1>
                  <p className="mt-2 text-[15px] text-[#6b6b6b]">
                    Tham gia đấu giá cùng chúng tôi.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#57534d]"
                    >
                      Họ và tên
                    </label>
                    <div className="relative">
                      <User className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#8d877e]" />
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Nguyen Van A"
                        className={inputClassName}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#57534d]"
                    >
                      Địa chỉ email
                    </label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#8d877e]" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@curator.com"
                        className={inputClassName}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#57534d]"
                    >
                      Mật khẩu
                    </label>
                    <div className="relative">
                      <Lock className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#8d877e]" />
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className={inputClassName}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#57534d]"
                    >
                      Xác nhận mật khẩu
                    </label>
                    <div className="relative">
                      <Lock className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#8d877e]" />
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className={inputClassName}
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 flex w-full items-center justify-center gap-2 bg-black px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-[#202020]"
                  >
                    Đăng ký
                  </button>
                </form>

                <p className="mt-10 text-center text-sm text-[#6b6b6b]">
                  Đã có tài khoản?{" "}
                  <Link
                    to="/login"
                    className="font-semibold text-[#111111] transition hover:text-[#4a4a4a]"
                  >
                    Đăng nhập
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Register;
