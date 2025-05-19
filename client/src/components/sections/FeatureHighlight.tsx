import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { FaArrowRight, FaCode } from 'react-icons/fa';
import architectureGif from '@assets/Aaryati CodeGen design -2.gif';
import conversionLogo from '@assets/springboot1.png';

const FeatureHighlight = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Light background similar to Kong's site */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-blue-50 to-transparent z-0"></div>
      <div className="absolute -left-64 top-32 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
      <div className="absolute -right-64 bottom-32 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Revolutionize Code Transformation</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-slate-900">Effortless Mulesoft Code Conversion</h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Transform your MuleSoft applications to Spring Boot with our automated conversion platform. Our industry-leading solution ensures a smooth migration with minimal manual intervention and maximum accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="group rounded-md h-11 bg-blue-500 hover:bg-blue-600" asChild>
                <Link href="/request-demo">
                  <span>Request Demo</span>
                  <FaArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" className="rounded-md h-11 border-blue-300 text-blue-700 hover:border-blue-400 hover:bg-blue-50" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-xl border border-blue-200 shadow-xl shadow-blue-200/20 bg-white">
              <img 
                src={architectureGif} 
                alt="Mulesoft to Spring Boot architecture transformation" 
                className="w-full h-auto object-cover" 
              />
              
              {/* Animated glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent opacity-60"></div>
            </div>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white p-5 rounded-lg shadow-lg border border-blue-100 hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-blue-100">
                  <FaCode className="text-blue-600 h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-blue-600 font-medium">Spring Boot</p>
                  <p className="text-slate-800 font-semibold">Conversion Ready</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
