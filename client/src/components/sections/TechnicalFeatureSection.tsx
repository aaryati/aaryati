import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaCode, FaJava, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const features = [
  {
    title: "Database Connectors",
    description: "Support for all major database systems including Oracle, MySQL, PostgreSQL, and MongoDB"
  },
  {
    title: "HTTP & REST",
    description: "Complete support for REST APIs, webhooks, and HTTP listeners"
  },
  {
    title: "Enterprise Systems",
    description: "Seamless migration of SAP, Salesforce, and other enterprise integrations"
  },
  {
    title: "Messaging Systems",
    description: "Full support for JMS, Kafka, RabbitMQ, and other messaging platforms"
  }
];

// Code Conversion Examples for Carousel
const codeExamples = [
  {
    id: 1,
    muleFile: "muleflow.xml",
    springFile: "RestController.java",
    muleCode: `// Mulesoft XML Flow
<flow name="api-main">
  <http:listener path="/api/data"
    config-ref="HTTP_Config"/>
  <db:select
    config-ref="Database_Config">
    "SELECT * FROM users"
  </db:select>
  <transform>
    %dw 2.0
  </transform>
</flow>`,
    springCode: `// Spring Boot Controller
@RestController
@RequestMapping("/api")
public class DataController {
  @Autowired
  private UserRepository userRepo;
  
  @GetMapping("/data")
  public List<User> getData() {
    return userRepo.findAll();
  }
}`
  },
  {
    id: 2,
    muleFile: "errorHandler.xml",
    springFile: "ExceptionHandler.java",
    muleCode: `// Mulesoft Error Handler
<error-handler name="apiErrorHandler">
  <on-error-propagate type="DB:CONNECTIVITY">
    <ee:transform>
      <ee:message>
        <ee:set-payload>
          {"error": "Database connection failed"}
        </ee:set-payload>
      </ee:message>
      <ee:variables>
        <ee:set-variable>500</ee:set-variable>
      </ee:variables>
    </ee:transform>
  </on-error-propagate>
</error-handler>`,
    springCode: `// Spring Boot Exception Handler
@ControllerAdvice
public class GlobalExceptionHandler {
  
  @ExceptionHandler(DataAccessException.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  public ResponseEntity<ErrorResponse> handleDbError(
      DataAccessException ex) {
    ErrorResponse error = new ErrorResponse(
      "Database connection failed");
    return new ResponseEntity<>(error, 
      HttpStatus.INTERNAL_SERVER_ERROR);
  }
}`
  },
  {
    id: 3,
    muleFile: "transformFlow.xml",
    springFile: "DataMapper.java",
    muleCode: `// Mulesoft Dataweave Transform
<flow name="transform-data">
  <http:listener path="/transform"/>
  <ee:transform>
    <ee:message>
      <ee:set-payload><![CDATA[%dw 2.0
output application/json
---
payload map ( item ) -> {
  id: item.id,
  fullName: item.firstName ++ " " ++ item.lastName,
  active: item.status == "ACTIVE"
}]]></ee:set-payload>
    </ee:message>
  </ee:transform>
</flow>`,
    springCode: `// Spring Boot Mapper
@Component
public class UserMapper {
  
  public List<UserDTO> transformUsers(List<User> users) {
    return users.stream()
      .map(user -> UserDTO.builder()
        .id(user.getId())
        .fullName(user.getFirstName() + " " + 
                  user.getLastName())
        .active("ACTIVE".equals(user.getStatus()))
        .build())
      .collect(Collectors.toList());
  }
}`
  }
];

