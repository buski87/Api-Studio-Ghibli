'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedConstructionImage() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 5000); // 5 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-xl shadow-xl border border-cyan-500">
      <motion.img
        src="/images/film.png"
        alt="Ilustración en construcción"
        initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
        animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        className="w-full h-auto"
      />
      {showOverlay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"
        >
          <p className="text-white text-sm font-semibold">Construyendo escena...</p>
        </motion.div>
      )}
    </div>
  );
}
