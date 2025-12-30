'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { hoverGlow } from '@/components/animations/variants';

interface FeatureCardProps {
  title: string;
  category: string;
  image: string;
  slug: string;
  readingTime: string;
}

export default function FeatureCard({ title, category, image, slug, readingTime }: FeatureCardProps) {
  return (
    <Link href={`/story/${slug}`} className="block h-full w-full">
      <motion.div 
        initial="rest"
        whileHover="hover"
        variants={hoverGlow}
        className="relative h-full w-full overflow-hidden rounded-xl bg-bg-tertiary border border-border group"
      >
        {/* Background Placeholder (Gray) - Replaces Image for now to prevent errors */}
        <div className="absolute inset-0 z-0 bg-neutral-800 transition-transform duration-700 group-hover:scale-105" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent" />

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-end p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-accent-gold uppercase tracking-wider border border-accent-gold/30 px-2 py-0.5 rounded backdrop-blur-md">
              {category}
            </span>
            <span className="font-mono text-xs text-text-secondary">{readingTime}</span>
          </div>
          
          <h3 className="font-headline text-2xl md:text-3xl text-text-primary leading-tight group-hover:text-white transition-colors">
            {title}
          </h3>
          
          <div className="h-0.5 w-0 bg-accent-gold mt-4 transition-all duration-300 group-hover:w-full" />
        </div>
      </motion.div>
    </Link>
  );
}