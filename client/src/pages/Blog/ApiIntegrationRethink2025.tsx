
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  FaArrowLeft, 
  FaCalendarAlt, 
  FaUser, 
  FaTwitter, 
  FaLinkedin, 
  FaFacebook,
  FaShare,
  FaCloud,
  FaCode,
  FaShieldAlt,
  FaRocket,
  FaCogs,
  FaNetworkWired
} from 'react-icons/fa';

const ApiIntegrationRethink2025 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-slate-50 border-b">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <Button variant="ghost" className="text-blue-600 hover:text-blue-800" asChild>
            <Link href="/resources">
              <FaArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30">
                Industry Insights
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Why API-Led Integration Needs a Modern Rethink in 2025 
                <span className="text-blue-400">🚀</span>
              </h1>
              <div className="flex flex-wrap justify-center items-center gap-6 text-blue-200 mb-8">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="h-4 w-4" />
                  <span>January 27, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUser className="h-4 w-4" />
                  <span>Aaryati Technologies</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>5 min read</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {/* Introduction */}
              <div className="text-xl text-gray-700 mb-12 leading-relaxed">
                <p>
                  Over the last decade, API-led integration has transformed the way enterprises connect systems, 
                  innovate products, and serve customers. But as we move deeper into 2025, it's becoming increasingly clear: 
                  <strong className="text-blue-600"> The traditional approach to API-led integration needs a serious rethink.</strong>
                </p>
                <p>The world has changed — and so must our integration strategies.</p>
              </div>

              {/* Section 1 */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <FaNetworkWired className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">The Evolution of API-Led Integration</h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  When MuleSoft popularized the concept of API-led connectivity, it was revolutionary, introducing a three-layered model:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {[
                    { title: "Experience APIs", desc: "For front-end interactions", color: "bg-green-50 border-green-200 text-green-800" },
                    { title: "Process APIs", desc: "For orchestration", color: "bg-blue-50 border-blue-200 text-blue-800" },
                    { title: "System APIs", desc: "For core systems", color: "bg-purple-50 border-purple-200 text-purple-800" }
                  ].map((layer, index) => (
                    <div key={index} className={`p-4 rounded-lg border ${layer.color}`}>
                      <h4 className="font-semibold mb-2">{layer.title}</h4>
                      <p className="text-sm">{layer.desc}</p>
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-700">
                  This three-layered model provided much-needed structure in an otherwise chaotic integration landscape. 
                  However, in today's environment — shaped by cloud-native architectures, microservices, AI, and edge computing — 
                  <strong> rigid, monolithic API hierarchies are starting to show their cracks.</strong>
                </p>
              </section>

              <Separator className="my-12" />

              {/* Section 2 */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <FaRocket className="h-6 w-6 text-red-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Why 2025 Demands a New Approach</h2>
                </div>

                <div className="space-y-8">
                  {/* Point 1 */}
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">1</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud-Native and Microservices Are the New Normal</h3>
                        <p className="text-gray-700">
                          Modern architectures are distributed, dynamic, and modular. Rigid API tiers slow down innovation 
                          and complicate scaling efforts. Organizations now need <strong>lightweight, event-driven, and 
                          decentralized integration strategies</strong> that align with microservices principles — not traditional 
                          enterprise service buses.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Point 2 */}
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">2</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Developer Experience is Critical</h3>
                        <p className="text-gray-700">
                          <strong>Speed wins.</strong> Developer productivity is now a direct driver of business value. 
                          If integration layers are too heavy or complex, they frustrate developers, increase time-to-market, 
                          and stifle agility. Modern integration strategies must prioritize <strong>self-service, API discoverability, 
                          and low-friction onboarding.</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Point 3 */}
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">3</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Data Gravity and Edge Computing</h3>
                        <p className="text-gray-700">
                          Data isn't just centralized in data centers anymore — it's everywhere. IoT devices, mobile apps, 
                          edge networks: each generates critical data points. In 2025, integration strategies must account for 
                          <strong> real-time, location-aware, and edge-driven APIs</strong>, moving beyond the traditional 
                          hub-and-spoke model.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Point 4 */}
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">4</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Security and Governance Have Evolved</h3>
                        <p className="text-gray-700">
                          With APIs being the new attack surface, securing integrations isn't just about gateways and firewalls. 
                          It's about <strong>zero-trust models, real-time monitoring, runtime security, and dynamic threat detection</strong> 
                          at the API level. Legacy models built purely around perimeter defenses are no longer enough.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <Separator className="my-12" />

              {/* Section 3 */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <FaRocket className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">The Future of API-Led Integration</h2>
                </div>

                <p className="text-gray-700 mb-8">What enterprises must embrace:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    { icon: FaNetworkWired, title: "Decentralized API Architectures", color: "text-blue-600" },
                    { icon: FaCogs, title: "Event-Driven Integrations", color: "text-green-600" },
                    { icon: FaCloud, title: "Federated API Management", color: "text-purple-600" },
                    { icon: FaCode, title: "Self-Service Developer Platforms", color: "text-orange-600" },
                    { icon: FaShieldAlt, title: "AI-Augmented Integration Monitoring", color: "text-red-600" },
                    { icon: FaRocket, title: "Edge-Optimized APIs", color: "text-indigo-600" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                      <span className="font-semibold text-gray-900">{item.title}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl">
                  <p className="text-lg font-medium">
                    Modern integration isn't just about connecting systems. It's about <strong>empowering teams, 
                    accelerating innovation, and future-proofing businesses.</strong>
                  </p>
                </div>
              </section>

              <Separator className="my-12" />

              {/* Section 4 */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <FaCogs className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">How Aaryati Technologies is Enabling the Shift</h2>
                </div>

                <p className="text-gray-700 mb-6">
                  At Aaryati Technologies, we believe that the future belongs to enterprises that break free from 
                  outdated, monolithic platforms. Our tools are designed to help businesses migrate from heavyweight 
                  integration solutions like MuleSoft to lightweight, scalable, open-source alternatives like Spring Boot — 
                  while drastically reducing manual efforts.
                </p>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8">
                  <h4 className="font-bold text-gray-900 mb-4">By embracing modern architectures, we help enterprises achieve:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Greater flexibility",
                      "Lower costs", 
                      "Faster innovation cycles",
                      "Enhanced security postures"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="text-green-600">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Final Thought */}
              <section className="mb-12">
                <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-8 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4">🔮 Final Thought</h2>
                  <p className="text-lg mb-4">
                    API-led integration isn't dead — but it must evolve. Enterprises that rethink their integration 
                    strategies in 2025 will be the ones who lead their industries into the next era of digital transformation.
                  </p>
                  <p className="text-xl font-semibold text-blue-300">
                    Are you ready to rethink your integration strategy? Let's build the future — together.
                  </p>
                </div>
              </section>

              {/* Tags */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "API Integration",
                    "Enterprise Architecture", 
                    "Cloud Native",
                    "Microservices",
                    "Future of Integration",
                    "Tech Trends 2025"
                  ].map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-blue-700 border-blue-200">
                      #{tag.replace(/\s+/g, '')}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Share Section */}
            <div className="border-t pt-8 mt-12">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Share this article</h4>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                      <FaTwitter className="mr-2 h-4 w-4" />
                      Twitter
                    </Button>
                    <Button size="sm" variant="outline" className="text-blue-700 border-blue-200 hover:bg-blue-50">
                      <FaLinkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                    <Button size="sm" variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                      <FaFacebook className="mr-2 h-4 w-4" />
                      Facebook
                    </Button>
                  </div>
                </div>
                <div className="text-right">
                  <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/request-demo">
                      <span>Get Started with Aaryati</span>
                      <FaRocket className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Why Enterprises Are Moving Away from Vendor Lock-In",
                  excerpt: "Exploring the business and technical reasons behind the shift to open-source solutions.",
                  link: "#vendor-lockin-blog"
                },
                {
                  title: "Spring Boot vs MuleSoft: Choosing the Right Path for Modernization",
                  excerpt: "A comprehensive comparison of integration platforms for enterprise modernization.",
                  link: "#springboot-vs-mulesoft"
                }
              ].map((article, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                  <h4 className="font-bold text-gray-900 mb-2">{article.title}</h4>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800" asChild>
                    <Link href={article.link}>
                      Read more →
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiIntegrationRethink2025;
