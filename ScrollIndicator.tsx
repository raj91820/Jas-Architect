'use client';

import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-offwhite/40 font-light">
        Scroll to Explore
      </span>
      <div className="w-[22px] h-[36px] rounded-full border border-luxury-offwhite/20 p-1.5 flex justify-center">
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-1 h-1.5 rounded-full bg-luxury-gold"
        />
      </div>
    </div>
  );
}
