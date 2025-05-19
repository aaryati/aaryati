import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaChartLine, FaDatabase, FaExchangeAlt, FaFileInvoiceDollar, FaLock, FaShieldAlt, FaUserShield } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ComponentType<any>; 
  title: string; 
  description: string;
}) => {
  return (
    <Card className="border border-gray-200">
      <CardContent className="pt-6">
        <div className="bg-blue-100 text-blue-600 rounded-lg p-3 inline-block mb-4">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const CaseStudyCard = ({ 
  company, 
  title, 
  description, 
  metric1, 
  metric1Label, 
  metric2, 
  metric2Label 
}: { 
  company: string; 
  title: string; 
  description: string; 
  metric1: string;
  metric1Label: string;
  metric2: string;
  metric2Label: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border border-gray-200 h-full">
        <CardContent className="pt-6">
          <div className="text-sm text-blue-600 font-medium mb-2">{company}</div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-700">{metric1}</div>
              <div className="text-sm text-gray-500">{metric1Label}</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-700">{metric2}</div>
              <div className="text-sm text-gray-500">{metric2Label}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FinancialServices = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 z-0"></div>
        <div className="absolute -right-[300px] top-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block text-xs font-semibold bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full mb-6">
              FINANCIAL SERVICES SOLUTIONS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Secure Integration for Financial Institutions
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Compliant, secure, and reliable migration solutions designed specifically for banks, insurance, and fintech companies.
            </p>
            <Button className="rounded-md h-12 px-6 text-sm font-medium bg-blue-500 hover:bg-blue-600 group" asChild>
              <Link href="#contact-financial">
                <span>Request Financial Services Demo</span>
                <FaArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits for Financial Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">KEY BENEFITS</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">Specialized for Financial Services</h3>
            <p className="text-lg text-gray-600">
              Our platform addresses the unique challenges faced by financial institutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={FaLock}
              title="Bank-Grade Security"
              description="End-to-end encryption and security measures that meet the strictest financial compliance requirements."
            />
            <FeatureCard 
              icon={FaUserShield}
              title="Data Privacy Compliance"
              description="Built-in GDPR, CCPA, and PCI-DSS compliance features to protect sensitive financial data."
            />
            <FeatureCard 
              icon={FaExchangeAlt}
              title="Payment System Integration"
              description="Seamless migration for payment gateways, processing systems and financial message formats like ISO20022."
            />
            <FeatureCard 
              icon={FaChartLine}
              title="Transaction Performance"
              description="High-throughput migration ensuring your critical financial transactions maintain sub-millisecond response times."
            />
            <FeatureCard 
              icon={FaShieldAlt}
              title="Audit & Compliance"
              description="Comprehensive audit trails and compliance documentation for regulatory requirements."
            />
            <FeatureCard 
              icon={FaDatabase}
              title="Legacy System Support"
              description="Specialized connectors for legacy banking systems, core banking platforms, and mainframe integrations."
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">SUCCESS STORIES</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">Financial Industry Impact</h3>
            <p className="text-lg text-gray-600">
              How leading financial institutions transformed their integration architecture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <CaseStudyCard
              company="Global Banking Corporation"
              title="Modernizing Payment Processing Infrastructure"
              description="One of the world's largest banks migrated their payment processing services from Mulesoft to Spring Boot, improving transaction speed while reducing operational costs."
              metric1="60%"
              metric1Label="Cost Reduction"
              metric2="3x"
              metric2Label="Performance Gain"
            />
            <CaseStudyCard
              company="Insurance Leader"
              title="API Ecosystem Transformation"
              description="A Fortune 500 insurance company converted their entire customer-facing API ecosystem to Spring Boot, enabling faster innovation and third-party integrations."
              metric1="200+"
              metric1Label="APIs Migrated"
              metric2="8 weeks"
              metric2Label="Implementation Time"
            />
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/3">
                  <div className="bg-white p-5 rounded-xl shadow-sm">
                    <FaFileInvoiceDollar className="w-16 h-16 text-blue-600 mx-auto" />
                    <h3 className="text-center text-xl font-bold mt-4 mb-2">Regulatory Compliance Built-in</h3>
                    <p className="text-center text-gray-600">Our platform ensures your integrations meet all financial regulatory requirements</p>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Financial Compliance Coverage</h3>
                  <p className="text-gray-600 mb-6">
                    Our platform helps financial institutions meet regulatory requirements while modernizing their integration infrastructure.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "PCI DSS",
                      "GDPR",
                      "SOX",
                      "Basel III",
                      "CCPA",
                      "ISO 27001",
                      "NYDFS",
                      "MiFID II",
                      "SOC 2"
                    ].map((compliance, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span className="font-medium">{compliance}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your financial integrations?</h2>
            <p className="text-xl opacity-90 mb-8">
              Our experts understand the unique challenges of the financial industry. Schedule a consultation to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-700 hover:bg-gray-100 h-12 px-6 rounded-md text-sm font-medium" asChild>
                <Link href="#financial-consultation">
                  Schedule Consultation
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-blue-700 h-12 px-6 rounded-md text-sm font-medium" asChild>
                <Link href="#financial-resources">
                  Financial Services Resources
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialServices;