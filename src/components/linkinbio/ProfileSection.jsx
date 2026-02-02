import React from 'react';
import { motion } from 'framer-motion';
import { Verified } from 'lucide-react';

export default function ProfileSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center"
    >
      {/* Avatar with glow effect */}
      <div className="relative">
        {/* Glow ring */}
        <motion.div
          className="absolute -inset-2 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-full opacity-75 blur-lg"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Avatar container */}
        <motion.div
          className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-zinc-800"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Verified badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 500 }}
          className="absolute -bottom-1 -right-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-full p-1.5"
        >
          <Verified className="w-4 h-4 text-white" />
        </motion.div>
      </div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-5 text-2xl font-bold text-white tracking-tight"
      >
        @tu_usuario
      </motion.h1>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-2 text-zinc-400 text-center text-sm leading-relaxed max-w-xs"
      >
        💻 Developer & Creator
        <br />
        <span className="text-zinc-500">Building cool stuff 🚀</span>
      </motion.p>
    </motion.div>
  );
}