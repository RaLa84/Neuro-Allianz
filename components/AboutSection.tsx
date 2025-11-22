import React from 'react';
import { CONTENT } from '../constants';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl mb-6">
              {CONTENT.about.headline}
            </h2>
            <div className="prose prose-lg text-gray-600">
              {CONTENT.about.text.map((paragraph, idx) => {
                // Check for bold markdown style **text**
                const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                return (
                  <p key={idx} className="mb-4">
                    {parts.map((part, i) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={i} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
                      }
                      return <span key={i}>{part}</span>;
                    })}
                  </p>
                );
              })}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="font-bold text-brand-dark text-lg">Der Gründer</p>
              <p className="text-slate-600 font-medium">{CONTENT.about.author}</p>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              {/* Changed from bg-brand-primary/20 to bg-amber-400 to match theme */}
              <div className="absolute -inset-4 bg-amber-400 rounded-xl transform rotate-3"></div>
              <div className="relative">
                 <img 
                  src={CONTENT.about.image} 
                  alt="Vater und Kind" 
                  className="relative rounded-xl shadow-2xl w-full h-96 object-cover grayscale"
                />
                {/* Name Overlay matching the screenshot design */}
                <div className="absolute bottom-0 left-0 right-0 bg-slate-900/90 p-4 rounded-b-xl backdrop-blur-sm">
                    <p className="text-white font-bold text-sm tracking-wide">{CONTENT.about.author}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};