import React, { useState, useEffect } from 'react';

// --- COMPONENTS ---
import Header from './components/Header';
import About from './components/About';
import TechStack from './components/TechStack'; // <--- NEW IMPORT
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  // --- STATE FOR PRE-LOADER ---
  const [loading, setLoading] = useState(true);

  // Simulate loading time (2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='w-full overflow-hidden bg-[#0a192f]'>

      {loading ? (
        // --- LOADING SCREEN ---
        <div className="h-screen w-full flex flex-col justify-center items-center bg-[#0a192f]">
          <div className="w-20 h-20 border-4 border-[#112240] border-t-[#00df9a] rounded-full animate-spin shadow-[0_0_15px_#00df9a]"></div>
          <h2 className="mt-4 text-white font-bold text-xl tracking-widest animate-pulse">
            INITIALIZING <span className="text-[#00df9a]">FLUX</span>...
          </h2>
        </div>
      ) : (
        // --- ACTUAL WEBSITE CONTENT ---
        <>
          <Header />
          <About />
          <TechStack />     {/* <--- ADDED HERE */}
          <Services />
          <Testimonials />
          <Team />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
  );
};

export default App;