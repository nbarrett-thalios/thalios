import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import WavesAnimation from './WavesAnimation';

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen w-full flex items-center justify-center">
      {/* Wave animation background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <WavesAnimation 
          className="absolute inset-0 w-full h-full"
          baseColor={[0, 160, 255]}
          waveCount={12}
          amplitude={30}
          baseSpeed={0.005}
          waveSpacing={50}
          direction="left"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left side - Logo and Text content */}
          <div className="text-center lg:text-left max-w-xl w-full flex flex-col items-center lg:items-start">
            {/* Logo - left aligned */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-2"
            >
              <img src="/thalios logo_horizontal white.png" alt="Thalios Logo" className="h-20 sm:h-16 lg:h-20 w-auto lg:-ml-6" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="block text-3xl tracking-tight font-extrabold sm:text-4xl xl:text-5xl font-heading">
                <span className="block text-white">Frontier Artificial Intelligence</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#5eead4] to-[#38bdf8]">
                  For Maritime Situational Awareness
                </span>
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base text-gray-300 sm:text-lg lg:text-lg xl:text-xl max-w-lg"
            >
              We deliver an adaptable and power efficient acoustic-based vessel detection, classification, localization and, tracking solution for remote maritime settings.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex justify-center lg:justify-start space-x-4"
            >
              <div className="rounded-md shadow">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-[#0d9488] hover:bg-[#0f766e] text-white px-8 py-3 md:py-4 md:text-lg md:px-10"
                >
                  <a href="#waitlist">Join the Waitlist</a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right side - App screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:flex-[2] w-full max-w-5xl"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5eead4]/20 to-[#38bdf8]/20 rounded-xl blur-2xl" />
              <img
                src="/thalios-dashboard.png"
                alt="Thalios Dashboard"
                className="relative rounded-xl shadow-2xl border border-white/10 w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down arrow */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 0.5, duration: 0.5 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors hidden md:block"
      >
        <ChevronDown className="h-10 w-10" />
      </motion.a>
    </section>
  );
}
