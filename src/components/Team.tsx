import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ChevronDown } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  email: string;
  expertise: string;
  image: string;
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: 'Dr. Bruno Padovese',
      role: 'Principal Investigator',
      email: 'bruno.padovese@thalios.ai',
      expertise: 'PhD in Computer Science. 9+ years in machine learning, signal processing, and bioacoustics for marine environments.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Jessica Doman',
      role: 'Project Manager',
      email: 'jessica.doman@thalios.ai',
      expertise: 'M.Sc. Resource & Environmental Management. 5+ years in environmental management and stakeholder engagement.',
      image: 'https://randomuser.me/api/portraits/women/47.jpg'
    },
    {
      name: 'Sam Silver',
      role: 'Data Engineer',
      email: 'sam.silver@thalios.ai',
      expertise: 'B.Sc. Computer Science. 5+ years in software development, HPC infrastructure, and distributed systems.',
      image: 'https://randomuser.me/api/portraits/men/52.jpg'
    },
    {
      name: 'Noah Barrett',
      role: 'Machine Learning Specialist',
      email: 'noah.barrett@thalios.ai',
      expertise: 'M.Sc. Computer Science. 6+ years ML/AI experience. Model training, optimization, and marine acoustic AI systems.',
      image: 'https://randomuser.me/api/portraits/men/41.jpg'
    },
    {
      name: 'Harvey Wang',
      role: 'Lead Data Scientist',
      email: 'harvey.wang@thalios.ai',
      expertise: 'M.Sc. Computer Science. 7+ years in applied data science, computational statistics, physics, and signal processing.',
      image: 'https://randomuser.me/api/portraits/men/68.jpg'
    }
  ];

  return (
    <section id="team" className="min-h-screen py-12 bg-gradient-to-b from-[#0f172a] to-[#020617] relative overflow-hidden flex items-center">
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
            Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          A multidisciplinary team combining expertise in acoustic signal processing, deep learning, and marine systems. We deliver production-ready AI solutions for defense and environmental maritime applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1e293b]/60 rounded-xl overflow-hidden shadow-xl transition-all duration-300 border border-gray-800 hover:border-[#0d9488]/50"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-sm text-[#2dd4bf] font-medium mt-1">{member.role}</p>
                <p className="mt-3 text-gray-300 text-sm">{member.expertise}</p>
                <div className="mt-5 space-y-2">
                  <div className="flex items-center text-gray-300 text-sm">
                    <Mail className="h-4 w-4 mr-2 text-[#2dd4bf] flex-shrink-0" />
                    <a href={`mailto:${member.email}`} className="hover:text-[#2dd4bf] transition-colors">
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll down arrow */}
      <motion.a
        href="#waitlist"
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