const TechnicalFeatureSection = () => {
  const [activeExample, setActiveExample] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) return;
    
    const handleSelect = () => {
      if (api.selectedScrollSnap !== undefined) {
        setActiveExample(api.selectedScrollSnap());
      }
    };
    
    api.on("select", handleSelect);
    
    // Initial setting
    if (api.selectedScrollSnap !== undefined) {
      setActiveExample(api.selectedScrollSnap());
    }
    
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900/20 to-background z-0"></div>
      <div className="absolute top-0 -right-[400px] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-blue-500/10 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Carousel
              className="w-full"
              opts={{
                align: "center",
                loop: true,
              }}
              setApi={setApi}
            >
              <CarouselContent>
                {codeExamples.map((example, index) => (
                  <CarouselItem key={example.id}>
                    <div className="relative rounded-xl overflow-hidden border border-accent/20 shadow-xl shadow-primary/5">
                      {/* Code editor interface */}
                      <div className="bg-slate-900 w-full">
                        {/* Editor header */}
                        <div className="h-10 bg-slate-800 border-b border-slate-700 flex items-center px-4 text-xs text-gray-400">
                          <div className="flex space-x-1.5 mr-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                          </div>
                          <div className="flex space-x-2">
                            <span className="bg-blue-600/20 px-2 py-1 rounded text-blue-400">{example.muleFile}</span>
                            <span className="bg-green-600/20 px-2 py-1 rounded text-green-400">{example.springFile}</span>
                          </div>
                        </div>
                        
                        {/* Code content */}
                        <div className="grid grid-cols-2 h-full">
                          {/* Left side - Mulesoft code */}
                          <div className="p-5 bg-slate-900 border-r border-slate-700 text-sm font-mono" style={{ position: 'relative', height: "350px" }}>
                            <div className="h-full overflow-auto pr-2 custom-scrollbar">
                              <pre className="whitespace-pre-wrap text-xs sm:text-sm">
                                {example.muleCode.split('\n').map((line, i) => {
                                  if (line.includes("//")) {
                                    return <div key={i} className="text-slate-500">{line}</div>;
                                  } else if (line.includes("<flow")) {
                                    return <div key={i}><span className="text-blue-400">&lt;flow</span> <span className="text-blue-400">name=</span><span className="text-green-400">{line.includes('name=') ? line.match(/name="([^"]*)"/)?.[0] || '' : ''}</span><span className="text-blue-400">&gt;</span></div>;
                                  } else if (line.includes("<http:listener")) {
                                    return <div key={i} className="ml-2"><span className="text-blue-400">&lt;http:listener</span> <span className="text-blue-400">path=</span><span className="text-green-400">{line.includes('path=') ? line.match(/path="([^"]*)"/)?.[0] || '' : ''}</span><span className="text-blue-400">&gt;</span></div>;
                                  } else if (line.includes("<")) {
                                    // Handle XML tags with attributes
                                    return (
                                      <div key={i} className="text-blue-400 ml-2">{line.replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>')}</div>
                                    );
                                  } else if (line.includes("%dw")) {
                                    return <div key={i} className="text-purple-400 ml-2">{line}</div>;
                                  } else if (line.includes("output") || line.includes("---") || line.includes("payload")) {
                                    return <div key={i} className="ml-2">{line}</div>;
                                  } else if (line.includes("id:") || line.includes("fullName:") || line.includes("active:")) {
                                    return <div key={i} className="ml-4">{line}</div>;
                                  } else {
                                    return <div key={i}>{line}</div>;
                                  }
                                })}
                              </pre>
                            </div>
                          </div>
                          
                          {/* Right side - Spring Boot code */}
                          <div className="p-5 bg-slate-950 text-sm font-mono" style={{ position: 'relative', height: "350px" }}>
                            <div className="h-full overflow-auto pr-2 custom-scrollbar">
                              <pre className="whitespace-pre-wrap text-xs sm:text-sm">
                                {example.springCode.split('\n').map((line, i) => {
                                  if (line.includes("//")) {
                                    return <div key={i} className="text-slate-500">{line}</div>;
                                  } else if (line.includes("@Component") || line.includes("@RestController") || line.includes("@ControllerAdvice")) {
                                    return <div key={i} className="text-blue-400">{line}</div>;
                                  } else if (line.includes("@")) {
                                    return <div key={i} className="text-blue-400 ml-2">{line.replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>')}</div>;
                                  } else if (line.includes("public class")) {
                                    return <div key={i} className="text-purple-400">public class <span className="text-yellow-400">{line.match(/class\s+(\w+)/)?.[1] || ''}</span> {line.includes('{') ? '{' : ''}</div>;
                                  } else if (line.includes("public") && line.includes("(")) {
                                    const methodMatch = line.match(/public\s+(\w+(?:<[^>]*>)?)\s+(\w+)/);
                                    if (methodMatch) {
                                      return (
                                        <div key={i} className="text-purple-400 ml-2">
                                          public <span className="text-yellow-400">{methodMatch[1]}</span> {methodMatch[2]}
                                          {line.includes('(') ? line.substring(line.indexOf('(')) : ''}
                                        </div>
                                      );
                                    }
                                  } else if (line.includes("return")) {
                                    return <div key={i} className="text-yellow-400 ml-4">return <span className="text-white">{line.substring(line.indexOf('return') + 7)}</span></div>;
                                  } else if (line.trim() === '}' || line.trim() === '});') {
                                    return <div key={i} className={line.trim().length === 1 ? "" : "ml-2"}>{line}</div>;
                                  } else if (line.includes("{") || line.includes("}")) {
                                    return <div key={i} className="ml-2">{line}</div>;
                                  } else if (line.includes(".map(") || line.includes(".id(") || line.includes(".fullName(") || line.includes(".active(") || line.includes(".build()") || line.includes(".collect(")) {
                                    return <div key={i} className="ml-6">{line}</div>;
                                  } else {
                                    return <div key={i}>{line}</div>;
                                  }
                                })}
                              </pre>
                            </div>
                          </div>
                        </div>
                        
                        {/* Conversion indicators */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                          <div className="bg-blue-600/30 backdrop-blur-sm border border-blue-500/30 rounded-full p-3">
                            <FaCode className="text-blue-400 h-5 w-5" />
                          </div>
                        </div>
                        
                        <div className="h-10 bg-slate-800 border-t border-slate-700 flex items-center justify-between px-4 text-xs text-gray-400">
                          <div className="flex items-center">
                            <FaJava className="text-orange-400 mr-2" />
                            <span>Spring Boot 3.0</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-green-400">Conversion Complete</span>
                            <span className="ml-2 w-2 h-2 bg-green-500 rounded-full"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center items-center gap-4 mt-4">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-10 w-10 rounded-full bg-slate-800/50 hover:bg-slate-700/60 border-0 text-slate-400 hover:text-white"
                  onClick={() => api?.scrollPrev()}
                >
                  <FaChevronLeft className="h-4 w-4" />
                </Button>
                
                <div className="flex items-center gap-2">
                  {codeExamples.map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === activeExample 
                          ? 'bg-blue-500 scale-125' 
                          : 'bg-slate-600 opacity-60'
                      }`}
                    />
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-10 w-10 rounded-full bg-slate-800/50 hover:bg-slate-700/60 border-0 text-slate-400 hover:text-white"
                  onClick={() => api?.scrollNext()}
                >
                  <FaChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </Carousel>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Technical Excellence</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Comprehensive Connector Support</h3>
            
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Our platform supports the entire ecosystem of MuleSoft connectors, ensuring your migration covers all integration points.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <div className="shrink-0 inline-flex justify-center items-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                    <FaCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">{feature.title}</h4>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalFeatureSection;
