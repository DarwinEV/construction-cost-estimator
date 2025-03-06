'use client';
import React, { useState } from 'react';

const Footer: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-6 md:mb-0">
                    <div className="text-2xl font-bold">TradeEstimator</div>
                    <p className="mt-2 text-gray-400 max-w-md">
                    Empowering trade professionals with quick, accurate estimates since 2025.
                    </p>
                    <p>Copyright © 2025 TradeEstimate. All rights reserved.</p>
                </div>
                
                {/* Footer sections omitted for brevity, can be added similarly to other components */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;