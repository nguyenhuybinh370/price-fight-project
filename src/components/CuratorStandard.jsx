import React from 'react';
import { ShieldCheck, Lock, Globe } from 'lucide-react';

const CuratorStandard = () => {
  // Dữ liệu được tổ chức thành mảng để dễ dàng quản lý và nâng cấp
  const standards = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Guaranteed Authenticity",
      description: "Every item is rigorously inspected by our team of master curators."
    },
    {
      icon: <Lock size={32} />,
      title: "Secure Escrow",
      description: "Funds are held in secure sovereign vaults until successful delivery."
    },
    {
      icon: <Globe size={32} />,
      title: "Global Logistics",
      description: "Insured white-glove shipping to over 140 countries worldwide."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-center text-4xl font-bold text-navy mb-16">
        The Curator’s Standard
      </h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-16 px-12">
        {standards.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-navy">
              {item.icon}
            </div>
            <h4 className="text-navy font-bold text-lg mb-3">
              {item.title}
            </h4>
            <p className="text-subtitle text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CuratorStandard;