import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
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
        <div className="flex justify-center">
          <div className="text-center max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="block mt-1 text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-white">Advanced Soundscape</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#5eead4] to-[#38bdf8]">
                  Analysis System
                </span>
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl"
            >
              Thalios.ai's long-term vision is to serve the protection of cetaceans and marine protected areas through advanced ocean soundscape technology. 
              Our primary focus is developing low-power edge devices that provide continuous, ISO 18405-compliant ambient noise monitoring for scientists, governmental bodies, and offshore industries. 
              By integrating AI-powered acoustic classification algorithms on the same platform, we aim to offer comprehensive monitoring that captures both baseline soundscape metrics and real-time identification of cetacean vocalizations and ship signatures.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex justify-center space-x-4"
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
              <div>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-[#14b8a6] bg-white px-8 py-3 md:py-4 md:text-lg md:px-10"
                >
                  <a href="#about">Learn More</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
