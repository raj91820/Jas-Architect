'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/lib/mockData';
import ProjectCard from '@/components/ProjectCard';

interface PortfolioClientProps {
  initialProjects: Project[];
}

const CATEGORIES = ['All', 'Complete House', 'Interior', 'Exterior', 'Naksha'];

export default function PortfolioClient({ initialProjects }: PortfolioClientProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter projects. "Naksha" matches any project category that includes "Naksha"
  const filteredProjects = initialProjects.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Naksha') {
      return project.category.toLowerCase().includes('naksha');
    }
    return project.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-luxury-black text-luxury-offwhite pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-luxury-gold font-light">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-light font-serif mt-4 text-luxury-offwhite">
            Architectural Curations
          </h1>
          <p className="text-sm text-luxury-offwhite/50 font-light mt-4 leading-relaxed">
            Explore our collection of bespoke estates, customized room interiors, detailed elevations, and precision building plans (nakshas).
          </p>
        </div>

        {/* Categories Filter Bar */}
        <div className="flex flex-wrap gap-3 md:gap-6 border-b border-luxury-light-gray/25 pb-6 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs tracking-widest uppercase transition-all duration-300 py-2 px-4 border rounded-none cursor-pointer focus:outline-none ${
                activeCategory === cat
                  ? 'border-luxury-gold text-luxury-gold bg-luxury-gold/5'
                  : 'border-transparent text-luxury-offwhite/55 hover:text-luxury-offwhite'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid with Framer Motion layout animations */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ duration: 0.45 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-luxury-offwhite/40 text-sm font-light">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
