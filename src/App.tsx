import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import RealCase from './components/RealCase';
import WhatIsAutodoc from './components/WhatIsAutodoc';
import TechDifferential from './components/TechDifferential';
import HowItWorks from './components/HowItWorks';
import Integrations from './components/Integrations';
import VideoDemo from './components/VideoDemo';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0f1419]">
      <Navbar />
      <Hero />
      <WhatIsAutodoc />
      <Problem />
      <RealCase />
      <TechDifferential />
      <HowItWorks />
      <VideoDemo />
      <Integrations />
      <FinalCTA />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
