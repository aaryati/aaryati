import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';

// Sample blog post data
const featuredBlogs = [
  {
    id: 1,
    title: 'How to Migrate from MuleSoft to Spring Boot: A Step-by-Step Guide',
    category: 'Technical Guide',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2062&auto=format&fit=crop',
    url: 'https://medium.com/technology/how-to-migrate-from-mulesoft-to-spring-boot',
    date: 'May 5, 2025',
    source: 'Medium'
  },
  {
    id: 2,
    title: 'Case Study: How Company X Reduced Integration Costs by 60% with Aaryati',
    category: 'Case Study',
    image: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2070&auto=format&fit=crop',
    url: 'https://techcrunch.com/case-studies/company-x-reduces-costs-with-aaryati',
    date: 'April 18, 2025',
    source: 'TechCrunch'
  },
  {
    id: 3,
    title: 'The Future of API Integration: Moving Beyond MuleSoft',
    category: 'Industry Trends',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
    url: 'https://www.infoworld.com/article/future-of-api-integration',
    date: 'March 30, 2025',
    source: 'InfoWorld'
  },
  {
    id: 4,
    title: 'Enterprise Modernization: When to Migrate from MuleSoft to Spring Boot',
    category: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
    url: 'https://www.forbes.com/enterprise-modernization-mulesoft-migration',
    date: 'March 15, 2025',
    source: 'Forbes'
  },
  {
    id: 5,
    title: 'Aaryati Technologies Named One of Top 10 Integration Solutions of 2025',
    category: 'News',
    image: 'https://images.unsplash.com/photo-1624628639656-100bf817fd35?q=80&w=2070&auto=format&fit=crop',
    url: 'https://www.businessinsider.com/top-integration-solutions',
    date: 'February 22, 2025',
    source: 'Business Insider'
  },
  {
    id: 6,
    title: 'Automating MuleSoft to Spring Boot Conversion: The Aaryati Approach',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop',
    url: 'https://www.cio.com/articles/automation-mulesoft-spring-boot',
    date: 'February 10, 2025',
    source: 'CIO'
  }
];

// Featured Blog Card component
const FeaturedBlogCard = ({ blog }: { blog: typeof featuredBlogs[0] }) => {
  return (
    <a 
      href={blog.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <div className="bg-white rounded-xl overflow-hidden border border-blue-100/80 shadow-sm transition-all duration-300 h-full flex flex-col group-hover:shadow-md group-hover:border-blue-200">
        <div className="relative">
          <AspectRatio ratio={16/9}>
            <img 
              src={blog.image} 
              alt={blog.title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
          </AspectRatio>
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-white/90 text-slate-800 hover:bg-white/95">
              {blog.source}
            </Badge>
          </div>
        </div>
        
        <div className="p-5 flex flex-col flex-grow">
          <div className="mb-2 flex items-center">
            <Badge variant="outline" className="text-xs text-primary border-primary/30">
              {blog.category}
            </Badge>
            <span className="text-xs text-slate-500 ml-auto">{blog.date}</span>
          </div>
          
          <h3 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {blog.title}
          </h3>
          
          <div className="mt-auto pt-3 flex items-center text-sm text-primary font-medium">
            <span>Read article</span>
            <ExternalLink className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </a>
  );
};

const CallToAction = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Clean white background for a professional look */}
      <div className="absolute inset-0 bg-white z-0"></div>
      <div className="absolute -left-[400px] top-0 w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-3xl"></div>
      <div className="absolute -right-[400px] bottom-0 w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Featured Articles</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
            What People Are Saying About Us
          </h3>
          <p className="text-slate-600">
            Discover the latest articles, case studies, and insights about our Mulesoft to Spring Boot conversion solutions from leading technology publications.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {featuredBlogs.map((blog) => (
                <CarouselItem key={blog.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <FeaturedBlogCard blog={blog} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="mr-2 static translate-y-0" />
              <CarouselNext className="ml-2 static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
