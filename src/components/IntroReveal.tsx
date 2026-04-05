import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '../config/site';

interface IntroRevealProps {
  onComplete: () => void;
}

export default function IntroReveal({ onComplete }: IntroRevealProps) {
  const [phase, setPhase] = useState<'show' | 'lift' | 'done'>('show');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('lift'), 2500);
    const t2 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center intro-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: 'easeInOut' }}
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(111,78,55,0.12) 0%, transparent 70%)',
            }}
          />

          {/* Rotating ring */}
          <motion.div
            className="absolute w-48 h-48 rounded-full border border-[#6F4E37]/10 spin-slow"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'show' ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute w-64 h-64 rounded-full border border-[#6F4E37]/5 spin-slow"
            style={{ animationDirection: 'reverse', animationDuration: '30s' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'show' ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Main title */}
          <motion.div
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: phase === 'show' ? 1 : 0,
              y: phase === 'lift' ? -80 : phase === 'show' ? 0 : -120,
            }}
            transition={{
              opacity: { duration: 1.2, ease: 'easeOut' },
              y: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
            }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="h-px bg-[#6F4E37]/40 mb-6 mx-auto w-16"
            />
            <p className="text-[#6F4E37] text-xs tracking-[0.4em] uppercase font-sans mb-3">
              Premium Dessert & Coffee
            </p>
            <h1 className="font-serif text-7xl md:text-9xl text-[#2C1A12] tracking-widest">
              {site.name}
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1.0 }}
              className="h-px bg-[#6F4E37]/40 mt-6 mx-auto w-16"
            />
          </motion.div>

          {/* Loading dots */}
          <motion.div
            className="absolute bottom-16 flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'show' ? 1 : 0 }}
            transition={{ delay: 1.5 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1 h-1 rounded-full bg-[#6F4E37]/50"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
