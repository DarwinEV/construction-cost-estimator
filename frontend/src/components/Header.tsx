// components/Header.tsx
'use client';
import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="text-xl font-bold text-primary-accent">TradeEstimator</div>
                    </div>
                    <nav className="hidden md:flex items-center space-x-10">
                        <a href="#" className="text-gray-800 hover:text-primary transition-colors">Home</a>
                        <a href="#" className="text-gray-800 hover:text-primary transition-colors">About</a>
                        <a href="#" className="border-2 border-transparent hover:border-black bg-orange-500 text-white font-medium px-4 py-2 rounded-md transition-colors">
                            Get Started Estimating
                        </a>
                    </nav>
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMenu} 
                            className="text-gray-500 hover:text-gray-600 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden pt-4 pb-2">
                        <a href="#" className="block py-2 text-gray-800 hover:text-primary">Home</a>
                        <a href="#" className="block py-2 text-gray-800 hover:text-primary">About</a>
                        <a href="#" className="block mt-2 border-2 border-transparent hover:border-black bg-orange-500 hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-md text-center">
                            Get Started Estimating
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;