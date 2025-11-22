import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { AboutSection } from './components/AboutSection';
import { FooterCTA } from './components/FooterCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <AboutSection />
        <FooterCTA />
      </main>
      <footer className="bg-brand-dark text-gray-400 py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Neuro-Allianz Mecklenburg-Vorpommern. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
};

export default App;