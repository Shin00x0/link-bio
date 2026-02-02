import React from 'react';
import { motion } from 'framer-motion';

export default function SocialIcons({ socials }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="mt-10 flex items-center justify-center gap-4"
    >
      {socials.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: 1 + index * 0.1,
            type: "spring",
            stiffness: 400,
            damping: 10
          }}
          whileHover={{ 
            scale: 1.15,
            y: -3,
          }}
          whileTap={{ scale: 0.9 }}
          className="relative group"
        >
          {/* Glow effect */}
          <motion.div
            className="absolute -inset-2 bg-gradient-to-r from-red-600 to-orange-500 rounded-full opacity-0 blur-md group-hover:opacity-50 transition-opacity duration-300"
          />
          
          {/* Icon container */}
          <div className="relative p-3 bg-zinc-900 border border-zinc-800 rounded-full group-hover:border-red-600/50 transition-colors duration-300">
            <social.icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />
          </div>

          {/* Tooltip */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-zinc-500 whitespace-nowrap"
          >
            {social.name}
          </motion.span>
        </motion.a>
      ))}
    </motion.div>
  );
}