import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Heart, Leaf, Award, Users } from 'lucide-react';

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

export default function About() {
  return (
    <div className="min-h-screen bg-[#FAF3E7] pt-24">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(111,78,55,0.07) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#6F4E37] text-xs tracking-[0.3em] uppercase font-sans mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-6xl md:text-8xl text-[#2C1A12] leading-tight mb-6"
          >
            Crafted with
            <br />
            <em className="text-[#6F4E37]">intention.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#2C1A12]/60 font-sans text-lg max-w-xl mx-auto leading-relaxed"
          >
            Velvet Crumb was born from a simple belief: that a truly great dessert
            should feel like a moment you never want to end.
          </motion.p>
        </div>
      </section>

      {/* Full image */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          loading="lazy"
          src="/images/cafe-interior.jpg"
          alt="Velvet Crumb Cafe Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(250,243,231,0.3), rgba(250,243,231,0.6))' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <blockquote className="text-center px-6">
            <p className="font-serif text-3xl md:text-5xl text-[#2C1A12] italic max-w-2xl">
              &ldquo;Every cake we bake carries the same care as the first.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Story content */}
      <section className="py-24 story-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <Reveal>
                <h2 className="font-serif text-4xl text-[#2C1A12]">How It All Began</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[#2C1A12]/60 font-sans leading-relaxed">
                  Velvet Crumb started in a small kitchen in Karachi, where a pastry chef with a dream
                  began baking cakes for friends and family. The response was immediate — people
                  didn't just enjoy the desserts, they remembered them.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-[#2C1A12]/60 font-sans leading-relaxed">
                  Word spread. Orders grew. And what began as a passion project became Velvet Crumb —
                  a full cafe experience built around the art of premium desserts and artisan coffee.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-[#2C1A12]/60 font-sans leading-relaxed">
                  Today, we serve hundreds of guests each week, but we haven't changed what
                  matters most: every item is made fresh, by hand, with the finest ingredients
                  we can source.
                </p>
              </Reveal>
            </div>

            <div className="space-y-8">
              <Reveal>
                <h2 className="font-serif text-4xl text-[#2C1A12]">Our Philosophy</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[#2C1A12]/60 font-sans leading-relaxed">
                  We believe that premium doesn't mean cold or distant. It means thoughtful.
                  It means choosing the right chocolate, the right flour, the right roast —
                  and then treating your guests like they deserve the best version of it.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-[#2C1A12]/60 font-sans leading-relaxed">
                  Our cafe is designed to feel warm, intimate, and inspiring. A place where
                  you can slow down, share something beautiful, and leave feeling a little
                  more indulged than when you arrived.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <p className="text-[#6F4E37] text-xs tracking-[0.3em] uppercase font-sans mb-3">What We Stand For</p>
            <h2 className="font-serif text-5xl text-[#2C1A12]">Our Values</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: 'Made with Love', desc: 'Every item is baked fresh by hand. No shortcuts, no compromises.' },
              { icon: Leaf, title: 'Premium Ingredients', desc: 'Belgian chocolate, local fruits, single-origin beans — only the finest.' },
              { icon: Award, title: 'Crafted Excellence', desc: 'Each recipe is tested, refined, and perfected before it reaches you.' },
              { icon: Users, title: 'Community First', desc: 'We exist to create moments worth sharing with the people you love.' },
            ].map((val, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="menu-card rounded-2xl p-7 h-full">
                  <div className="w-10 h-10 rounded-full border border-[#6F4E37]/30 flex items-center justify-center mb-5">
                    <val.icon size={18} className="text-[#6F4E37]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#2C1A12] mb-3">{val.title}</h3>
                  <p className="text-[#2C1A12]/50 text-sm font-sans leading-relaxed">{val.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 story-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '5+', label: 'Years of Craft' },
              { number: '50+', label: 'Menu Items' },
              { number: '10k+', label: 'Happy Guests' },
              { number: '100%', label: 'Handmade' },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div>
                  <p className="font-serif text-5xl text-[#6F4E37] mb-2">{stat.number}</p>
                  <p className="text-[#2C1A12]/50 text-xs font-sans tracking-widest uppercase">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
