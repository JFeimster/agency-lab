'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const tags = ["All", "Fintech", "AI Agents", "Lending", "CRM", "Marketing"];

export default function FilterBar() {
  const [active, setActive] = useState("All");

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => setActive(tag)}
          className={cn(
            "relative px-4 py-2 text-sm font-mono uppercase tracking-wide rounded-full transition-colors",
            active === tag 
              ? "text-bg-primary" 
              : "text-text-secondary hover:text-text-primary"
          )}
        >
          {active === tag && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-accent-gold rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{tag}</span>
        </button>
      ))}
    </div>
  );
}