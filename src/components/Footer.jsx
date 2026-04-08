import React, { useState } from 'react';

const Footer = () => {
    const [activeFooterTab, setActiveFooterTab] = useState('Auction Rules');
    const footerLinks = ['Terms of Service', 'Privacy Policy', 'Auction Rules', 'Contact Us'];

    return (
        <footer className="w-full bg-white pt-20 pb-10 px-12 border-t border-gray-100 mt-20">
        <div className="flex justify-between items-start mb-12">
            <div>
            <h3 className="text-primary-blue font-bold text-xl mb-2">The Sovereign Exchange</h3>
            <p className="text-subtitle text-sm w-80">
                The world's premier digital auction house for elite collectors and curators.
            </p>
            </div>

            <div className="flex space-x-10 text-sm font-semibold">
                {footerLinks.map((link) => (
                    <button
                    key={link}
                    onClick={() => setActiveFooterTab(link)}
                    className={`transition-all duration-300 hover:underline ${
                        activeFooterTab === link 
                        ? "text-primary-blue" 
                        : "text-subtitle"      
                    }`}
                    >
                    {link}
                    </button>
                ))}
            </div>

            <div className="text-subtitle text-sm">
            © 2024 The Sovereign Exchange. All rights reserved.
            </div>
        </div>
        </footer>
    );
};

export default Footer;