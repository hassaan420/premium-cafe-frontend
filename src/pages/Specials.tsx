import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Clock } from 'lucide-react';
import { special, menuItems } from '../data/menu';

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const newItems = menuItems.filter((m) => m.isNew);
const signatureItems = menuItems.filter((m) => m.isSignature).slice(0, 6);

export default function Specials() {
  return (
    <div className="min-h-screen bg-[#FAF3E7] pt-24">
      {/* Header */}
      <section className="py-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#6F4E37] text-xs tracking-[0.3em] uppercase font-sans mb-3"
        >
          Limited & Seasonal
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-6xl md:text-7xl text-[#2C1A12]"
        >
          Specials
        </motion.h1>
      </section>

      {/* Hero Special */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FAF3E7 0%, #FAF3E7 50%, #FAF3E7 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 50% 80% at 70% 50%, rgba(111,78,55,0.1) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="tag">{special.badge}</span>
                  <div className="flex items-center gap-1.5 text-[#2C1A12]/40 text-xs font-sans">
                    <Clock size={11} />
                    <span>This week only</span>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[#6F4E37] text-xs tracking-[0.3em] uppercase font-sans">{special.subtitle}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <h2 className="font-serif text-5xl text-[#2C1A12] leading-tight">{special.title}</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-[#2C1A12]/60 font-sans leading-relaxed">{special.description}</p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-[#2C1A12]/40 text-xs font-sans tracking-widest uppercase">Whole cake from</p>
                    <p className="font-serif text-4xl text-[#6F4E37]">Rs. {special.price.toLocaleString()}</p>
                  </div>
                  <a
                    href={`https://wa.me/923001234567?text=I'd like to order the ${encodeURIComponent(special.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#6F4E37] text-[#FAF3E7] text-sm font-sans font-medium tracking-widest uppercase rounded-full hover:bg-[#8A6245] transition-all"
                  >
                    Order Now
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal className="flex justify-center">
              <img
                src={special.image}
                alt={special.title}
                className="w-full max-w-sm float-anim"
                style={{ filter: 'drop-shadow(0 30px 60px rgba(111,78,55,0.25))' }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      {newItems.length > 0 && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="mb-12">
              <p className="text-[#6F4E37] text-xs tracking-[0.3em] uppercase font-sans mb-3">Just Arrived</p>
              <h2 className="font-serif text-5xl text-[#2C1A12]">New on the Menu</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newItems.map((item, i) => (
                <Reveal key={item.id} delay={i * 0.1}>
                  <div className="menu-card rounded-2xl overflow-hidden card-glow group">
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="tag bg-[#6F4E37]/20 border-[#6F4E37]/40 text-[#6F4E37]">New</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif text-lg text-[#2C1A12] mb-1">{item.name}</h3>
                      <p className="text-[#2C1A12]/50 text-xs font-sans leading-relaxed mb-4 line-clamp-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#6F4E37] font-sans font-medium">Rs. {item.price.toLocaleString()}</span>
                        <a
                          href={`https://wa.me/923001234567?text=I'd like to try the new ${encodeURIComponent(item.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-sans tracking-widest uppercase text-[#2C1A12]/40 hover:text-[#6F4E37] transition-colors"
                        >
                          Order
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Signature Collection */}
      <section className="py-24 story-bg">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-12">
            <p className="text-[#6F4E37] text-xs tracking-[0.3em] uppercase font-sans mb-3">Always Available</p>
            <h2 className="font-serif text-5xl text-[#2C1A12]">Signature Collection</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signatureItems.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08}>
                <div className="flex gap-4 items-center p-4 menu-card rounded-2xl hover:border-[#6F4E37]/30 transition-all group">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-base text-[#2C1A12] mb-1 truncate">{item.name}</h3>
                    <p className="text-[#2C1A12]/40 text-xs font-sans line-clamp-2 mb-2">{item.description}</p>
                    <span className="text-[#6F4E37] font-sans text-sm">Rs. {item.price.toLocaleString()}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
