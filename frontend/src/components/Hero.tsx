// components/Header.tsx
'use client';
import React, { useState } from 'react';

const Hero: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="h-96 flex items-center justify-center text-center bg-cover bg-center relative" 
            style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'
            }}
            >
            <div className="container mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Accurate Estimates in Minutes
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Quick estimate insights and visuals.
                </p>
                <button className="bg-orange-500 hover:bg-orange-400 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Open Estimator
                </button>
            </div>
        </section>
    );
};

export default Hero;