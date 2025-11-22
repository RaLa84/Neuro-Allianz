import React from 'react';
import { CONTENT } from '../constants';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6">
            {CONTENT.problem.headline}
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed">
            {CONTENT.problem.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONTENT.problem.points.map((point, index) => (
            <div key={index} className="flex flex-col items-start text-left p-8 rounded-xl bg-white border-t-4 border-rose-500 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-rose-50 mb-6">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};