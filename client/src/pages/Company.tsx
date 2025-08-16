import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaBuilding, FaGlobeAmericas, FaHandshake, FaLightbulb, FaUsers } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const ValueCard = ({ 
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

const TeamMember = ({ 
  name, 
  role, 
  image, 
  linkedIn 
}: { 
  name: string; 
  role: string; 
  image: string; 
  linkedIn: string;
}) => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="relative mb-4 mx-auto rounded-full overflow-hidden w-56 h-56 bg-gray-200">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <h4 className="text-xl font-bold mb-1 text-gray-900">{name}</h4>
    <p className="text-gray-600 mb-3">{role}</p>
    <a 
      href={linkedIn} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
    >
      <span>LinkedIn</span>
      <FaArrowRight className="ml-1 h-3 w-3" />
    </a>
  </motion.div>
);

const Company = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 z-0"></div>
        <div className="absolute -left-[300px] bottom-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block text-xs font-semibold bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full mb-6">
              ABOUT AARYATI
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transforming Integration Through Innovation
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              We're on a mission to revolutionize how businesses handle code transformation and system migrations.
            </p>
            <Button className="rounded-md h-12 px-6 text-sm font-medium bg-blue-500 hover:bg-blue-600 group" asChild>
              <Link href="#join-us">
                <span>Join Our Team</span>
                <FaArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="about-us" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">OUR STORY</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">How It All Started</h3>
              <div className="space-y-6 text-gray-700">
                <p>
                  Aaryati Technologies was founded in 2022 by a team of enterprise integration experts who saw a critical gap in the market: businesses needed a better way to modernize their legacy integration platforms.
                </p>
                <p>
                  After years of manually migrating Mulesoft applications to Spring Boot for various enterprises, our founders realized that this process could be automated with advanced AI and pattern recognition.
                </p>
                <p>
                  What started as an internal tool quickly evolved into a comprehensive platform that has now helped hundreds of organizations successfully transition to modern integration architecture with minimal risk and maximum efficiency.
                </p>
                <p>
                  Today, Aaryati is the industry leader in code transformation technology, continuously innovating to make system migrations faster, more reliable, and more accessible for organizations of all sizes.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Aaryati team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl max-w-xs">
                <div className="text-2xl font-bold mb-2">500+</div>
                <div className="text-sm">Successful migration projects completed since our founding</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section id="our-culture" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">OUR VALUES</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">What We Stand For</h3>
            <p className="text-lg text-gray-600">
              Our core values drive everything we do at Aaryati Technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard 
              icon={FaLightbulb}
              title="Innovation"
              description="We continuously push the boundaries of what's possible in code transformation technology."
            />
            <ValueCard 
              icon={FaUsers}
              title="Customer Success"
              description="We measure our success by the success of our customers. Their goals become our goals."
            />
            <ValueCard 
              icon={FaHandshake}
              title="Integrity"
              description="We're committed to transparency, honesty, and doing what's right for our customers and partners."
            />
            <ValueCard 
              icon={FaGlobeAmericas}
              title="Global Perspective"
              description="We embrace diverse perspectives and approaches to solve complex challenges."
            />
            <ValueCard 
              icon={FaBuilding}
              title="Excellence"
              description="We hold ourselves to the highest standards in everything we do, from code to customer service."
            />
            <ValueCard 
              icon={FaUsers}
              title="Collaboration"
              description="We believe the best solutions come from working together across teams and with our customers."
            />
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">OUR LEADERSHIP</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">Meet Our Team</h3>
            <p className="text-lg text-gray-600">
              The experts behind Aaryati's innovative migration technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <TeamMember 
              name="Sanjivani Ghuge"
              role="CEO & Founder"
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              linkedIn="https://www.linkedin.com/in/sanjivani-ghuge/"
            />
            <TeamMember 
              name="Aarti Ghuge"
              role="Co-Founder"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              linkedIn="#linkedin-david"
            />
            <TeamMember 
              name="Dhanashri Dole"
              role="VP of Customer Success"
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              linkedIn="#linkedin-sarah"
            />
          </div>
        </div>
      </section>

      {/* Offices - Hidden for now, can be enabled later */}
      <section className="hidden py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">OUR LOCATIONS</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">Global Presence</h3>
            <p className="text-lg text-gray-600">
              Aaryati has offices in key technology hubs around the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                city: "San Francisco",
                country: "United States",
                address: "525 Market St, San Francisco, CA 94105",
                image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
              },
              {
                city: "London",
                country: "United Kingdom",
                address: "10 Finsbury Square, London EC2A 1AF",
                image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
              },
              {
                city: "Bangalore",
                country: "India",
                address: "Prestige Technostar, Doddanekundi, Bangalore 560037",
                image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
              }
            ].map((office, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <img src={office.image} alt={office.city} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1 text-gray-900">{office.city}</h4>
                  <p className="text-blue-600 mb-4">{office.country}</p>
                  <p className="text-gray-600">{office.address}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="careers" className="py-16 lg:py-24 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900 z-0"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Our Team</h2>
            <p className="text-xl mb-10 text-gray-300">
              We're always looking for talented individuals who are passionate about innovation and solving complex problems.
            </p>
            <div className="text-center">
              <p className="text-lg text-gray-300 mb-4">
                Interested in joining our team?
              </p>
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-6 inline-block">
                <p className="text-blue-200 mb-2">Contact us at:</p>
                <a 
                  href="mailto:contact@aaryati.com" 
                  className="text-xl font-semibold text-blue-300 hover:text-white transition-colors"
                >
                  contact@aaryati.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;