import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Instagram, 
  Youtube, 
  Music2, 
  ExternalLink, 
  Sparkles,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Mail,
  ShoppingBag,
  Calendar,
  MessageCircle
} from 'lucide-react';
import ProfileSection from '@/components/linkinbio/ProfileSection';
import LinkButton from '@/components/linkinbio/LinkButton';
import SocialIcons from '@/components/linkinbio/SocialIcons';
import AudioPlayer from '@/components/linkinbio/AudioPlayer';
import AnimatedBackground from '@/components/linkinbio/AnimatedBackground';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const links = [
    {
      id: 1,
      title: "🐦 Sígueme en Twitter / X",
      url: "https://twitter.com",
      icon: MessageCircle,
      highlight: true
    },
    {
      id: 2,
      title: "💻 GitHub - Mis Repositorios",
      url: "https://github.com",
      icon: ExternalLink
    },
    {
      id: 3,
      title: "📝 Mi Blog Personal",
      url: "https://blog.com",
      icon: Mail
    },
    {
      id: 4,
      title: "🚀 Mis Proyectos",
      url: "https://proyectos.com",
      icon: Sparkles
    }
  ];

  const socials = [
    { name: 'Twitter', icon: MessageCircle, url: 'https://twitter.com' },
    { name: 'GitHub', icon: ExternalLink, url: 'https://github.com' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a0a0a]">
      <AnimatedBackground />
      
      {/* Audio Player */}
      <AudioPlayer />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-start py-12 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md mx-auto"
        >
          {/* Profile Section */}
          <ProfileSection />

          {/* Links */}
          <motion.div 
            className="mt-8 space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {links.map((link, index) => (
              <LinkButton 
                key={link.id} 
                link={link} 
                index={index}
              />
            ))}
          </motion.div>

          {/* Social Icons */}
          <SocialIcons socials={socials} />

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-zinc-600 text-xs tracking-wider">
              POWERED BY ROCK 🤘
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}