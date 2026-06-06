'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Project } from '@/lib/mockData';
import { urlFor } from '@/lib/sanity';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Resolve image source (string for fallback mock data, build url for Sanity image object)
  const imageUrl = typeof project.mainImage === 'string'
    ? project.mainImage
    : project.mainImage?.asset
      ? urlFor(project.mainImage).url()
      : 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80';

  return (
    <Link href={`/projects/${project.slug}`} className="group block overflow-hidden relative bg-luxury-gray border border-luxury-light-gray/20">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {/* Project Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="relative w-full h-full"
        >
          <img
            src={imageUrl}
            alt={project.title}
            className="w-full h-full object-cover filter brightness-[0.85] group-hover:brightness-[0.65] transition-all duration-500"
            loading="lazy"
          />
        </motion.div>

        {/* Absolute Overlay Details */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 bg-gradient-to-t from-luxury-black/90 via-luxury-black/10 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
          {/* Top Tag */}
          <div className="self-end transform translate-y-[-10px] md:group-hover:translate-y-0 transition-transform duration-500">
            <span className="bg-luxury-black/95 backdrop-blur-sm border border-luxury-gold/30 text-luxury-gold px-3.5 py-1 text-[10px] uppercase tracking-widest font-semibold">
              {project.category}
            </span>
          </div>

          {/* Bottom details */}
          <div className="flex justify-between items-end gap-4">
            <div className="flex flex-col gap-1.5 transform translate-y-[10px] md:group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-serif text-xl md:text-2xl text-luxury-offwhite font-medium leading-tight">
                {project.title}
              </h3>
              {project.location && (
                <div className="flex items-center gap-1.5 text-xs text-luxury-offwhite/60 font-light">
                  <MapPin size={12} className="text-luxury-gold flex-shrink-0" />
                  <span>{project.location}</span>
                  {project.area && (
                    <>
                      <span className="mx-1">•</span>
                      <span>{project.area}</span>
                    </>
                  )}
                </div>
              )}
            </div>
            
            <div className="w-10 h-10 rounded-full border border-luxury-gold/50 flex items-center justify-center text-luxury-gold bg-luxury-black/50 hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 transform scale-90 md:scale-75 md:group-hover:scale-100">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
