'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollIndicator from './ScrollIndicator';

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
    title: 'Bespoke Architectural Masterpieces',
    subtitle: 'Crafting spaces that capture light, geometry, and luxury.',
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80',
    title: 'Curated Luxury Interior Spaces',
    subtitle: 'Where minimalist aesthetics meet supreme functional comfort.',
  },
  {
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=80',
    title: 'Timeless Architectural Drawings',
    subtitle: 'Precision layouts and 3D elevations built with grand vision.',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-luxury-black flex items-center justify-center">
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_SLIDES[current].image})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 via-transparent to-luxury-black" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center h-full pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="flex flex-col items-center gap-6"
          >
            <span className="text-xs md:text-sm tracking-[0.4em] uppercase text-luxury-gold font-light">
              JAS ARCHITECT
            </span>
            <h1 className="text-4xl md:text-7xl font-light text-luxury-offwhite leading-tight font-serif tracking-tight max-w-4xl">
              {HERO_SLIDES[current].title}
            </h1>
            <p className="text-sm md:text-lg text-luxury-offwhite/70 max-w-2xl font-light tracking-wide leading-relaxed">
              {HERO_SLIDES[current].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link
                href="/portfolio"
                className="group px-8 py-3.5 bg-luxury-gold text-luxury-black text-xs font-semibold tracking-widest uppercase hover:bg-luxury-gold-dark hover:text-luxury-offwhite transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Portfolio
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 border border-luxury-offwhite/20 text-luxury-offwhite text-xs font-semibold tracking-widest uppercase hover:border-luxury-gold hover:text-luxury-gold transition-colors duration-300 text-center"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-28 left-0 w-full flex justify-center gap-3 z-20">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-500 cursor-pointer ${
              idx === current ? 'bg-luxury-gold w-8' : 'bg-luxury-offwhite/30 hover:bg-luxury-offwhite/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-0 w-full flex justify-center z-20">
        <ScrollIndicator />
      </div>
    </section>
  );
}
