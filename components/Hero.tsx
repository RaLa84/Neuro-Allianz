import React from 'react';
import { CONTENT } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/1018/1920/1080" 
          alt="Küste MV" 
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay mostly uniform but slightly lighter top for nav */}
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-extrabold leading-[1.1] mb-8 drop-shadow-lg">
                <span className="text-white block mb-2">{CONTENT.hero.headlinePart1}</span>
                <span className="text-amber-400 block">{CONTENT.hero.headlinePart2}</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 font-light max-w-3xl leading-relaxed">
            {CONTENT.hero.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
            <a 
                href="#join"
                className="group bg-amber-400 hover:bg-amber-500 text-slate-900 text-lg px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
                {CONTENT.hero.ctaPrimary}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
                href="#about"
                className="bg-transparent border border-slate-500 hover:border-white text-white text-lg px-8 py-4 rounded-lg font-medium transition-all hover:bg-white/5"
            >
                {CONTENT.hero.ctaSecondary}
            </a>
            </div>
        </div>
      </div>
    </section>
  );
};