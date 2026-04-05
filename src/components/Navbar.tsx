import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { site } from '../config/site';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Specials', to: '/specials' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-blur border-b border-[#2C1A12]/5 py-3' : 'py-5'
        }`}
        style={scrolled ? { background: 'rgba(250,243,231,0.85)' } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full border border-[#6F4E37]/60 flex items-center justify-center">
              <span className="text-[#6F4E37] text-xs font-serif">V</span>
            </div>
            <span className="font-serif text-xl text-[var(--cream)] tracking-widest group-hover:text-[var(--primary)] transition-colors">
              {site.name}
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs tracking-[0.15em] uppercase font-sans transition-colors duration-300 ${
                  location.pathname === link.to
                    ? 'text-[#6F4E37]'
                    : 'text-[#2C1A12]/70 hover:text-[#2C1A12]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#6F4E37]/50 text-[#6F4E37] text-xs tracking-widest uppercase hover:bg-[#6F4E37] hover:text-[#FAF3E7] transition-all duration-300"
            >
              <MessageCircle size={13} />
              Order
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Mobile Menu"
            className="md:hidden text-[#2C1A12] hover:text-[#6F4E37] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6F4E37]/50 rounded-md p-1"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: 'rgba(250,243,231,0.97)' }}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.to}
                    className="font-serif text-4xl text-[#2C1A12] hover:text-[#6F4E37] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-2 px-6 py-3 rounded-full border border-[#6F4E37] text-[#6F4E37] text-sm tracking-widest uppercase"
              >
                <MessageCircle size={15} />
                Order via WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-[90vw] sm:max-w-xl z-50">
        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-4 py-3 sm:px-6 sm:py-4 rounded-full bg-[#6F4E37] text-[#FAF3E7] text-sm sm:text-base font-sans font-medium tracking-widest uppercase shadow-xl"
        >
          <MessageCircle size={15} />
          Order Now
        </a>
      </div>
    </>
  );
}
