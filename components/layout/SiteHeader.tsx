'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SiteHeader() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-bg-primary/80 backdrop-blur-md"
    >
      {/* Logo */}
      <Link href="/" className="font-headline text-xl font-bold tracking-tighter text-text-primary">
        AGENCY LAB<span className="text-accent-gold">.</span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8 font-mono text-sm text-text-secondary">
        <Link href="/issues" className="hover:text-text-primary transition-colors">ISSUES</Link>
        <Link href="/directory" className="hover:text-text-primary transition-colors">DIRECTORY</Link>
        <Link href="/about" className="hover:text-text-primary transition-colors">MANIFESTO</Link>
      </nav>

      {/* CTA Button */}
      <button className="px-5 py-2 text-xs font-bold text-bg-primary uppercase bg-white rounded-full hover:bg-accent-gold transition-colors">
        Subscribe
      </button>
    </motion.header>
  );
}