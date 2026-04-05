import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star } from 'lucide-react';
import { menuItems, categories } from '../data/menu';
import type { MenuItem } from '../data/menu';
function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="card overflow-hidden group"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          loading="lazy"
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF3E7]/60 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap z-10">
          {item.isNew && <span className="tag font-bold">✨ New</span>}
          {item.tags.includes('Popular') && <span className="tag font-bold">🔥 Popular</span>}
          {item.tags.filter(t => t !== 'Popular' && t !== 'New').slice(0, 2).map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        {item.isSignature && (
          <div className="absolute top-3 right-3">
            <Star size={14} fill="#6F4E37" className="text-[#6F4E37]" />
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-serif text-lg text-[var(--text)] mb-1.5 leading-tight">{item.name}</h3>
        <p className="text-[var(--text)]/70 text-xs font-sans leading-relaxed mb-4 line-clamp-2">
          {item.description}
        </p>
        {item.pairing && (
          <p className="text-[#6F4E37]/60 text-xs font-sans italic mb-3">
            ✦ {item.pairing}
          </p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-[#6F4E37] font-sans font-medium text-base">
            Rs. {item.price.toLocaleString()}
          </span>
          <a
            href={`https://wa.me/923001234567?text=I'd like to order: ${encodeURIComponent(item.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans tracking-widest uppercase text-[#2C1A12]/40 hover:text-[#6F4E37] transition-colors"
          >
            Order
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [search, setSearch] = useState('');
  const [showSig, setShowSig] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filtered = menuItems.filter((item) => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    const matchSig = !showSig || item.isSignature;
    return matchCat && matchSearch && matchSig;
  });

  const handleCategory = (id: string) => {
    setActiveCategory(id);
    setSearchParams(id !== 'all' ? { category: id } : {});
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] pt-24">
      {/* Header */}
      <section className="py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 80% at 50% 0%, rgba(111,78,55,0.06) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#6F4E37] text-xs tracking-[0.3em] uppercase font-sans mb-3"
          >
            Handcrafted with Love
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-6xl md:text-7xl text-[#2C1A12] mb-4"
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#2C1A12]/50 font-sans max-w-md mx-auto"
          >
            Every item is made fresh, priced in PKR, and crafted to delight.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-16 z-30 py-4 nav-blur border-b border-[#2C1A12]/5" style={{ background: 'rgba(250,243,231,0.9)' }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Search */}
          <div className="flex gap-4 mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#2C1A12]/30" />
              <input
                type="text"
                placeholder="Search menu..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-[#2C1A12]/10 rounded-full text-[#2C1A12] text-sm font-sans placeholder-[#2C1A12]/30 focus:outline-none focus:border-[#6F4E37]/50 transition-colors"
              />
            </div>
            <button
              onClick={() => setShowSig(!showSig)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs font-sans tracking-widest uppercase transition-all ${
                showSig
                  ? 'bg-[#6F4E37] border-[#6F4E37] text-[#FAF3E7]'
                  : 'border-[#2C1A12]/10 text-[#2C1A12]/50 hover:border-[#6F4E37]/40 hover:text-[#6F4E37]'
              }`}
            >
              <Star size={12} fill={showSig ? '#FAF3E7' : 'none'} />
              Signature
            </button>
          </div>

          {/* Category Pills */}
          <div className="flex gap-2 overflow-x-auto scroll-x pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategory(cat.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-sans tracking-widest uppercase transition-all duration-300 border border-[var(--primary)]/20 ${
                  activeCategory === cat.id
                    ? 'category-active'
                    : 'text-[var(--text)]/70 hover:border-[var(--primary)]/40 hover:text-[var(--primary)]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="font-serif text-3xl text-[#2C1A12]/30 mb-2">Nothing found</p>
            <p className="text-[#2C1A12]/20 font-sans text-sm">Try a different search or category</p>
          </motion.div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-[#2C1A12]/5 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#2C1A12]/50 font-sans mb-4">Want to place a custom order or inquiry?</p>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#6F4E37] text-[#FAF3E7] text-sm font-sans font-medium tracking-widest uppercase rounded-full hover:bg-[#8A6245] transition-all duration-300"
          >
            Order via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
