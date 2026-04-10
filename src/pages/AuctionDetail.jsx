import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, User, ShieldCheck, Gavel, Star, MapPin, Calendar, Info, ChevronRight, Share2, Heart } from 'lucide-react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import NavBarDetail from '../components/NavBarDetail';
import App from '../App';
const AuctionDetail = () => {
  // Dữ liệu mẫu (Mock Data)
  const product = {
    title: "Rolex Submariner Date",
    description: "Chiếc Rolex Submariner Date (Ref. 126610LN) là biểu tượng của sự bền bỉ và sang trọng. Với vành bezel Cerachrom đen và bộ máy Calibre 3235 thế hệ mới, đây là món đồ không thể thiếu cho bất kỳ nhà sưu tập nào. Tình trạng hoàn hảo, đầy đủ hộp và giấy tờ năm 2023.",
    currentBid: 250000000,
    minBidStep: 1000000,
    endTime: "04 : 22 : 15",
    leader: "Nguyễn An",
    specs: [
      { label: "THƯƠNG HIỆU", value: "Rolex", color: "text-blue-700" },
      { label: "NĂM SẢN XUẤT", value: "2023" },
      { label: "TÌNH TRẠNG", value: "Likenew (99%)" },
      { label: "ĐỊA ĐIỂM", value: "TP. Hồ Chí Minh" }
    ],
    history: [
      { name: "Nguyễn An", time: "Vừa xong", amount: 250000000, active: true },
      { name: "Trần Bình", time: "2 phút trước", amount: 249000000 },
      { name: "Lê Hoàng", time: "15 phút trước", amount: 245000000 }
    ]
  };
  const images = [
    "/src/assets/watch.jpg",
    "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1619134778706-7015533a6150?q=80&w=300&auto=format&fit=crop"
  ];
  const [activeImage, setActiveImage] = useState(images[0]);

  const [bidValue, setBidValue] = useState(251000000);
  const { watch } = useParams();
  return (
    <div className="min-h-screen bg-slate-50 pb-20 antialiased font-sans">
      <NavBarDetail/>
      {/* Breadcrumb - Thanh điều hướng phụ */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-xs font-medium text-slate-400 uppercase tracking-widest flex gap-2">
        <span>Đấu giá</span> <ChevronRight size={12} />
        <span>Đồng hồ {watch}</span> <ChevronRight size={12} />
        <span className="text-slate-900">{product.title}</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* --- CỘT TRÁI: HÌNH ẢNH & THÔNG TIN (8 cột) --- */}
        <div className="lg:col-span-7 space-y-10">
          {/* Ảnh chính */}
          <div className="relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm overflow-hidden group">
            <div className="absolute top-6 left-6 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 z-10">
              <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
              CUỘC ĐẤU GIÁ ĐANG DIỄN RA
            </div>

            {/* Dùng key={activeImage} để React tạo hiệu ứng fade mỗi khi đổi ảnh */}
            <img
              key={activeImage}
              src={activeImage}
              alt="Main Product"
              className="w-full h-[500px] object-contain transition-all duration-500 animate-in fade-in zoom-in-95"
            />
          </div>

          {/* Gallery Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setActiveImage(img)} // Khi bấm vào thì đổi ảnh chính
                className={`aspect-square bg-white rounded-3xl border-2 p-2 cursor-pointer transition-all duration-300 ${activeImage === img ? 'border-slate-900 shadow-md' : 'border-slate-100 hover:border-slate-300'
                  }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>

          {/* Chi tiết văn bản */}
          <div className="space-y-6 pt-4">
            <h1 className="text-5xl font-extrabold text-slate-950 tracking-tight">{product.title}</h1>
            <p className="text-slate-600 leading-relaxed text-lg max-w-2xl">
              {product.description}
            </p>

            {/* Thông số kỹ thuật */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-slate-200">
              {product.specs.map((spec, idx) => (
                <div key={idx} className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{spec.label}</span>
                  <p className={`text-sm font-bold ${spec.color || 'text-slate-900'}`}>{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Seller Card */}
          <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="text-slate-900" />
              </div>
              <div>
                <h4 className="font-bold text-slate-950">Luxury Watch Hub</h4>
                <div className="flex items-center gap-1 text-orange-500">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                  <span className="text-xs text-slate-400 ml-2">(128 Đánh giá)</span>
                </div>
              </div>
            </div>
            <button className="px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-bold hover:bg-slate-50 transition-colors">
              Theo dõi người bán
            </button>
          </div>
        </div>

        {/* --- CỘT PHẢI: ĐẤU GIÁ (5 cột) --- */}
        <div className="lg:col-span-5 space-y-6">
          {/* Panel đặt giá chính */}
          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl shadow-slate-200/50 sticky top-8">

            {/* Header: Thời gian & Người dẫn đầu */}
            <div className="flex justify-between items-start mb-10">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">THỜI GIAN CÒN LẠI</span>
                <div className="text-3xl font-black text-slate-950 tracking-tighter">{product.endTime}</div>
              </div>
              <div className="text-right space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">NGƯỜI DẪN ĐẦU</span>
                <div className="flex items-center gap-2 justify-end font-bold text-blue-700 text-sm">
                  <User size={16} /> {product.leader}
                </div>
              </div>
            </div>

            {/* Giá hiện tại */}
            <div className="space-y-1 mb-8">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">GIÁ HIỆN TẠI</span>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-slate-950">
                  {new Intl.NumberFormat('vi-VN').format(product.currentBid)}
                </span>
                <span className="text-lg font-bold text-blue-600">VNĐ</span>
              </div>
            </div>

            {/* Input đặt giá */}
            <div className="space-y-4 mb-8">
              <div className="relative">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm border-r border-slate-200 pr-4">VNĐ</div>
                <input
                  type="text"
                  value={new Intl.NumberFormat('vi-VN').format(bidValue)}
                  onChange={(e) => setBidValue(e.target.value.replace(/\D/g, ''))}
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 pl-20 pr-6 text-xl font-bold text-slate-950 focus:border-slate-950 focus:ring-0 transition-all outline-none"
                />
              </div>
              <div className="flex justify-between px-2">
                <span className="text-[10px] font-bold text-slate-400">Bước giá tối thiểu: 1.000.000 VNĐ</span>
                <span className="text-[10px] font-bold text-slate-400 underline cursor-help text-right">Đã bao gồm phí đấu giá</span>
              </div>
            </div>

            {/* Nút Đặt giá */}
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-2xl transition-all shadow-lg shadow-orange-200 flex items-center justify-center gap-3 uppercase tracking-widest text-sm">
              <Gavel size={20} /> Đặt giá ngay
            </button>

            {/* Lịch sử đấu giá */}
            <div className="mt-12 space-y-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <h3 className="font-bold text-slate-950 flex items-center gap-2">Lịch sử đấu giá <Info size={14} className="text-slate-300" /></h3>
                <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-[10px] font-bold">12 LƯỢT</span>
              </div>

              <div className="space-y-4 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                {product.history.map((bid, i) => (
                  <div key={i} className={`flex justify-between items-center p-4 rounded-2xl border ${bid.active ? 'bg-blue-50 border-blue-100' : 'bg-white border-slate-50'}`}>
                    <div className="flex gap-3 items-center">
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-xs">
                        {bid.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{bid.name}</p>
                        <p className="text-[10px] text-slate-400 font-medium">{bid.time}</p>
                      </div>
                    </div>
                    <div className={`text-sm font-black ${bid.active ? 'text-blue-700' : 'text-slate-950'}`}>
                      {new Intl.NumberFormat('vi-VN').format(bid.amount)} đ
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-2xl bg-slate-50 flex flex-col items-center text-center gap-2 group cursor-default">
                <ShieldCheck size={20} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">XÁC THỰC 100%</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 flex flex-col items-center text-center gap-2 group cursor-default">
                <ShieldCheck size={20} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">GIAO DỊCH AN TOÀN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AuctionDetail;
