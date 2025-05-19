import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck, FaCode, FaDatabase, FaExchangeAlt, FaFileCode, FaRocket, FaShieldAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ComponentType<any>; 
  title: string; 
  description: string; 
}) => (
  <motion.div
    className="bg-white rounded-xl p-8 shadow-md border border-gray-100 h-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600">
      <Icon className="w-6 h-6" />
    </div>
    <h4 className="text-xl font-semibold mb-3 text-gray-900">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const MulesoftConversion = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 z-0"></div>
        <div className="absolute -left-[300px] top-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-left lg:pr-4">
              <div className="flex items-center mb-4">
                <span className="inline-block text-xs font-semibold bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                  MULESOFT MIGRATION
                </span>
              </div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Mulesoft to Spring Boot Conversion
              </motion.h1>
              
              <motion.p 
                className="text-lg mb-8 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Seamlessly convert your Mulesoft applications to Spring Boot with our AI-powered platform. Reduce costs, improve performance, and regain control of your integration architecture.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button className="h-12 px-6 text-sm font-medium rounded-md bg-blue-500 hover:bg-blue-600 group" asChild>
                  <Link href="#get-started">
                    <span>Start Migration</span>
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
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {[
                  "99.8% accuracy in code conversion",
                  "Up to 70% reduction in migration time",
                  "Support for all Mulesoft connectors and components"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="text-green-400">
                      <FaCheck className="w-5 h-5" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative bg-gradient-to-br from-blue-900/30 to-slate-900/40 rounded-xl p-6 shadow-xl border border-blue-900/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-indigo-500/5 to-violet-500/5 z-0"></div>
                
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-md flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                        <span className="text-5xl text-blue-600">M</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-xs text-gray-600">Mulesoft</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-md flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-2 w-full">
                      <div className="flex justify-center items-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14.5l2 2c1 1 4-1 4-1"/><path d="M8.5 8.5l7 7"/><path d="M16 9.5l.5-1.5 1.5.5"/><path d="M9.5 16l-1.5.5.5 1.5"/></svg>
                      </div>
                      <div className="flex justify-center items-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M14.5 9.5 19 4"/><path d="M5 19 9.5 14.5"/><path d="M7 9.7 5.89 7.25l2.46-1.13"/><path d="M17 14.95l1.11 2.45-2.46 1.13"/></svg>
                      </div>
                      <div className="flex justify-center items-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M13 2v8.4a1 1 0 0 1-1 1v0a1 1 0 0 1-1-1V2"/><path d="M9 19.2v-7.3a1 1 0 0 1 1-1v0a1 1 0 0 1 1 1v7.3"/><path d="M15 14.7V19"/><path d="M14.8 9H16a2 2 0 0 1 2 2v0c0 1.1-.9 2-2 2h-.8"/></svg>
                      </div>
                      <div className="flex justify-center items-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M2 7h20"/><path d="M2 17h20"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center items-center my-4">
                  <div className="flex-1 h-px bg-blue-900/30"></div>
                  <div className="px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
                  </div>
                  <div className="flex-1 h-px bg-blue-900/30"></div>
                </div>
                
                <div className="relative mb-4">
                  <div className="p-6 rounded-xl bg-white border border-blue-100 shadow-md">
                    <div className="h-16 mx-auto flex justify-center items-center">
                      <span className="text-2xl font-bold text-blue-600">Spring Boot</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-3 right-6 bg-blue-600 border border-blue-700 rounded-lg px-3 py-1.5 text-xs font-medium text-white">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-white"></span>
                      Spring Boot Conversion Ready
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">KEY BENEFITS</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">Why Migrate from Mulesoft to Spring Boot?</h3>
            <p className="text-lg text-gray-600">
              Discover the strategic advantages of moving to Spring Boot for your integration needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={FaRocket}
              title="Cost Efficiency"
              description="Eliminate licensing costs and reduce your total cost of ownership by up to 70% by moving to open-source Spring Boot."
            />
            <FeatureCard 
              icon={FaExchangeAlt}
              title="Increased Performance"
              description="Spring Boot applications typically offer 30-50% better performance with lower resource consumption than equivalent Mulesoft applications."
            />
            <FeatureCard 
              icon={FaShieldAlt}
              title="Future-Proof Architecture"
              description="Spring Boot's massive community and enterprise adoption ensures long-term support and continuous innovation."
            />
            <FeatureCard 
              icon={FaDatabase}
              title="Better Integration Options"
              description="Access a wider ecosystem of integration components and connectors without licensing restrictions."
            />
            <FeatureCard 
              icon={FaFileCode}
              title="Developer Availability"
              description="Tap into the much larger pool of Spring Boot developers compared to Mulesoft specialists."
            />
            <FeatureCard 
              icon={FaCode}
              title="Full Customization"
              description="Gain complete control over your integration code base with the flexibility to customize any component."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">THE PROCESS</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">How Our Migration Works</h3>
            <p className="text-lg text-gray-600">
              Our automated platform handles the entire Mulesoft to Spring Boot conversion process
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative pb-12">
              <div className="absolute left-[50%] h-full w-1 bg-blue-100 transform -translate-x-1/2"></div>
              
              {[
                {
                  title: "Automated Code Analysis",
                  description: "Our AI engine scans your Mulesoft application, identifying all components, connectors, and custom code.",
                  image: "https://images.unsplash.com/photo-1603969072881-b0fc7f3d6d7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kZSUyMGFuYWx5c2lzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                },
                {
                  title: "Pattern Matching & Transformation",
                  description: "We map Mulesoft patterns to their Spring Boot equivalents, transforming DataWeave, flows, and connectors.",
                  image: "https://images.unsplash.com/photo-1526040652367-ac003a0475fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhbnNmb3JtYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                },
                {
                  title: "Code Generation & Testing",
                  description: "Clean Spring Boot code is generated with comprehensive tests to ensure functional equivalence.",
                  image: "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kZSUyMGdlbmVyYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                },
                {
                  title: "Deployment & Optimization",
                  description: "We help deploy your migrated application and optimize it for your specific environment.",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVwbG95bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="relative mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 text-left'}`}>
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                        <img src={step.image} alt={step.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                          <h4 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h4>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center border-4 border-white">
                        <span className="text-white font-bold">{index + 1}</span>
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

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">COMPARISON</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">Mulesoft vs. Spring Boot</h3>
            <p className="text-lg text-gray-600">
              See how Spring Boot compares to Mulesoft across key criteria
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg border border-gray-200">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-gray-50 text-gray-600 font-semibold border-b border-gray-200"></th>
                  <th className="p-4 text-center bg-blue-50 text-blue-700 font-semibold border-b border-gray-200">
                    <div className="flex items-center justify-center">
                      <span>Spring Boot</span>
                    </div>
                  </th>
                  <th className="p-4 text-center bg-gray-50 text-gray-600 font-semibold border-b border-gray-200">
                    <div className="flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white mr-2">M</div>
                      <span>Mulesoft</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Licensing Costs",
                    springBoot: "Open Source / Free",
                    mulesoft: "High subscription costs"
                  },
                  {
                    feature: "Performance",
                    springBoot: "Excellent",
                    mulesoft: "Good"
                  },
                  {
                    feature: "Developer Ecosystem",
                    springBoot: "Very Large",
                    mulesoft: "Limited"
                  },
                  {
                    feature: "Customization",
                    springBoot: "Unlimited",
                    mulesoft: "Limited to platform capabilities"
                  },
                  {
                    feature: "Cloud Deployment",
                    springBoot: "Any cloud platform",
                    mulesoft: "Primarily Anypoint Platform"
                  },
                  {
                    feature: "Integration Options",
                    springBoot: "Vast ecosystem of libraries",
                    mulesoft: "Limited to available connectors"
                  }
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 text-left font-medium text-gray-900 border-b border-gray-200">{row.feature}</td>
                    <td className="p-4 text-center text-gray-800 border-b border-gray-200">{row.springBoot}</td>
                    <td className="p-4 text-center text-gray-800 border-b border-gray-200">{row.mulesoft}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900 z-0"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Migrate from Mulesoft?</h2>
            <p className="text-xl mb-10 text-gray-300">
              Start your journey to a more cost-effective, flexible, and performant integration platform today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="h-12 px-6 text-sm font-medium rounded-md bg-blue-500 hover:bg-blue-600 group" asChild>
                <Link href="#request-demo">
                  <span>Request Demo</span>
                  <FaArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" className="h-12 px-6 text-sm font-medium rounded-md border-blue-500/40 bg-blue-500/10 text-blue-100 hover:bg-blue-500/20 hover:text-white transition-colors group" asChild>
                <Link href="#migration-assessment">Get Free Migration Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MulesoftConversion;