import React from 'react';

const SubBanner = () => {
  return (
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
  );
};

export default SubBanner;