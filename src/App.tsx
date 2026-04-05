import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IntroReveal from './components/IntroReveal';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Specials from './pages/Specials';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import PageWrapper from './components/PageWrapper';
import { site } from './config/site';

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);

  return (
    <BrowserRouter>
      <div className="grain">
        <IntroReveal onComplete={handleIntroComplete} />
        {introComplete && (
          <>
            <ScrollToTop />
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<PageWrapper title="Home" description={site.tagline}><Home /></PageWrapper>} />
                <Route path="/menu" element={<PageWrapper title="Menu" description="Explore our handcrafted menu"><Menu /></PageWrapper>} />
                <Route path="/about" element={<PageWrapper title="About Us" description="Learn about our story"><About /></PageWrapper>} />
                <Route path="/specials" element={<PageWrapper title="Specials" description="Our signature specials"><Specials /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper title="Contact" description="Get in touch with us"><Contact /></PageWrapper>} />
                <Route path="*" element={<PageWrapper title="Page Not Found"><NotFound /></PageWrapper>} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </div>
    </BrowserRouter>
  );
}
