import React from 'react';
import { Search, Bell, Wallet } from 'lucide-react';
const Navbar = () => {
    const [activeTab, setActiveTab] = React.useState('Electronics');
    const menuItems = ['Electronics', 'Fashion', 'Antiques'];

    return (
        <nav className="w-full h-20 border-b border-gray-100 flex items-center justify-between px-12 bg-white sticky top-0 z-50">
        {/* Logo */}
        <div className="text-primary-blue font-bold text-xl tracking-tight">
            The Sovereign Exchange
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 font-semibold">
            {menuItems.map((item) => (
                <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`pb-1 transition-all duration-300 border-b-2 text-lg ${
                    activeTab === item 
                    ? "border-primary-blue text-primary-blue" 
                    : "border-transparent text-gray-400 hover:text-primary-blue"
                }`}
                >
                {item}
                </button>
            ))}
            </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-6">
            {/* Search Bar */}
            <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
            <input 
                type="text" 
                placeholder="Search auctions..." 
                className="bg-gray-100 pl-10 pr-4 py-2 rounded-md w-64 focus:outline-none focus:ring-1 focus:ring-navy"
            />
            </div>

            {/* Wallet Widget */}
            <div className="flex items-center bg-gold px-4 py-2 rounded-lg font-bold text-navy space-x-2">
            <Wallet size={18} />
            <span>$2,450.00</span>
            </div>

            {/* Icons */}
            <button className="relative text-navy">
            <Bell size={24} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-light rounded-full border border-white"></span>
            </button>

            {/* User Avatar */}
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 cursor-pointer">
            <img 
                src="https://cdn-icons-png.flaticon.com/512/219/219988.png" 
                alt="User avatar" 
                className="w-full h-full object-cover"
            />
            </div>
        </div>
        </nav>
    );
};

export default Navbar;