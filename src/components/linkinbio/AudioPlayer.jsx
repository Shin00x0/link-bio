import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Music2 } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  // Megadeth - Hey God (preview/sample URL - you may need to replace with actual audio)
  const audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const handlePlay = () => {
    setHasInteracted(true);
    setShowPrompt(false);
    
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log('Audio play failed:', e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleStartPlaying = () => {
    setShowPrompt(false);
    setHasInteracted(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log('Audio play failed:', e));
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Audio element */}
      <audio 
        ref={audioRef} 
        src={audioUrl} 
        loop 
        preload="auto"
      />

      {/* Initial prompt */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={handleStartPlaying}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-center cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleStartPlaying();
              }}
            >
              {/* Pulsing rings */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-red-600/50"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-orange-500/50"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-600 to-orange-500 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-12 h-12 text-white ml-2" />
                </motion.div>
              </div>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-white text-xl font-bold mb-2"
              >
                🎸 Tornado of Souls - Megadeth
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-zinc-400 text-sm"
              >
                Tap to enter with music
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-zinc-600 text-xs mt-4"
              >
                or tap anywhere to skip
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating player */}
      {hasInteracted && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40"
        >
          <motion.div
            className="flex items-center gap-3 px-4 py-2.5 bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-full"
            whileHover={{ scale: 1.02 }}
          >
            {/* Album art / visualizer */}
            <motion.div
              className="relative w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center"
              animate={isPlaying ? { rotate: 360 } : {}}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Music2 className="w-4 h-4 text-white" />
            </motion.div>

            {/* Song info */}
            <div className="hidden sm:block">
              <p className="text-white text-xs font-medium">Tornado of Souls</p>
              <p className="text-zinc-500 text-[10px]">Megadeth</p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1">
              <motion.button
                onClick={handlePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-zinc-800 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 text-white" />
                ) : (
                  <Play className="w-4 h-4 text-white ml-0.5" />
                )}
              </motion.button>
              
              <motion.button
                onClick={toggleMute}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-zinc-800 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-zinc-500" />
                ) : (
                  <Volume2 className="w-4 h-4 text-zinc-400" />
                )}
              </motion.button>
            </div>

            {/* Playing indicator */}
            {isPlaying && (
              <div className="flex items-center gap-0.5 ml-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 bg-gradient-to-t from-red-600 to-orange-500 rounded-full"
                    animate={{
                      height: [4, 12, 4],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}