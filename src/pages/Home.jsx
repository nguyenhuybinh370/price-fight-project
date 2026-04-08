import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import { ShieldCheck, Lock, Globe } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* PHẦN B: HERO SECTION */}
      <section className="px-12 py-8 grid grid-cols-12 gap-6">
        {/* Banner Chính - Patek Philippe */}
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
            <button className="bg-gold text-navy font-bold py-3 px-8 rounded-xl w-fit hover:bg-yellow-300 transition">
              Join Now
            </button>
          </div>
        </div>

        {/* Banner Phụ - Jaguar */}
        <div className="col-span-5 relative rounded-3xl overflow-hidden h-125 bg-navy text-white group">
          <img 
            src="https://images.unsplash.com/photo-1566008885218-90abf9200ddb?auto=format&fit=crop&q=80&w=1000" 
            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition duration-700" 
            alt="Jaguar"
          />
          <div className="relative z-10 p-10 flex flex-col justify-end h-full">
            <h2 className="text-3xl font-bold mb-2">1965 Jaguar E-Type Series 1</h2>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-300">Current Bid: <span className="text-white font-bold">$142,000</span></span>
              <button className="bg-gold text-navy font-bold py-2 px-6 rounded-lg hover:bg-yellow-300 transition">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* (Phần C - Live Auctions sẽ để trống hoặc placeholder cho thành viên khác) */}
      <div className="py-20 text-center italic text-gray-400">
         -- Section Live Auctions (By Team) --
      </div>

      {/* PHẦN D: THE CURATOR'S STANDARD */}
      <section className="py-20 bg-white">
        <h2 className="text-center text-4xl font-bold text-navy mb-16">The Curator’s Standard</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-16 px-12">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-navy">
              <ShieldCheck size={32} />
            </div>
            <h4 className="text-navy font-bold text-lg mb-3">Guaranteed Authenticity</h4>
            <p className="text-subtitle text-sm leading-relaxed">Every item is rigorously inspected by our team of master curators.</p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-navy">
              <Lock size={32} />
            </div>
            <h4 className="text-navy font-bold text-lg mb-3">Secure Escrow</h4>
            <p className="text-subtitle text-sm leading-relaxed">Funds are held in secure sovereign vaults until successful delivery.</p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-navy">
              <Globe size={32} />
            </div>
            <h4 className="text-navy font-bold text-lg mb-3">Global Logistics</h4>
            <p className="text-subtitle text-sm leading-relaxed">Insured white-glove shipping to over 140 countries worldwide.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;