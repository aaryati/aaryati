import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const Platform = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 z-0"></div>
        <div className="absolute -left-[400px] top-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block text-xs font-semibold bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full mb-6">
              AARYATI PLATFORM
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Ultimate Mulesoft to Spring Boot Conversion Platform
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Our advanced AI-powered platform automates the entire process of migrating from Mulesoft to Spring Boot.
            </p>
            <Button className="rounded-md h-12 px-6 text-sm font-medium bg-blue-500 hover:bg-blue-600 group" asChild>
              <Link href="#get-started">
                <span>Start Your Migration</span>
                <FaArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">PLATFORM FEATURES</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">Complete Conversion Solution</h3>
            <p className="text-lg text-gray-600">
              Our platform handles every aspect of Mulesoft to Spring Boot migration with precision and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Code Analysis",
                description: "Intelligent analysis of Mulesoft codebase structure and dependencies"
              },
              {
                title: "Pattern Matching",
                description: "Identifies complex Mulesoft patterns and transforms them to Spring Boot equivalents"
              },
              {
                title: "Connector Migration",
                description: "Automatically converts Mulesoft connectors to Spring Boot integration components"
              },
              {
                title: "Test Generation",
                description: "Creates comprehensive tests to verify converted application functionality"
              },
              {
                title: "Documentation",
                description: "Generates detailed documentation of the conversion process and new architecture"
              },
              {
                title: "Deployment Support",
                description: "Tools to help deploy your converted applications to any environment"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">HOW IT WORKS</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">Simple 3-Step Process</h3>
            <p className="text-lg text-gray-600">
              Our platform makes migration straightforward with a proven methodology
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>
              
              {[
                {
                  step: "01",
                  title: "Upload Your Mulesoft Code",
                  description: "Securely upload your Mulesoft applications through our intuitive interface"
                },
                {
                  step: "02",
                  title: "Automated Conversion",
                  description: "Our AI platform analyzes and converts your code to Spring Boot with high precision"
                },
                {
                  step: "03",
                  title: "Review & Deploy",
                  description: "Review the converted code, run the comprehensive tests, and deploy with confidence"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={`flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <span className="inline-block text-5xl font-bold text-blue-100 mb-2">{item.step}</span>
                      <h4 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center border-4 border-white">
                        <FaCheck className="text-white" />
                      </div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Integration Platform?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of companies who have successfully migrated from Mulesoft to Spring Boot with Aaryati.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="h-12 px-6 text-sm font-medium rounded-md bg-white text-blue-700 hover:bg-blue-50" asChild>
                <Link href="#schedule-demo">Schedule a Demo</Link>
              </Button>
              <Button variant="outline" className="h-12 px-6 text-sm font-medium rounded-md border-white bg-transparent text-white hover:bg-blue-700" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platform;