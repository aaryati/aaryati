import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaRocket, FaTools } from 'react-icons/fa';

// Import the partner logos
import datadogLogo from '../../assets/partner-logos/datadog.png';
import kongLogo from '../../assets/partner-logos/kong.png';
import grafanaLogo from '../../assets/partner-logos/grafana.png';

const clientLogos = [
  "https://cdn-icons-png.flaticon.com/512/5969/5969059.png",   // IBM
  datadogLogo,                                                // DataDog
  "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",  // SAP
  kongLogo,                                                   // Kong
  grafanaLogo                                                 // Grafana
];

const HeroSection = () => {
  return (
    <section className="pt-14 pb-24 md:pt-20 md:pb-32 relative overflow-hidden">
      {/* Background gradient effects inspired by Kong */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-blue-900/20 via-background/5 to-transparent z-0"></div>
      <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-blue-600/10 via-purple-600/10 to-transparent z-0"></div>
      <div className="absolute -top-[500px] -left-[300px] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -right-[400px] top-[100px] w-[700px] h-[700px] bg-violet-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-left lg:pr-4">
            <div className="flex items-center mb-4">
              <span className="inline-block text-xs font-semibold bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                REVOLUTIONIZE CODE TRANSFORMATION
              </span>
            </div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Effortless Mulesoft Code Conversion
            </motion.h1>
            
            <motion.p 
              className="text-lg mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform your MuleSoft applications to Spring Boot with our automated conversion platform. Our industry-leading solution ensures a smooth migration with minimal manual intervention and maximum accuracy.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button className="h-12 px-6 text-sm font-medium rounded-md bg-blue-500 hover:bg-blue-600 group" asChild>
                <Link href="/request-demo">
                  <span>Request Demo</span>
                  <FaArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" className="h-12 px-6 text-sm font-medium rounded-md border-blue-500/40 bg-blue-500/10 text-blue-100 hover:bg-blue-500/20 hover:text-white transition-colors group" asChild>
                <Link href="/contact" className="flex items-center">
                  <span>Contact Us</span>
                  <FaArrowRight className="ml-2 h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-12 pt-8 border-t border-accent/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-gray-400 mb-6 text-sm">Trusted by leading enterprises worldwide</p>
              <div className="flex flex-wrap gap-x-10 gap-y-6 items-center">
                {clientLogos.map((logo, index) => (
                  <div key={index} className="flex">
                    <img 
                      src={logo} 
                      alt={`Tech client logo ${index + 1}`} 
                      className={`opacity-70 grayscale hover:opacity-100 transition-opacity duration-300 ${
                        index === 1 ? 'h-7 md:h-8' : // DataDog needs to be a bit larger
                        index === 3 ? 'h-6 md:h-7' : // Kong
                        index === 4 ? 'h-5 md:h-6' : // Grafana
                        'h-5 md:h-6'
                      }`} 
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-blue-900/30 to-slate-900/40 rounded-xl p-8 shadow-xl border border-blue-900/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-indigo-500/5 to-violet-500/5 z-0"></div>
              
              {/* Top glowing orb */}
              <div className="absolute -top-10 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute top-32 -right-20 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-8 text-center">Key Benefits</h3>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                      <FaRocket className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Accelerated Migration</h4>
                      <p className="text-gray-400 text-sm">Reduce migration time by up to 80% with our automated platform</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                      <FaCode className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Clean Code Generation</h4>
                      <p className="text-gray-400 text-sm">Get production-ready Spring Boot code with 99.8% accuracy</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                      <FaTools className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Complete Ecosystem Support</h4>
                      <p className="text-gray-400 text-sm">Full support for all Mulesoft connectors and components</p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-blue-900/30">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="ml-2 text-green-500 font-medium text-sm">Available Now</span>
                    </div>
                    <span className="text-xs text-gray-400">Spring Boot 3.0 Compatible</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
