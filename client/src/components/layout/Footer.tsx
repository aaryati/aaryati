import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Logo from '@/components/ui/Logo';
import { FaMapMarkerAlt, FaEnvelope, FaPaperPlane, FaLinkedin, FaGithub, FaArrowRight } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

// Footer link groups
const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Mulesoft Conversion", href: "#mulesoft-to-springboot-conversion" },
      { label: "Code Migration", href: "#code-migration" },
      { label: "Integration", href: "#integration" },
      { label: "Connectors", href: "#connectors" },
      { label: "Documentation", href: "#documentation" }
    ]
  },
  {
    title: "Solutions",
    links: [
      { label: "Enterprise", href: "#enterprise" },
      { label: "Financial Services", href: "#financial-services" },
      { label: "Healthcare", href: "#healthcare" },
      { label: "Retail", href: "#retail" },
      { label: "Government", href: "#government" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "Documentation", href: "#documentation" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "API Migration Guide", href: "#guides" },
      { label: "FAQ", href: "#faq" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about-us" },
      { label: "Team", href: "#team" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "/contact" }
    ]
  }
];

const Footer = () => {
  return (
    <footer className="bg-background pt-16 pb-8 border-t border-accent/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-md">
              <div className="flex items-center mb-2">
                <Logo variant="full-white" className="w-[160px] h-[48px] object-contain" />
              </div>
              <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                Aaryati Technologies specializes in automating the conversion of MuleSoft applications to Spring Boot, 
                significantly reducing migration time and costs while ensuring reliable, high-quality results.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <FaMapMarkerAlt className="h-4 w-4" />
                  </div>
                  <span className="text-gray-400 text-sm">Kharadi, Pune - India</span>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-primary">
                    <FaEnvelope className="h-4 w-4" />
                  </div>
                  <span className="text-gray-400 text-sm">contact@aaryati.com</span>
                </div>
                
                <div className="flex items-center space-x-4 pt-2">
                  <Link href="#linkedin" className="text-gray-400 hover:text-white transition-colors">
                    <FaLinkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#twitter" className="text-gray-400 hover:text-white transition-colors">
                    <SiX className="h-5 w-5" />
                  </Link>
                  <Link href="#github" className="text-gray-400 hover:text-white transition-colors">
                    <FaGithub className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
              {footerLinks.map((group, idx) => (
                <div key={idx}>
                  <h4 className="text-sm font-semibold text-white mb-4">{group.title}</h4>
                  <ul className="space-y-2">
                    {group.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link 
                          href={link.href} 
                          className="text-gray-400 hover:text-white text-sm transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-accent/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
            <div className="md:col-span-2">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <Link href="#privacy" className="text-gray-400 hover:text-white text-xs transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#terms" className="text-gray-400 hover:text-white text-xs transition-colors">
                  Terms of Service
                </Link>
                <Link href="#cookie" className="text-gray-400 hover:text-white text-xs transition-colors">
                  Cookie Policy
                </Link>
                <Link href="#security" className="text-gray-400 hover:text-white text-xs transition-colors">
                  Security
                </Link>
              </div>
            </div>
            
            <div className="md:text-right">
              <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Aaryati Technologies. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
