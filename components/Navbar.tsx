import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X, BrainCircuit } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Area */}
          <div className="flex items-center gap-2">
            <div className={`p-1 ${isScrolled ? 'text-brand-dark' : 'text-amber-400'}`}>
              <BrainCircuit size={32} />
            </div>
            <span className={`font-bold text-2xl tracking-tight ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
              Neuro-Allianz <span className="text-amber-400">MV</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-base font-medium transition-colors hover:text-amber-400 ${isScrolled ? 'text-slate-600' : 'text-gray-200'}`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#join"
              className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded font-bold transition-transform transform hover:scale-105 shadow-lg"
            >
              Jetzt handeln
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${isScrolled ? 'text-brand-dark' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full border-b shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-brand-dark font-bold text-lg border-b border-gray-100 hover:bg-gray-50"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-slate-900 text-white px-3 py-4 rounded font-bold text-lg"
            >
              Jetzt handeln
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};