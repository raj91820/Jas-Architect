'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();

  // Disable footer on sanity studio page
  if (pathname?.startsWith('/studio')) return null;

  return (
    <footer className="bg-luxury-gray border-t border-luxury-light-gray/40 text-luxury-offwhite/80 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Col 1: Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-1.5">
            <span className="font-serif text-3xl tracking-[0.15em] font-light text-luxury-offwhite">JAS</span>
            <span className="text-[10px] tracking-[0.45em] uppercase text-luxury-gold font-light font-sans mt-2">ARCHITECT</span>
          </Link>
          <p className="text-sm text-luxury-offwhite/50 leading-relaxed font-light mt-4">
            Bespoke architectural creations & luxury interior design. Elevating spaces into timeless spatial narratives.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-luxury-gold transition-colors duration-300" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:text-luxury-gold transition-colors duration-300" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="#" className="hover:text-luxury-gold transition-colors duration-300" aria-label="Facebook">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-lg text-luxury-offwhite tracking-wider font-semibold">Studio</h4>
          <ul className="flex flex-col gap-3 text-sm font-light mt-2">
            <li>
              <Link href="/" className="hover:text-luxury-gold transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-luxury-gold transition-colors duration-300">Portfolio</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-luxury-gold transition-colors duration-300">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-luxury-gold transition-colors duration-300">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Services */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-lg text-luxury-offwhite tracking-wider font-semibold">Services</h4>
          <ul className="flex flex-col gap-3 text-sm font-light mt-2">
            <li className="hover:text-luxury-gold transition-colors duration-300">Architectural Design</li>
            <li className="hover:text-luxury-gold transition-colors duration-300">3D Elevation Design</li>
            <li className="hover:text-luxury-gold transition-colors duration-300">Basic & 3D Nakshas</li>
            <li className="hover:text-luxury-gold transition-colors duration-300">Luxury Interior Curation</li>
            <li className="hover:text-luxury-gold transition-colors duration-300">Turnkey Execution</li>
          </ul>
        </div>

        {/* Col 4: Contact info */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-lg text-luxury-offwhite tracking-wider font-semibold">Contact</h4>
          <ul className="flex flex-col gap-3 text-sm font-light mt-2">
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-luxury-gold flex-shrink-0" />
              <span>+1 (800) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-luxury-gold flex-shrink-0" />
              <span>inquire@jasarchitect.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={14} className="text-luxury-gold mt-1 flex-shrink-0" />
              <span>120 Luxury Blvd, Suite 400, Beverly Hills, CA 90210</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-luxury-light-gray/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-luxury-offwhite/40">
        <div>
          &copy; {new Date().getFullYear()} JAS Architect. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-luxury-gold transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-luxury-gold transition-colors duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
