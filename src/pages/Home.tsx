import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Team from '@/components/Team';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#020617] text-gray-50 min-h-screen">
      <Hero />
      <About />
      <Team />
      <WaitlistForm />
      <Footer />
    </div>
  );
}
