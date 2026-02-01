import { motion } from 'framer-motion';
import { Radar, Cpu, DollarSign, Network, ChevronDown } from 'lucide-react';

const features = [
  {
    title: "Passive Acoustic Monitoring Based",
    description: "Compatible with pre-existing hydrophone deployments, our technology is compatible with IQOE standard hydrophones, and are designed to be deployed on similar resource-constrained environments.",
    icon: <Radar className="h-6 w-6 text-white" />
  },
  {
    title: "Frontier Artificial Intelligence Models",
    description: "State-of-the-art acoustic-based detection, classification, localization, and tracking of vessels, robust to highly variable maritime environments, and designed to be deployed in low-power and bandwidth constrained environments.",
    icon: <Cpu className="h-6 w-6 text-white" />
  },
  {
    title: "Cost-Effective Compute",
    description: "Thalios Edge is designed to run on inexpensive compute boards, leading to cost-effective scalability to multiple deployments.",
    icon: <DollarSign className="h-6 w-6 text-white" />
  },
  {
    title: "Multi-Node Scaling",
    description: "Our technology has multi-node mesh network capabilities, leading to higher granularity of vessel monitoring that scales effectively.",
    icon: <Network className="h-6 w-6 text-white" />
  }
];

export default function About() {
  return (
    <section id="about" className="min-h-screen py-12 bg-gradient-to-b from-[#0c4a6e]/40 to-[#0f172a] relative flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our Flagship Technology 
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Introducing <span className="font-bold text-white">Thalios Edge</span>, an end-to-end solution for scalable, low-power, AI based vessel detection, classification, localization, and tracking. 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mt-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1e293b]/80 rounded-xl p-6 border border-gray-800 hover:border-[#14b8a6]/30 transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-[#0d9488] to-[#0284c7] text-white">
                    {feature.icon}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">{feature.title}</h3>
                  <p className="mt-2 text-gray-300">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors hidden md:block"
      >
        <ChevronDown className="h-10 w-10" />
      </motion.a>
    </section>
  );
}
