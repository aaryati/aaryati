import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/Logo';
import { FiSearch, FiChevronDown, FiMenu, FiX, FiChevronRight } from 'react-icons/fi';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const navItems = [
  {
    label: 'Product',
    href: '#',
    items: [
      { label: 'Mulesoft to Springboot', href: '/platform/mulesoft-to-springboot-conversion' },
    ],
  },
  {
    label: 'Solutions',
    items: [
      { label: 'Enterprise', href: '/solutions/enterprise' },
      { label: 'Financial Services', href: '/solutions/financial-services' },
    ],
  },
  {
    label: 'Customers',
    href: '#customers'
  },
  {
    label: 'Resources',
    href: '/resources',
    items: [
      { label: 'Blog', href: '/resources#blog' },
      { label: 'Documentation', href: '/resources#documentation' },
      { label: 'Case Studies', href: '/resources#case-studies' },
    ],
  },
  {
    label: 'Company',
    href: '/company',
    items: [
      { label: 'About Us', href: '/company' },
      { label: 'Team', href: '/company#team' },
      { label: 'Careers', href: '/company#careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    label: 'Pricing',
    href: null, // Making it non-clickable
    disabled: true
  },
];

const DesktopNavItem: React.FC<{ item: any }> = ({ item }) => {
  const [location] = useLocation();
  const isActive = item.href && (location === item.href || location.startsWith(`${item.href}/`));

  if (item.items) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <div className="flex items-center">
            <Link 
              href={item.href || '#'} 
              className={cn(
                "px-4 py-2 transition-colors",
                isActive 
                  ? "text-primary font-medium" 
                  : "text-gray-300 hover:text-white"
              )}
            >
              {item.label}
            </Link>
            <button className="p-1 text-gray-300 hover:text-white">
              <FiChevronDown className="h-4 w-4 opacity-60" />
            </button>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-0 bg-background border border-accent" align="start">
          <div className="grid gap-1 p-2">
            {item.items.map((subItem: any, idx: number) => {
              const isSubActive = subItem.href && location === subItem.href;
              return (
                <Link 
                  key={idx} 
                  href={subItem.href} 
                  className={cn(
                    "block px-3 py-2 hover:bg-accent rounded-md transition-colors",
                    isSubActive 
                      ? "text-primary font-medium" 
                      : "text-gray-300 hover:text-white"
                  )}
                  onClick={(e) => {
                    // Handle hash links for both company and resources pages
                    if (subItem.href.includes('#')) {
                      const isCompanyLink = subItem.href.includes('/company#') || (location === '/company' && subItem.href.includes('#'));
                      const isResourcesLink = subItem.href.includes('/resources#') || (location === '/resources' && subItem.href.includes('#'));
                      
                      if (isCompanyLink || isResourcesLink) {
                        e.preventDefault();
                        const sectionId = subItem.href.split('#')[1];
                        const element = document.getElementById(sectionId);
                        
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        } else if (subItem.href.includes('/')) {
                          // If we need to navigate to another page first
                          window.location.href = subItem.href;
                        }
                      }
                    }
                  }}
                >
                  {subItem.label}
                </Link>
              );
            })}
          </div>
        </PopoverContent>
      </Popover>
    );
  }

  // Handle disabled state for items like Pricing
  if (item.disabled) {
    return (
      <span className="inline-flex items-center px-4 py-2 text-gray-500 cursor-not-allowed">
        {item.label}
      </span>
    );
  }

  return (
    <Link 
      href={item.href || '#'} 
      className={cn(
        "inline-flex items-center px-4 py-2 transition-colors",
        isActive 
          ? "text-primary font-medium" 
          : "text-gray-300 hover:text-white"
      )}
    >
      {item.label}
    </Link>
  );
};

