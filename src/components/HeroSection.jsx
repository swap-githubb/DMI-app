import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const gradientVariants = {
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: 8,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        variants={gradientVariants}
        animate="animate"
        style={{
          background: 'linear-gradient(135deg, #e30613 0%, #ff4757 25%, #1e90ff 50%, #a29bfe 75%, #e30613 100%)',
          backgroundSize: '400% 400%',
        }}
      />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90" />
      
      {/* Animated particles/dots */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        

        {/* Logo/Brand */}
        <motion.div 
          className="mb-12 flex justify-center"
          variants={itemVariants}
        >
          <div className="w-16 h-16 bg-[#f52a35] rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/20">
            <span className="text-white font-bold text-2xl tracking-tighter">DMI</span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
          variants={itemVariants}
        >
          Design Made{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500">
            Intelligent
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          From brand kit to launch-ready content, websites & apps — powered by AI.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-red-500/25 transition-shadow duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Try the Demo
          </motion.button>
          
          <motion.button
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Join Waitlist
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;