import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, BarChart2, Lightbulb } from 'lucide-react';

const features = [
  {
    title: "Multi-Species Detection",
    description: "Unlike traditional low-power whale detectors limited to specific calls, our technology identifies multiple whale species simultaneously with high accuracy using fully trainable, low-power deep learning models.",
    icon: <ClipboardList className="h-6 w-6 text-white" />
  },
  {
    title: "Fully Customizable",
    description: "Our general-purpose detectors can be tailored with software for annotating custom datasets and training specialized models for specific research and conservation needs.",
    icon: <BarChart2 className="h-6 w-6 text-white" />
  },
  {
    title: "Energy-Efficient Solutions",
    description: "Our revolutionary solution harnesses artificial intelligence and edge computing to enable power-efficient detectors that operate in energy-constrained deep-sea environments for extended periods.",
    icon: <Lightbulb className="h-6 w-6 text-white" />
  }
];

export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-[#0c4a6e]/40 to-[#0f172a] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            About <span className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#2dd4bf] to-[#38bdf8]">Thalios</span><span className="text-3xl sm:text-4xl font-extrabold text-white">.ai</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Our adaptable, customizable cetacean detection systems overcome the limitations of current low-power whale detection technology.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="relative">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-[#1e293b] rounded-lg overflow-hidden">
                  <motion.img
                    animate={{ y: [0, -10, 0] }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1568430462989-44163eb1752f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Whale swimming in ocean"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] opacity-60"></div>
                  <div className="absolute bottom-0 p-4">
                    <div className="backdrop-blur-md bg-white/5 p-2 rounded-lg inline-flex items-center border border-white/10">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium">Cetacean detected</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-[#1e293b]/60 rounded-xl overflow-hidden shadow-xl transition-all duration-300 border border-gray-800 hover:border-[#0d9488]/50 p-6 h-full flex flex-col">
                <div className="p-2 bg-gradient-to-br from-[#0d9488] to-[#0284c7] rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
