import React from 'react';
import { motion } from 'framer-motion';

const statistics = [
  {
    value: "80%",
    label: "Automation Achieved",
    description: "Percent of migration tasks that can be automated"
  },
  {
    value: "3+",
    label: "Projects Completed",
    description: "Enterprise-scale migration projects successfully delivered"
  },
  {
    value: "438",
    label: "Connectors Covered",
    description: "MuleSoft connector types supported for migration"
  }
];

const StatisticsSection = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Professional blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 opacity-95 z-0"></div>
      <div className="absolute -left-[300px] top-[100px] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute -right-[300px] bottom-[100px] w-[600px] h-[600px] bg-indigo-300/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Migration Performance</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight">Mulesoft to Spring Boot conversion metrics</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">Our cutting-edge conversion platform delivers measurable results</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-5xl mx-auto">
          {statistics.map((stat, index) => (
            <motion.div 
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-blue-300/20 hover:border-blue-300/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-white">{stat.value}</h3>
              <p className="text-white font-medium mb-1">{stat.label}</p>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
