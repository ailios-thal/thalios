import React from 'react';
import { motion } from 'framer-motion';
import { FlaskRound, BarChart2, Code, Settings } from 'lucide-react';

export default function Technology() {
  return (
    <section id="technology" className="py-16 bg-gradient-to-b from-[#0f172a] to-[#020617] relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#0d9488]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[#0284c7]/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our Technology
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Thalios.ai overcomes limitations of current low-power whale detectors by leveraging state-of-the-art deep learning and edge computing.
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
                    <FlaskRound className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Model Distillation</h3>
                  <p className="mt-2 text-gray-300">
                    We leverage state-of-the-art ML techniques to distill large neural networks into fully trainable, 
                    low-power models optimized for specific edge AI accelerators to meet computational and energy demands.
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
                    <BarChart2 className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Fully Customizable</h3>
                  <p className="mt-2 text-gray-300">
                  Our general-purpose detectors can be tailored with software for annotating custom datasets and training specialized models for specific research and conservation needs.
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
                    <Code className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Edge AI Accelerators</h3>
                  <p className="mt-2 text-gray-300">
                    Emerging edge AI accelerators enable our ML models to run in energy-constrained environments, making our solution adaptable and cost-effective for long-term ocean deployments.
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
                    <Settings className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Pre-trained Model Suite</h3>
                  <p className="mt-2 text-gray-300">
                    We provide a suite of pre-trained models to suit individual needs, along with software to help users annotate 
                    their own data sets and train custom models for specific cetacean species and environments.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
