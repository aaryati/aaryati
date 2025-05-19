import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/ui/Logo';
import { MessageSquare, X } from 'lucide-react';
import aaryatiIconPath from '@assets/A.png';

const ChatbotButton = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    setIsTooltipVisible(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isTooltipVisible && !isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute bottom-[80px] right-0 bg-white text-slate-900 p-4 rounded-lg shadow-lg max-w-xs"
            style={{ transformOrigin: 'bottom right' }}
          >
            <div className="flex items-start gap-3">
              <MessageSquare className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium mb-1">Need help with Mulesoft conversion?</p>
                <p className="text-sm text-slate-600">Chat with our AI assistant to get answers to your questions.</p>
              </div>
              <button 
                onClick={() => setIsTooltipVisible(false)}
                className="text-slate-400 hover:text-slate-600 flex-shrink-0"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="absolute bottom-[-8px] right-6 w-4 h-4 bg-white transform rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-[80px] right-0 bg-white rounded-lg shadow-xl overflow-hidden w-[330px] sm:w-[380px]"
            style={{ transformOrigin: 'bottom right' }}
          >
            <div className="bg-blue-600 text-white p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Logo variant="icon" className="h-8 w-8" />
                  <div>
                    <h3 className="font-semibold">Aaryati Assistant</h3>
                    <p className="text-xs text-blue-100">Online</p>
                  </div>
                </div>
                <button 
                  onClick={toggleChat} 
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="h-[300px] bg-slate-50 p-4 overflow-y-auto flex flex-col">
              <div className="bg-blue-100 text-slate-800 p-3 rounded-lg rounded-tl-none max-w-[80%] self-start mb-3">
                <p className="text-sm">
                  Hi there! I'm your Aaryati assistant. How can I help you with Mulesoft to Spring Boot migration today?
                </p>
              </div>
              
              {/* Placeholder for chat messages */}
              <div className="mt-auto text-center text-xs text-slate-400 py-3">
                This is a mock chatbot interface. In a real implementation, this would connect to a chat service.
              </div>
            </div>
            
            <div className="p-3 border-t border-slate-200">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className="w-full pl-4 pr-10 py-2 rounded-full border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating chat button */}
      <motion.button
        className="bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center h-16 w-16 relative overflow-hidden hover:bg-blue-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
        onMouseEnter={() => !isChatOpen && setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
      >
        <div className="flex items-center justify-center w-full h-full bg-white rounded-full m-1.5">
          <img 
            src={aaryatiIconPath}
            alt="Aaryati Chat" 
            className="h-9 w-9 object-contain" 
          />
        </div>
      </motion.button>
    </div>
  );
};

export default ChatbotButton;