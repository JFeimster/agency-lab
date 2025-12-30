'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/components/animations/variants';

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-bg-primary">
      {/* Ambient Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-[120px] animate-blob mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-gold/10 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-col items-center gap-6"
        >
          {/* Tagline */}
          <span className="font-mono text-accent-gold text-xs tracking-[0.2em] uppercase border border-accent-gold/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            The Playbook for Funding Agencies
          </span>

          {/* Editorial Headline */}
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-text-primary leading-[0.9]">
            AGENCY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-text-secondary to-text-primary">
              LAB.
            </span>
          </h1>

          {/* Subheader */}
          <p className="font-body text-text-secondary text-lg md:text-xl max-w-2xl font-light">
            Luxury-futurism insights for brokers scaling to $10M+. 
            Frameworks, case studies, and automated finance workflows.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-text-muted to-transparent" />
      </motion.div>
    </section>
  );
}