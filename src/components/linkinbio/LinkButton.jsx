import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function LinkButton({ link, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: 0.5 + index * 0.08,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative block group"
    >
      {/* Background glow on hover */}
      <motion.div
        className={`absolute -inset-1 rounded-2xl ${
          link.highlight 
            ? 'bg-gradient-to-r from-red-600 to-orange-500' 
            : 'bg-gradient-to-r from-zinc-700 to-zinc-600'
        } opacity-0 blur-lg transition-opacity duration-300`}
        animate={{ opacity: isHovered ? 0.5 : 0 }}
      />

      {/* Button */}
      <motion.div
        className={`relative flex items-center justify-between px-5 py-4 rounded-xl border transition-all duration-300 ${
          link.highlight
            ? 'bg-gradient-to-r from-red-600/10 to-orange-500/10 border-red-600/30 hover:border-red-500/60'
            : 'bg-zinc-900/80 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/80'
        }`}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        {/* Icon */}
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`p-2 rounded-lg ${
              link.highlight 
                ? 'bg-gradient-to-br from-red-600 to-orange-500' 
                : 'bg-zinc-800'
            }`}
          >
            <link.icon className="w-4 h-4 text-white" />
          </motion.div>
          
          {/* Title */}
          <span className={`font-medium text-sm ${
            link.highlight ? 'text-white' : 'text-zinc-200'
          }`}>
            {link.title}
          </span>
        </div>

        {/* Arrow */}
        <motion.div
          animate={{ x: isHovered ? 3 : 0, opacity: isHovered ? 1 : 0.5 }}
          transition={{ duration: 0.2 }}
        >
          <ExternalLink className={`w-4 h-4 ${
            link.highlight ? 'text-orange-400' : 'text-zinc-500'
          }`} />
        </motion.div>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 rounded-xl overflow-hidden"
          initial={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full"
            animate={{ x: isHovered ? '200%' : '-100%' }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.a>
  );
}