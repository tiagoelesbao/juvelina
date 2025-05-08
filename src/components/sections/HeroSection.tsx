// src/components/sections/HeroSection.tsx - CORRECTED VERSION
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ChevronDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import AnimatedButton from '../ui/AnimatedButton';

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const [countUpValues, setCountUpValues] = useState({
    customers: 0,
    nutrients: 0,
    guarantee: 0,
  });
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animate count-up effect when section is in view
  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const interval = 20; // Update every 20ms
      const steps = duration / interval;
      let currentStep = 0;
      
      const targetValues = {
        customers: 5000,
        nutrients: 25,
        guarantee: 100,
      };
      
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        if (currentStep >= steps) {
          setCountUpValues(targetValues);
          clearInterval(timer);
        } else {
          setCountUpValues({
            customers: Math.floor(targetValues.customers * progress),
            nutrients: Math.floor(targetValues.nutrients * progress),
            guarantee: Math.floor(targetValues.guarantee * progress),
          });
        }
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [inView]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" ref={ref}>
      {/* Improved background with subtle gradient and hexagonal pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-juvelina-mint/20 to-white z-0"></div>
      
      {/* Subtle hexagonal pattern with reduced opacity and no animation */}
      <div className="absolute inset-0 opacity-5 z-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 17.32v34.64L30 60 0 51.96V17.32L30 0zm0 10.39L8.66 22.17v26.66L30 60l21.34-11.17V22.17L30 10.39z' fill='%23A9683D' fill-opacity='0.7' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
      }}></div>
      
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-juvelina-mint opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-juvelina-gold opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-juvelina-mint bg-opacity-30 px-4 py-1 rounded-full text-juvelina-gold font-medium mb-6">
              Inovação Natural para 2025
            </span>
            <h1 className="text-4xl md:text-5xl font-['Ws_Paradose'] leading-tight mb-6 text-black">
              Absorção <span className="font-bold">5x Superior</span> em <br className="hidden md:block" /> 
              <span className="text-juvelina-gold font-bold">Cada Gota</span>
            </h1>
            <p className="text-gray-700 text-lg mb-8">
              Desperte seu bem-estar com Juvelina: o suplemento líquido de alta absorção com 25 nutrientes premium que revoluciona sua energia, imunidade e beleza.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <AnimatedButton
                onClick={onCtaClick}
                color="gold"
                className="shadow-md"
              >
                <ShoppingCart size={20} />
                <span className="font-medium">Transforme sua Saúde Agora</span>
              </AnimatedButton>
              
              <AnimatedButton
                onClick={() => {
                  document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' });
                }}
                color="white"
              >
                Descobrir Benefícios
              </AnimatedButton>
            </div>
            
            {/* Stats with count-up animation */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              <motion.div 
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <div className="text-juvelina-gold font-bold text-xl mb-1">+{countUpValues.customers.toLocaleString()}</div>
                <p className="text-gray-600 text-xs">Clientes Satisfeitos</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="text-juvelina-gold font-bold text-xl mb-1">{countUpValues.nutrients}</div>
                <p className="text-gray-600 text-xs">Nutrientes Essenciais</p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="text-juvelina-gold font-bold text-xl mb-1">{countUpValues.guarantee}%</div>
                <p className="text-gray-600 text-xs">Garantia de Devolução</p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 flex justify-center relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              {/* Badge "Viral no TikTok" */}
              <motion.div
                className="absolute -top-4 -right-4 md:-right-10 z-10 bg-white rounded-full shadow-lg flex items-center p-2 gap-2"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M13 3L9 9L3 10l5 4-2 6 6-3 6 3-2-6 5-4-6-1z" />
                  </svg>
                </div>
                <span className="font-bold text-sm pr-1">Viral no TikTok</span>
              </motion.div>

              {/* Product image with floating animation */}
              <motion.img 
                src="/src/assets/images/juvelina-bottle.png" 
                alt="Suplemento Líquido Juvelina" 
                className="rounded-lg shadow-xl max-w-full h-auto relative z-10"
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
              
              {/* Seal of Certified Purity */}
              <div className="absolute -bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 text-juvelina-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-sm">Pureza Certificada</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-juvelina-gold flex flex-col items-center"
        >
          <ChevronDown size={30} />
          <span className="text-sm text-gray-500 mt-1">Descubra Mais</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;