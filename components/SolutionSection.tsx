import React from 'react';
import { CONTENT } from '../constants';

export const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-20 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            <span className="text-white">{CONTENT.solution.headline}</span>
            <span className="text-amber-400">{CONTENT.solution.headlineHighlight}</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed">
            {CONTENT.solution.subheadline}
          </p>
        </div>

        {/* Cards List */}
        <div className="flex flex-col gap-6">
          {CONTENT.solution.points.map((point, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row gap-6 bg-slate-800/40 border border-slate-700 p-6 md:p-8 rounded-xl items-start transition-colors hover:border-slate-600 hover:bg-slate-800/60"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 bg-amber-400 p-3 rounded-lg">
                {point.icon}
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                <p className="text-slate-300 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};