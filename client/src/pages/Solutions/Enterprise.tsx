import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaBuilding, FaChartLine, FaCloudDownloadAlt, FaLock, FaNetworkWired, FaUsers } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const EnterpriseFeature = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div
    className="bg-white rounded-xl p-8 shadow-md border border-gray-100 h-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600">
      <Icon className="w-6 h-6" />
    </div>
    <h4 className="text-xl font-semibold mb-3 text-gray-900">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const Enterprise = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 z-0"></div>
        <div className="absolute -right-[300px] top-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block text-xs font-semibold bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full mb-6">
              ENTERPRISE SOLUTIONS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Enterprise-Grade Mulesoft Migration
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Secure, scalable, and compliant solutions for large-scale enterprise Mulesoft to Spring Boot migrations.
            </p>
            <Button className="rounded-md h-12 px-6 text-sm font-medium bg-blue-500 hover:bg-blue-600 group" asChild>
              <Link href="#contact-sales">
                <span>Contact Enterprise Sales</span>
                <FaArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">ENTERPRISE FEATURES</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">Built for Enterprise Scale</h3>
            <p className="text-lg text-gray-600">
              Our platform is designed to handle the most complex enterprise integration requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EnterpriseFeature 
              icon={FaLock}
              title="Enterprise Security"
              description="SOC 2 compliance, private deployments, and advanced encryption for your sensitive code and data"
            />
            <EnterpriseFeature 
              icon={FaCloudDownloadAlt}
              title="High Availability"
              description="99.99% uptime SLA with redundant systems and global availability zones"
            />
            <EnterpriseFeature 
              icon={FaChartLine}
              title="Unlimited Scale"
              description="Process thousands of applications and millions of lines of code with consistent precision"
            />
            <EnterpriseFeature 
              icon={FaNetworkWired}
              title="Integration Options"
              description="Connect to your existing CI/CD pipelines, code repositories, and enterprise systems"
            />
            <EnterpriseFeature 
              icon={FaUsers}
              title="Team Collaboration"
              description="Role-based access control and collaborative workflow tools for large teams"
            />
            <EnterpriseFeature 
              icon={FaBuilding}
              title="Dedicated Support"
              description="White-glove service with dedicated technical account managers and priority support"
            />
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">CUSTOMER STORIES</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">Enterprise Success Stories</h3>
            <p className="text-lg text-gray-600">
              Learn how leading enterprises have successfully migrated from Mulesoft to Spring Boot
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                company: "Global Financial Services Leader",
                title: "Migrating 300+ Integration Services",
                description: "A Fortune 100 financial institution migrated their entire Mulesoft ecosystem to Spring Boot in less than 6 months, resulting in 40% lower operational costs and 67% performance improvement.",
                metric1: "300+",
                metric1Label: "Services Migrated",
                metric2: "40%",
                metric2Label: "Cost Reduction"
              },
              {
                company: "Healthcare Technology Provider",
                title: "Critical System Migration",
                description: "A healthcare SaaS company successfully converted their patient data integration platform from Mulesoft to Spring Boot while maintaining HIPAA compliance and zero downtime during the transition.",
                metric1: "Zero",
                metric1Label: "Downtime",
                metric2: "100%",
                metric2Label: "Compliance"
              }
            ].map((caseStudy, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-700"></div>
                <div className="p-8">
                  <span className="text-sm text-gray-500">{caseStudy.company}</span>
                  <h4 className="text-2xl font-bold my-3 text-gray-900">{caseStudy.title}</h4>
                  <p className="text-gray-600 mb-8">{caseStudy.description}</p>
                  
                  <div className="grid grid-cols-2 gap-8 mt-6 border-t border-gray-100 pt-6">
                    <div>
                      <div className="text-3xl font-bold text-blue-600">{caseStudy.metric1}</div>
                      <div className="text-sm text-gray-500">{caseStudy.metric1Label}</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600">{caseStudy.metric2}</div>
                      <div className="text-sm text-gray-500">{caseStudy.metric2Label}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="h-12 px-6 text-sm font-medium rounded-md border-blue-200 text-blue-700 hover:bg-blue-50" asChild>
              <Link href="#case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900 z-0"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to discuss your enterprise migration needs?</h2>
                <p className="text-xl mb-8 text-gray-300">
                  Our enterprise team will work with you to create a custom migration plan tailored to your specific requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="h-12 px-6 text-sm font-medium rounded-md bg-blue-500 hover:bg-blue-600 group" asChild>
                    <Link href="#schedule-consultation">
                      <span>Schedule Consultation</span>
                      <FaArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="h-12 px-6 text-sm font-medium rounded-md border-blue-500/40 bg-blue-500/10 text-blue-100 hover:bg-blue-500/20 hover:text-white transition-colors group" asChild>
                    <Link href="#enterprise-brochure">Download Enterprise Info</Link>
                  </Button>
                </div>
              </div>
              <div className="bg-white/95 rounded-xl p-8 border border-blue-100 shadow-md">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Enterprise Package Includes:</h3>
                <ul className="space-y-4">
                  {[
                    "Custom migration strategy and roadmap",
                    "Dedicated technical account management",
                    "Private cloud or on-premise deployment options",
                    "Custom integrations with your existing systems",
                    "Comprehensive staff training and knowledge transfer",
                    "24/7 priority support"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <div className="mt-1 text-blue-600"><FaArrowRight className="w-4 h-4" /></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enterprise;