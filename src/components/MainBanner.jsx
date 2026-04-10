import React from 'react';
import AuctionDetail from '../pages/AuctionDetail';
import { Link } from 'react-router-dom';
const MainBanner = () => {

  return (
    <div className="col-span-7 relative rounded-3xl overflow-hidden h-125 bg-navy text-white group">
      <img
        src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=1000"
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-700"
        alt="Patek Philippe"
      />
      <div className="relative z-10 p-12 flex flex-col justify-center h-full max-w-lg">
        <span className="bg-red-light text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-6">HOT NOW</span>
        <h1 className="text-5xl font-bold mb-4 leading-tight text-white">Patek Philippe Nautilus Ref. 5711</h1>
        <p className="text-gray-300 mb-8">An icon of sporting elegance, featuring the signature blue embossed dial. Certified provenance.</p>
        <Link to="/watch">
          <button className="bg-gold text-navy font-bold py-3 px-8 rounded-xl w-fit hover:bg-yellow-300 transition">
            Join now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainBanner;