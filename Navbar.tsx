'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Disable navbar on sanity studio page
  if (pathname?.startsWith('/studio')) return null;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-luxury-black/90 backdrop-blur-md border-b border-luxury-light-gray py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-1.5">
            <span className="font-serif text-2xl md:text-3xl tracking-[0.15em] font-light text-luxury-offwhite group-hover:text-luxury-gold transition-colors duration-300">
              JAS
            </span>
            <span className="text-[10px] tracking-[0.45em] uppercase text-luxury-gold font-light font-sans mt-1">
              ARCHITECT
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-luxury-gold relative py-1 ${
                  pathname === link.path ? 'text-luxury-gold' : 'text-luxury-offwhite/70'
                }`}
              >
                {link.name}
                {pathname === link.path && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 border border-luxury-gold text-xs tracking-widest uppercase text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 flex items-center gap-2"
            >
              Inquire <ArrowUpRight size={14} />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-luxury-offwhite hover:text-luxury-gold transition-colors duration-300 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-luxury-black flex flex-col justify-center px-6 md:px-12 md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-serif text-3xl tracking-widest uppercase hover:text-luxury-gold transition-colors ${
                      pathname === link.path ? 'text-luxury-gold' : 'text-luxury-offwhite'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-6"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 px-8 py-3 border border-luxury-gold text-sm tracking-widest uppercase text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all"
                >
                  Book Consultation <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
