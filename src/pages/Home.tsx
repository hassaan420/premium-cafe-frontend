import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Clock, ChevronRight } from 'lucide-react';
import { Suspense, lazy } from 'react';
import { menuItems, pairings, special } from '../data/menu';

const Hero3D = lazy(() => import('../components/Hero3D'));

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

function SectionReveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const categoryCards = [
  { id: 'cakes', label: 'Cakes', img: '/images/hero-cake.jpg', desc: 'Handcrafted layer cakes' },
  { id: 'cheesecakes', label: 'Cheesecakes', img: '/images/cheesecake.jpg', desc: 'Velvety smooth perfection' },
  { id: 'brownies', label: 'Brownies', img: '/images/brownie.jpg', desc: 'Rich fudgy indulgence' },
  { id: 'pies', label: 'Pies & Pancakes', img: '/images/pancakes.jpg', desc: 'Artisan pies & fluffy stacks' },
  { id: 'shakes', label: 'Shakes', img: '/images/shake.jpg', desc: 'Thick creamy milkshakes' },
  { id: 'coffee', label: 'Coffee', img: '/images/coffee.jpg', desc: 'Specialty brewed coffees' },
];

const signatureItems = menuItems.filter((m) => m.isSignature).slice(0, 4);

export default function Home() {
  return (
    <div className="bg-[var(--bg)] min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[100dvh] lg:min-h-screen flex items-center overflow-hidden pt-28 pb-32 lg:pt-0 lg:pb-0">
        {/* Background Gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 80% at 70% 50%, rgba(90,58,46,0.35) 0%, rgba(250,243,231,0) 70%), radial-gradient(ellipse 60% 80% at 30% 50%, rgba(250,243,231,0.8) 0%, transparent 60%)',
          }}
        />

        {/* Desktop 3D Canvas - strictly fixed to right half */}
        <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full z-0">
          <Suspense fallback={null}>
            <Hero3D />
          </Suspense>
        </div>

        {/* Content Container - Flex Stack on Mobile, Flex Row on Desktop */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:items-stretch lg:min-h-screen">
          
          {/* Left: Text Block */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center pt-4 lg:pt-32">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 0.5 }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.9, duration: 0.6 }}
                className="text-[#6F4E37] text-xs tracking-[0.3em] uppercase font-sans mb-4"
              >
                Premium Dessert & Coffee
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.0, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[var(--text)] leading-[0.95] mb-6"
              >
                Velvet<br/>
                <em className="text-[var(--accent)] font-normal not-italic">Crumb</em>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.2, duration: 0.6 }}
                className="text-[var(--text)]/80 text-base md:text-lg font-sans max-w-md mb-8 leading-relaxed font-medium"
              >
                Fresh brews. Sweet cravings. Cozy vibes.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/menu"
                  className="btn flex items-center justify-center gap-2 tracking-widest uppercase transition-all duration-300 group w-full sm:w-auto"
                >
                  Explore Menu
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 px-7 py-3.5 border border-[#2C1A12]/20 text-[#2C1A12]/80 text-sm font-sans tracking-widest uppercase rounded-full hover:border-[#6F4E37]/50 hover:text-[#6F4E37] transition-all duration-300 w-full sm:w-auto"
                >
                  Visit Us
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Mobile Image Fallback (Hidden on Desktop) */}
          <div className="w-full sm:max-w-md lg:hidden relative mt-16 z-10 w-full mx-auto">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 3.6, duration: 0.8 }}
               className="aspect-[4/5] sm:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl relative border border-[#6F4E37]/10"
            >
               <img loading="lazy" src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&fm=webp&fit=crop" alt="Velvet Crumb Cakes" className="w-full h-full object-cover" />
            </motion.div>
          </div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8, duration: 0.6 }}
          className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-[#2C1A12]/30 text-xs tracking-widest uppercase font-sans">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-[#6F4E37]/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* CATEGORIES CAROUSEL */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <SectionReveal>
            <p className="text-[#6F4E37] text-xs tracking-[0.3em] uppercase font-sans mb-3">What We Offer</p>
            <h2 className="font-serif text-5xl text-[#2C1A12]">Our Specialties</h2>
          </SectionReveal>
        </div>

        <div className="flex gap-5 px-6 overflow-x-auto scroll-x pb-4">
          {categoryCards.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="shrink-0 w-64 md:w-72 group cursor-pointer"
            >
              <Link to={`/menu?category=${cat.id}`}>
                <div className="relative h-80 rounded-2xl overflow-hidden card-glow">
                  <img
                    loading="lazy"
                    src={cat.img}
                    alt={cat.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FAF3E7] via-[#FAF3E7]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-serif text-2xl text-[#2C1A12] mb-1">{cat.label}</h3>
                    <p className="text-[#2C1A12]/60 text-xs font-sans">{cat.desc}</p>
                    <div className="flex items-center gap-1 mt-3 text-[#6F4E37] text-xs font-sans tracking-widest uppercase">
                      <span>Explore</span>
                      <ChevronRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-24 story-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div className="relative">
                <img
                  loading="lazy"
                  src="/images/cafe-interior.jpg"
                  alt="Velvet Crumb Cafe Interior"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl overflow-hidden border-2 border-[#6F4E37]/30">
                  <img loading="lazy" src="/images/signature-cake.png" alt="Signature" className="w-full h-full object-cover" />
                </div>
                {/* Floating badge */}
                <div className="absolute -top-4 -left-4 bg-[#6F4E37] rounded-2xl px-5 py-3">
                  <p className="text-[#FAF3E7] font-serif text-2xl font-bold">5+</p>
                  <p className="text-[#FAF3E7] text-xs font-sans">Years of Craft</p>
                </div>
              </div>
            </SectionReveal>

            <div className="space-y-6">
              <SectionReveal>
                <p className="text-[#6F4E37] text-xs tracking-[0.3em] uppercase font-sans">Our Story</p>
              </SectionReveal>
              <SectionReveal>
                <h2 className="font-serif text-5xl md:text-6xl text-[#2C1A12] leading-tight">
                  Born from a
                  <br />
                  <em>passion</em> for
                  <br />
                  perfection.
                </h2>
              </SectionReveal>
              <SectionReveal>
                <p className="text-[#2C1A12]/60 font-sans leading-relaxed">
                  Velvet Crumb began with a single belief: that a dessert should feel like an event.
                  Every cake we bake, every cup we brew, carries the same care and intention
                  as the first one we ever made.
                </p>
              </SectionReveal>
              <SectionReveal>
                <p className="text-[#2C1A12]/60 font-sans leading-relaxed">
                  We source premium Belgian chocolate, locally grown fruits, and single-origin
                  coffee beans. Our recipes are tested, refined, and crafted by hand — never
                  rushed, never compromised.
                </p>
              </SectionReveal>
              <SectionReveal>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-[#6F4E37] text-sm font-sans tracking-widest uppercase hover:gap-4 transition-all duration-300"
                >
                  Read Our Story <ArrowRight size={14} />
                </Link>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE ITEMS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#6F4E37] text-xs tracking-[0.3em] uppercase font-sans mb-3">Our Best</p>
              <h2 className="font-serif text-5xl text-[#2C1A12]">Signature Items</h2>
            </div>
            <Link
              to="/menu"
              className="hidden md:flex items-center gap-2 text-[#2C1A12]/50 text-sm font-sans tracking-widest uppercase hover:text-[#6F4E37] transition-colors"
            >
              Full Menu <ArrowRight size={14} />
            </Link>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {signatureItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="menu-card rounded-2xl overflow-hidden card-glow group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.tags.slice(0, 1).map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-[#2C1A12] mb-1 leading-tight">{item.name}</h3>
                  <p className="text-[#2C1A12]/50 text-xs font-sans leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6F4E37] font-sans font-medium">
                      Rs. {item.price.toLocaleString()}
                    </span>
                    {item.pairing && (
                      <span className="text-[#2C1A12]/30 text-xs font-sans">+pairing</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <SectionReveal className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#6F4E37]/40 text-[#6F4E37] text-sm font-sans tracking-widest uppercase rounded-full hover:bg-[#6F4E37] hover:text-[#FAF3E7] transition-all duration-300"
            >
              View Full Menu <ArrowRight size={14} />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* SPECIAL OF THE WEEK */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FAF3E7 0%, #FAF3E7 100%)' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 50% 80% at 70% 50%, rgba(111,78,55,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <SectionReveal>
                <span className="tag">{special.badge}</span>
              </SectionReveal>
              <SectionReveal>
                <p className="text-[#6F4E37] text-xs tracking-[0.3em] uppercase font-sans">{special.subtitle}</p>
              </SectionReveal>
              <SectionReveal>
                <h2 className="font-serif text-5xl text-[#2C1A12] leading-tight">{special.title}</h2>
              </SectionReveal>
              <SectionReveal>
                <p className="text-[#2C1A12]/60 font-sans leading-relaxed">{special.description}</p>
              </SectionReveal>
              <SectionReveal>
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-[#2C1A12]/40 text-xs font-sans tracking-widest uppercase">Starting at</p>
                    <p className="font-serif text-4xl text-[#6F4E37]">Rs. {special.price.toLocaleString()}</p>
                  </div>
                  <Link
                    to="/specials"
                    className="flex items-center gap-2 px-6 py-3 bg-[#6F4E37] text-[#FAF3E7] text-sm font-sans font-medium tracking-widest uppercase rounded-full hover:bg-[#8A6245] transition-all duration-300"
                  >
                    View Special
                  </Link>
                </div>
              </SectionReveal>
            </div>

            <SectionReveal className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'radial-gradient(ellipse at center, rgba(111,78,55,0.15) 0%, transparent 70%)' }} />
                <img
                  src={special.image}
                  alt={special.title}
                  className="w-full max-w-md mx-auto float-anim drop-shadow-2xl"
                  style={{ filter: 'drop-shadow(0 30px 60px rgba(111,78,55,0.2))' }}
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* COFFEE PAIRINGS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal className="text-center mb-14">
            <p className="text-[#6F4E37] text-xs tracking-[0.3em] uppercase font-sans mb-3">Curated Pairings</p>
            <h2 className="font-serif text-5xl text-[#2C1A12] mb-4">The Perfect Match</h2>
            <p className="text-[#2C1A12]/50 font-sans max-w-md mx-auto">
              Our team has curated ideal dessert and coffee pairings to elevate your experience.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pairings.map((pair, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="pairing-card rounded-2xl p-6 flex gap-5 items-center group hover:border-[#6F4E37]/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-14 h-14 rounded-xl overflow-hidden">
                    <img src={pair.dessertImage} alt={pair.dessert} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-[#6F4E37]/60 font-serif text-xl">+</div>
                  <div className="w-14 h-14 rounded-xl overflow-hidden">
                    <img src={pair.coffeeImage} alt={pair.coffee} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <p className="text-[#2C1A12] font-serif text-lg">
                    {pair.dessert} <span className="text-[#6F4E37]/60">&</span> {pair.coffee}
                  </p>
                  <p className="text-[#2C1A12]/50 text-xs font-sans mt-1 leading-relaxed">{pair.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 story-bg">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal className="text-center mb-14">
            <p className="text-[#6F4E37] text-xs tracking-[0.3em] uppercase font-sans mb-3">Loved By Many</p>
            <h2 className="font-serif text-5xl text-[#2C1A12]">What They Say</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Aisha K.', text: 'The blueberry cheesecake is absolutely divine. Worth every rupee. Velvet Crumb has become my go-to spot for celebrations.', stars: 5 },
              { name: 'Hamza R.', text: 'The Dark Mocha paired with the walnut cake — I have no words. Just perfection. The ambiance is just as impressive.', stars: 5 },
              { name: 'Sara M.', text: 'Ordered a custom cake for my sister\'s birthday and it was stunning. The team was incredibly professional and warm.', stars: 5 },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="menu-card rounded-2xl p-7"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, s) => (
                    <Star key={s} size={13} fill="#6F4E37" className="text-[#6F4E37]" />
                  ))}
                </div>
                <p className="text-[#2C1A12]/70 font-sans text-sm leading-relaxed mb-5 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-[#6F4E37] font-sans text-xs tracking-widest uppercase">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionReveal className="md:col-span-1">
              <p className="text-[#6F4E37] text-xs tracking-[0.3em] uppercase font-sans mb-3">Find Us</p>
              <h2 className="font-serif text-4xl text-[#2C1A12] mb-6">Come Visit</h2>
              <div className="space-y-4 text-[#2C1A12]/60 font-sans text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={15} className="text-[#6F4E37] mt-0.5 shrink-0" />
                  <span>12 Gulshan-e-Iqbal, Block 7, Karachi, Pakistan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={15} className="text-[#6F4E37]" />
                  <span>Mon–Sat 11am–11pm · Sun 12pm–11pm</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 border border-[#6F4E37]/40 text-[#6F4E37] text-sm font-sans tracking-widest uppercase rounded-full hover:bg-[#6F4E37] hover:text-[#FAF3E7] transition-all duration-300"
              >
                Get Directions <ArrowRight size={13} />
              </Link>
            </SectionReveal>

            <SectionReveal className="md:col-span-2">
              <div className="h-64 md:h-80 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.4!2d67.0822!3d24.9215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU1JzE3LjQiTiA2N8KwMDQnNTYuMCJF!5e0!3m2!1sen!2spk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.5)' }}
                  allowFullScreen
                  loading="lazy"
                  title="Velvet Crumb Cafe Location"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
