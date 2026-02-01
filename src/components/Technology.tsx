import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, Zap, RefreshCw, ChevronDown } from 'lucide-react';

export default function Technology() {
  return (
    <section id="technology" className="min-h-screen py-12 bg-gradient-to-b from-[#0f172a] to-[#020617] relative overflow-hidden flex items-center">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#0d9488]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[#0284c7]/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our Technology
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Our two-tier architecture combines efficient rule-based pre-detection with lightweight deep neural networks, optimized for Size, Weight, and Power (SWaP) constrained platforms.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#1e293b]/80 rounded-xl p-6 border border-gray-800 hover:border-[#14b8a6]/30 transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-[#0d9488] to-[#0284c7] text-white">
                    <Layers className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Two-Tier Detection</h3>
                  <p className="mt-2 text-gray-300">
                    Low-power rule-based pre-detection runs continuously, activating deep neural networks only when needed. This tiered approach drastically reduces average power consumption while maintaining high accuracy.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#1e293b]/80 rounded-xl p-6 border border-gray-800 hover:border-[#14b8a6]/30 transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-[#0d9488] to-[#0284c7] text-white">
                    <Cpu className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Edge-Optimized Inference</h3>
                  <p className="mt-2 text-gray-300">
                    Model compression through quantization, distillation, and pruning enables deployment on embedded hardware. All inference runs on lightweight frameworks optimized for SWaP-constrained platforms.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#1e293b]/80 rounded-xl p-6 border border-gray-800 hover:border-[#14b8a6]/30 transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-[#0d9488] to-[#0284c7] text-white">
                    <Zap className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Distributed Multi-Node</h3>
                  <p className="mt-2 text-gray-300">
                    Each node operates independently, sharing only minimal metadata for cooperative localization. No full spectrograms or raw audio transmitted, enabling scalable deployment in bandwidth-limited environments.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#1e293b]/80 rounded-xl p-6 border border-gray-800 hover:border-[#14b8a6]/30 transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-[#0d9488] to-[#0284c7] text-white">
                    <RefreshCw className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Adaptive Domain Transfer</h3>
                  <p className="mt-2 text-gray-300">
                    Transfer learning and Low-Rank Adaptation enable rapid deployment to new environments with minimal training data. Models adapt to site-specific acoustic profiles without full retraining.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll down arrow */}
      <motion.a
        href="#team"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: [0, 10, 0] }}
        viewport={{ once: true }}
        transition={{
          opacity: { duration: 0.5 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors"
      >
        <ChevronDown className="h-10 w-10" />
      </motion.a>
    </section>
  );
}
