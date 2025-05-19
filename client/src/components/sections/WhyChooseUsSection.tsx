import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFingerprint, 
  FaCodeBranch, 
  FaHeadset, 
  FaChartLine,
  FaRocket,
  FaTools,
  FaCode,
  FaShieldAlt,
  FaWrench,
  FaExchangeAlt
} from 'react-icons/fa';

const IconOneOfKind = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10H13V7C13 4.79086 11.2091 3 9 3H3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V11C22 10.4477 21.5523 10 21 10Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 7L6 9L8 11" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 17L15 15L13 13" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 9H15" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 15H6" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconTested = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8L18 10L22 6" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 10L11 12L9 14" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 10H11" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconSupport = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 18V19" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6V7" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 12H18" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 12H7" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 16L17 17" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 8L7 7" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 8L17 7" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 16L7 17" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconEfficiency = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2V6" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 18V22" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.93 4.93L7.76 7.76" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.24 16.24L19.07 19.07" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12H6" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 12H22" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.93 19.07L7.76 16.24" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.24 7.76L19.07 4.93" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const features = [
  {
    icon: <IconOneOfKind />,
    title: "One of Its Kind",
    description: "Our Mule to Spring Boot conversion utility is a unique solution tailored to simplify complex integration migrations. It's designed specifically to address the challenges of transitioning from MuleSoft to the scalable and flexible Spring Boot framework."
  },
  {
    icon: <IconTested />,
    title: "Tested on over 3,000 APIs",
    description: "With a proven track record, our tool has been rigorously tested on over 3,000 APIs to ensure accuracy, reliability, and seamless conversions, giving you peace of mind for all your projects."
  },
  {
    icon: <IconSupport />,
    title: "24/7 Dedicated Support",
    description: "Migration made simple with our around-the-clock support. Our expert team is always ready to assist you, ensuring a smooth and hassle-free transition to Spring Boot."
  },
  {
    icon: <IconEfficiency />,
    title: "Cost and Time Efficiency",
    description: "Our Mule to Spring Boot conversion utility significantly reduces both time and cost associated with manual migration. By automating key processes, we help you fast-track your projects, minimize errors, and maximize resource efficiency."
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-background z-0"></div>
      <div className="absolute -left-[300px] -bottom-[200px] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -right-[300px] -top-[200px] w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">We Are Here to Grow Your Business Exponentially</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">Our platform is designed to make your migration journey seamless and efficient.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-card/30 backdrop-blur-sm rounded-xl p-8 lg:p-10 border border-accent/10 hover:border-accent/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="flex items-center mb-6">
                <div className="flex justify-center items-center w-12 h-12 rounded-md bg-blue-950/50 border border-blue-500/20">
                  {feature.icon}
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-4">{feature.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
