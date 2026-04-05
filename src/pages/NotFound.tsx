import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md"
      >
        <span className="text-[var(--primary)] font-serif text-8xl md:text-9xl mb-4 block opacity-80">
          404
        </span>
        <h1 className="font-serif text-4xl text-[var(--text)] mb-4">
          Oops! Looks like we've dropped the cake.
        </h1>
        <p className="text-[#2C1A12]/60 font-sans mb-8">
          The page you are looking for doesn't exist or has been moved. Let's get you back to safety.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--primary)] text-white text-sm font-sans font-medium tracking-widest uppercase rounded-full hover:opacity-90 transition-all duration-300"
        >
          <Home size={16} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
