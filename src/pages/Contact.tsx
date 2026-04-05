import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, MessageCircle, Instagram, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // Replace with your Web3Forms access key
          ...form
        })
      });
      if (response.ok) {
        setSubmitted(true);
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] pt-24">
      {/* Header */}
      <section className="py-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#6F4E37] text-xs tracking-[0.3em] uppercase font-sans mb-3"
        >
          We'd Love to Hear From You
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-6xl md:text-7xl text-[var(--text)]"
        >
          Contact Us
        </motion.h1>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="h-64 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.4!2d67.0822!3d24.9215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU1JzE3LjQiTiA2N8KwMDQnNTYuMCJF!5e0!3m2!1sen!2spk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.5)' }}
                allowFullScreen
                loading="lazy"
                title="Velvet Crumb Location"
              />
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={15} className="text-[#6F4E37]" />
                  <span className="text-[#6F4E37] text-xs tracking-widest uppercase font-sans">Address</span>
                </div>
                <p className="text-[#2C1A12]/70 text-sm font-sans leading-relaxed">
                  12 Gulshan-e-Iqbal<br />Block 7, Karachi<br />Pakistan
                </p>
              </div>

              <div className="card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={15} className="text-[#6F4E37]" />
                  <span className="text-[#6F4E37] text-xs tracking-widest uppercase font-sans">Hours</span>
                </div>
                <div className="text-[#2C1A12]/70 text-sm font-sans space-y-1">
                  <p>Mon–Thu: 11am – 11pm</p>
                  <p>Fri–Sat: 11am – 1am</p>
                  <p>Sunday: 12pm – 11pm</p>
                </div>
              </div>

              <div className="card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Phone size={15} className="text-[#6F4E37]" />
                  <span className="text-[#6F4E37] text-xs tracking-widest uppercase font-sans">Phone</span>
                </div>
                <a href="tel:+923001234567" className="text-[#2C1A12]/70 text-sm font-sans hover:text-[#6F4E37] transition-colors">
                  +92 300 123 4567
                </a>
              </div>

              <div className="card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <MessageCircle size={15} className="text-[#6F4E37]" />
                  <span className="text-[#6F4E37] text-xs tracking-widest uppercase font-sans">Socials</span>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/923001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#2C1A12]/60 text-sm font-sans hover:text-[#6F4E37] transition-colors"
                  >
                    <MessageCircle size={13} /> WhatsApp
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#2C1A12]/60 text-sm font-sans hover:text-[#6F4E37] transition-colors"
                  >
                    <Instagram size={13} /> Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl border border-[#6F4E37]/30 text-[#6F4E37] font-sans text-sm tracking-widest uppercase hover:bg-[#6F4E37] hover:text-[#FAF3E7] transition-all duration-300 group"
            >
              <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 card"
              >
                <div className="w-16 h-16 rounded-full border border-[#6F4E37]/40 flex items-center justify-center mb-6">
                  <Send size={24} className="text-[#6F4E37]" />
                </div>
                <h3 className="font-serif text-3xl text-[var(--text)] mb-3">Message Sent!</h3>
                <p className="text-[#2C1A12]/60 font-sans leading-relaxed">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === "error" && <p className="text-red-500 text-sm">Something went wrong</p>}
                {status === "success" && <p className="text-green-500 text-sm">Message sent!</p>}
                <div>
                  <label className="block text-[var(--primary)] text-xs tracking-widest uppercase font-sans mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    name="name"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-5 py-3.5 bg-white/5 border border-[#2C1A12]/10 rounded-xl text-[var(--text)] font-sans placeholder-[var(--text)]/40 focus:outline-none focus:border-[var(--primary)]/50 transition-colors"
                    placeholder="Aisha Khan"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[var(--primary)] text-xs tracking-widest uppercase font-sans mb-2">Phone</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      name="phone"
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-5 py-3.5 bg-white/5 border border-[#2C1A12]/10 rounded-xl text-[var(--text)] font-sans placeholder-[var(--text)]/40 focus:outline-none focus:border-[var(--primary)]/50 transition-colors"
                      placeholder="+92 300..."
                    />
                  </div>
                  <div>
                    <label className="block text-[var(--primary)] text-xs tracking-widest uppercase font-sans mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      name="email"
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-5 py-3.5 bg-white/5 border border-[#2C1A12]/10 rounded-xl text-[var(--text)] font-sans placeholder-[var(--text)]/40 focus:outline-none focus:border-[var(--primary)]/50 transition-colors"
                      placeholder="hello@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[var(--primary)] text-xs tracking-widest uppercase font-sans mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    name="message"
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-5 py-3.5 bg-white/5 border border-[#2C1A12]/10 rounded-xl text-[var(--text)] font-sans placeholder-[var(--text)]/40 focus:outline-none focus:border-[var(--primary)]/50 transition-colors resize-none"
                    placeholder="I'd like to inquire about a custom cake for a birthday..."
                  />
                </div>
                
                {/* Advanced Web3Forms Honeypot Spam Validation */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <button
                  type="submit"
                  disabled={loading}
                  className="btn w-full flex items-center justify-center gap-3 font-medium text-sm tracking-widest uppercase hover:opacity-80 disabled:opacity-60 transition-all duration-300"
                >
                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-[#FAF3E7]/30 border-t-[#FAF3E7] rounded-full"
                    />
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
