/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-stone-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 -mt-5">
            <img 
              src="/logo.webp" 
              alt="Ilka Steakhouse" 
              className="h-20 w-auto transition-all duration-300 hover:scale-105 drop-shadow-lg"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('philosophy')}
              className="text-stone-200 hover:text-green-400 transition-colors duration-200 font-medium"
            >
              Historia Jonë
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-stone-200 hover:text-green-400 transition-colors duration-200 font-medium"
            >
              Menuja
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="text-stone-200 hover:text-green-400 transition-colors duration-200 font-medium"
            >
              Evenimente Private
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-stone-200 hover:text-green-400 transition-colors duration-200 font-medium"
            >
               Kontakti
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('reservation')}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Bëj një rezervim
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-stone-200 hover:text-green-400 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-stone-900/95 backdrop-blur-sm border-t border-stone-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('philosophy')}
                className="block w-full text-left px-3 py-2 text-stone-200 hover:text-green-400 transition-colors duration-200"
              >
                Historia Jonë
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left px-3 py-2 text-stone-200 hover:text-green-400 transition-colors duration-200"
              >
                Menu - Menuja
              
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="block w-full text-left px-3 py-2 text-stone-200 hover:text-green-400 transition-colors duration-200"
              >
                Evenimente Private


              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-stone-200 hover:text-green-400 transition-colors duration-200"
              >
                Kontakti
              </button>
              <button 
                onClick={() => scrollToSection('reservation')}
                className="block w-full text-left px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200 mt-4"
              >
                Bëj një rezervim
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;