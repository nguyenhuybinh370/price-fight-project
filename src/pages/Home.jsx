import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import MainBanner from '../components/MainBanner';
import SubBanner from '../components/SubBanner';
import CuratorStandard from '../components/CuratorStandard';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* PHẦN B: HERO SECTION */}
      <section className="px-12 py-8 grid grid-cols-12 gap-6">
        <MainBanner />
        <SubBanner />
      </section>

      {/* PHẦN C: LIVE AUCTIONS (Placeholder cho thành viên khác) */}
      <div className="py-20 text-center italic text-gray-400">
        -- Section Live Auctions (By Team) --
      </div>

      {/* PHẦN D: THE CURATOR'S STANDARD */}
      <CuratorStandard />

      <Footer />
    </div>
  );
};

export default Home;