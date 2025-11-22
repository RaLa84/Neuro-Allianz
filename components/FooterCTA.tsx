import React, { useState } from 'react';
import { CONTENT } from '../constants';
import { Mail, CheckCircle } from 'lucide-react';

export const FooterCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section id="join" className="py-24 bg-[#eab308] text-brand-dark relative">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-slate-900">
          {CONTENT.cta.headline}
        </h2>
        
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-lg md:text-xl text-slate-800 mb-4 leading-relaxed">
            {CONTENT.cta.text}
          </p>
          <p className="text-lg md:text-xl font-bold text-slate-900">
            {CONTENT.cta.highlightText}
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-xl mx-auto">
          {status === 'success' ? (
            <div className="bg-white rounded-2xl p-8 shadow-2xl text-center animate-fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Vielen Dank!</h3>
              <p className="text-slate-600">Wir haben Ihre Anmeldung erhalten.</p>
              <button onClick={() => setStatus('idle')} className="mt-6 text-slate-900 font-medium hover:underline">
                Zurück
              </button>
            </div>
          ) : (
            <>
              <div className="bg-white p-2 rounded-xl shadow-2xl">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                  <div className="flex-grow relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={CONTENT.cta.placeholder}
                      className="w-full pl-11 pr-4 py-3 bg-white text-slate-900 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-slate-400 focus:ring-0 font-medium placeholder-slate-400 h-full transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed h-14 sm:h-auto"
                  >
                    {status === 'loading' ? '...' : CONTENT.cta.button}
                  </button>
                </form>
              </div>
              <p className="mt-6 text-sm text-slate-800/80">
                {CONTENT.cta.spamWarning}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};