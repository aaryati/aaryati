import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FaCode, FaRocket, FaCheckCircle } from 'react-icons/fa';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().min(2, { message: 'Company name must be at least 2 characters.' }),
  role: z.string({ required_error: 'Please select your role.' }),
  appSize: z.string({ required_error: 'Please select your application size.' }),
  requirements: z.string().min(10, { message: 'Please provide some details about your requirements.' }),
});

type FormValues = z.infer<typeof formSchema>;

const RequestDemo = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      role: '',
      appSize: '',
      requirements: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // In a real implementation, this would send the form data to your backend
    alert('Thank you for requesting a demo! Our team will contact you shortly to schedule your personalized demonstration.');
    form.reset();
  };

  return (
    <>
      <Helmet>
        <title>Request a Demo - Aaryati Technologies</title>
        <meta name="description" content="Request a personalized demo of our MuleSoft to Spring Boot conversion platform and see how we can help streamline your migration process." />
      </Helmet>
      
      <section className="pt-16 pb-24 relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 z-0"></div>
        <div className="absolute -top-64 -right-64 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-64 -left-64 w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Request a Demo</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See our MuleSoft to Spring Boot conversion platform in action with a personalized demonstration tailored to your needs.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Demo Information */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-slate-900/80 backdrop-blur-sm border border-accent/20 rounded-xl p-8">
                <h2 className="text-2xl font-semibold mb-6">What to Expect</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3 text-primary">
                      <FaRocket className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Personalized Experience</h3>
                      <p className="text-gray-400 mt-1">
                        Our demo is tailored to your specific needs and environment, focusing on your MuleSoft applications.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3 text-primary">
                      <FaCode className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Live Conversion</h3>
                      <p className="text-gray-400 mt-1">
                        See real-time conversion of MuleSoft code to Spring Boot, with detailed explanation of the process.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3 text-primary">
                      <FaCheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Immediate Q&A</h3>
                      <p className="text-gray-400 mt-1">
                        Direct interaction with our engineers to answer your technical questions and address your concerns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Demo Request Form */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-slate-900/80 backdrop-blur-sm border border-accent/20 rounded-xl p-8">
                <h2 className="text-2xl font-semibold mb-6">Schedule Your Demo</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input
                                className="bg-slate-800/50 border-accent/30 focus:border-primary/70"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input
                                className="bg-slate-800/50 border-accent/30 focus:border-primary/70"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input
                                className="bg-slate-800/50 border-accent/30 focus:border-primary/70"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Role</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-slate-800/50 border-accent/30 focus:border-primary/70">
                                  <SelectValue placeholder="Select your role" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-slate-800 border-accent/30">
                                <SelectItem value="developer">Developer</SelectItem>
                                <SelectItem value="architect">Solution Architect</SelectItem>
                                <SelectItem value="manager">IT Manager</SelectItem>
                                <SelectItem value="executive">Executive</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="appSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Application Size</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-slate-800/50 border-accent/30 focus:border-primary/70">
                                <SelectValue placeholder="Select your application size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-slate-800 border-accent/30">
                              <SelectItem value="small">Small (1-5 flows)</SelectItem>
                              <SelectItem value="medium">Medium (6-15 flows)</SelectItem>
                              <SelectItem value="large">Large (16-30 flows)</SelectItem>
                              <SelectItem value="enterprise">Enterprise (30+ flows)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="requirements"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Requirements</FormLabel>
                          <FormControl>
                            <Textarea
                              className="min-h-[150px] bg-slate-800/50 border-accent/30 focus:border-primary/70"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="pt-2">
                      <Button 
                        type="submit" 
                        className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white"
                        size="lg"
                      >
                        Request Demo
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestDemo;