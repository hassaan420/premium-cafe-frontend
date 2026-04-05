import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, MapPin, Clock, Phone } from 'lucide-react';
import { site } from '../config/site';

export default function Footer() {
  return (
    <footer className="border-t border-[#2C1A12]/10 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full border border-[var(--primary)]/60 flex items-center justify-center">
                <span className="text-[var(--primary)] font-serif">V</span>
              </div>
              <span className="font-serif text-2xl text-[#2C1A12] tracking-widest">{site.name}</span>
            </div>
            <p className="text-[#2C1A12]/60 text-sm leading-relaxed font-sans">
              {site.tagline}. Handcrafted with love in the heart of the city.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[#2C1A12]/10 flex items-center justify-center text-[#2C1A12]/50 hover:text-[#6F4E37] hover:border-[#6F4E37]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[#6F4E37]/50"
              >
                <Instagram size={15} />
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-[#2C1A12]/10 flex items-center justify-center text-[#2C1A12]/50 hover:text-[#6F4E37] hover:border-[#6F4E37]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[#6F4E37]/50"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#6F4E37] text-xs tracking-[0.2em] uppercase mb-5 font-sans">Navigate</h4>
            <ul className="space-y-3">
              {[['Home', '/'], ['Menu', '/menu'], ['About', '/about'], ['Specials', '/specials'], ['Contact', '/contact']].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-[#2C1A12]/50 text-sm hover:text-[#2C1A12] transition-colors font-sans">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-[#6F4E37] text-xs tracking-[0.2em] uppercase mb-5 font-sans">Hours</h4>
            <ul className="space-y-2 text-sm text-[#2C1A12]/50 font-sans">
              <li className="flex items-center gap-2"><Clock size={12} className="text-[#6F4E37]" /> Mon–Thu: 11am – 11pm</li>
              <li className="flex items-center gap-2"><Clock size={12} className="text-[#6F4E37]" /> Fri–Sat: 11am – 1am</li>
              <li className="flex items-center gap-2"><Clock size={12} className="text-[#6F4E37]" /> Sunday: 12pm – 11pm</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#6F4E37] text-xs tracking-[0.2em] uppercase mb-5 font-sans">Find Us</h4>
            <ul className="space-y-3 text-sm text-[#2C1A12]/50 font-sans">
              <li className="flex items-start gap-2">
                <MapPin size={13} className="text-[#6F4E37] mt-0.5 shrink-0" />
                <span>12 Gulshan-e-Iqbal, Block 7,<br />Karachi, Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={13} className="text-[#6F4E37]" />
                <span>{site.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={13} className="text-[#6F4E37]" />
                <a href={`https://wa.me/${site.whatsapp}`} className="hover:text-[#2C1A12] transition-colors">WhatsApp Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2C1A12]/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#2C1A12]/40 text-xs font-sans tracking-widest">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-[#2C1A12]/25 text-xs font-sans">
            Crafted with care &middot; Karachi, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
