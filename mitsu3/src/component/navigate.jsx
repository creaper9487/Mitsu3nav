import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-white/90 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'
        }`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 to-blue-400">
                        Mistu_r3ACT
                    </span>
                </div>
                
                <div className="hidden md:flex space-x-8">
                    <a href="#features" className={`font-medium ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-indigo-500 transition-colors`}>特色</a>
                    <a href="#learning" className={`font-medium ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-indigo-500 transition-colors`}>學習路徑</a>
                    <a href="#community" className={`font-medium ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-indigo-500 transition-colors`}>社群</a>
                    <a href="#faq" className={`font-medium ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-indigo-500 transition-colors`}>常見問題</a>
                </div>
                
                <div className="flex items-center space-x-4">
                    <button className={`${
                        scrolled 
                            ? 'bg-indigo-600 text-white' 
                            : 'bg-white/20 text-white backdrop-blur-sm border border-white/30 hover:bg-white/30'
                    } px-4 py-2 rounded-lg font-medium transition-all`}>
                        登入
                    </button>
                    <button className="hidden md:block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                        開始學習
                    </button>
                    
                    <button className="md:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;