const Header = () => {
  const [location] = useLocation();

  return (
    <header className="sticky top-0 bg-blue-900/95 backdrop-blur-sm z-50 border-b border-accent/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex items-center mr-10">
              <Link href="/">
                <div className="flex items-center">
                  <Logo variant="icon" className="h-11 w-11" />
                  <span className="ml-2 text-2xl font-semibold text-white">Aaryati</span>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, idx) => (
                <DesktopNavItem key={idx} item={item} />
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="default" className="rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors" asChild>
              <Link href="/request-demo" className="flex items-center">
                <span>Get a Demo</span>
              </Link>
            </Button>
            
            {/* Mobile menu button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-gray-300 hover:text-white hover:bg-accent/40">
                  <FiMenu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-blue-900 border-l border-accent/20 w-[300px] sm:w-[350px] p-0 overflow-y-auto [&>button]:hidden">
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b border-accent/20 flex justify-between items-center">
                    <div className="flex items-center">
                      <Logo variant="icon" className="h-10 w-10" />
                      <span className="ml-2 text-xl font-semibold text-white">Aaryati</span>
                    </div>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                        <FiX className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>
                
                  <div className="flex-1 overflow-y-auto py-2">
                    <Accordion type="single" collapsible className="w-full">
                      {navItems.map((item, idx) => (
                        item.items ? (
                          <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-accent/10">
                            <div className="flex px-4">
                              <SheetClose asChild className="flex-grow">
                                <Link 
                                  href={item.href || '#'} 
                                  className={cn(
                                    "py-3 block",
                                    item.href && (location === item.href || location.startsWith(`${item.href}/`))
                                      ? "text-primary font-medium"
                                      : "text-gray-300 hover:text-white" 
                                  )}
                                >
                                  {item.label}
                                </Link>
                              </SheetClose>
                              <AccordionTrigger className="ml-auto"></AccordionTrigger>
                            </div>
                            <AccordionContent>
                              <div className="pl-4 space-y-1 mb-2">
                                {item.items.map((subItem: any, subIdx: number) => {
                                  const isSubActive = subItem.href && location === subItem.href;
                                  return (
                                    <SheetClose asChild key={subIdx}>
                                      <Link 
                                        href={subItem.href} 
                                        className={cn(
                                          "flex px-4 py-2 hover:text-white",
                                          isSubActive 
                                            ? "text-primary font-medium" 
                                            : "text-gray-400"
                                        )}
                                        onClick={(e) => {
                                          // Handle hash links for both company and resources pages
                                          if (subItem.href.includes('#')) {
                                            const isCompanyLink = subItem.href.includes('/company#') || (location === '/company' && subItem.href.includes('#'));
                                            const isResourcesLink = subItem.href.includes('/resources#') || (location === '/resources' && subItem.href.includes('#'));
                                            
                                            if (isCompanyLink || isResourcesLink) {
                                              e.preventDefault();
                                              const sectionId = subItem.href.split('#')[1];
                                              const element = document.getElementById(sectionId);
                                              
                                              if (element) {
                                                element.scrollIntoView({ behavior: 'smooth' });
                                              } else if (subItem.href.includes('/')) {
                                                // If we need to navigate to another page first
                                                window.location.href = subItem.href;
                                              }
                                            }
                                          }
                                        }}
                                      >
                                        {subItem.label}
                                      </Link>
                                    </SheetClose>
                                  );
                                })}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ) : item.disabled ? (
                          <div key={idx} className="border-b border-accent/10">
                            <div className="flex px-4 py-3 text-gray-500 cursor-not-allowed w-full">
                              {item.label}
                            </div>
                          </div>
                        ) : (
                          <div key={idx} className="border-b border-accent/10">
                            <SheetClose asChild>
                              <Link 
                                href={item.href || '#'} 
                                className={cn(
                                  "flex px-4 py-3 hover:text-white w-full",
                                  item.href && location === item.href 
                                    ? "text-primary font-medium" 
                                    : "text-gray-300"
                                )}
                              >
                                {item.label}
                                <FiChevronRight className="ml-auto opacity-60" />
                              </Link>
                            </SheetClose>
                          </div>
                        )
                      ))}
                    </Accordion>
                  </div>
                  
                  <div className="border-t border-accent/20 p-4 space-y-3">
                    <SheetClose asChild>
                      <Button className="w-full text-sm rounded-md bg-slate-800 hover:bg-slate-700 text-white" asChild>
                        <Link href="/request-demo">Get a Demo</Link>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
