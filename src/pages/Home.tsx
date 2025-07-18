import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Technology from '@/components/Technology';
import About from '@/components/About';
import Team from '@/components/Team';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#020617] text-gray-50 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Technology />
      <Team />
      <WaitlistForm />
      <Footer />
    </div>
  );
}
