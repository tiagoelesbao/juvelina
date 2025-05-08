// src/components/sections/HeroSection.tsx - ATUALIZADO
import { motion } from 'framer-motion';
import { ShoppingCart, ChevronDown } from 'lucide-react';
import React from 'react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="min-h-[90vh] flex items-center bg-gradient-to-b from-juvelina-mint/20 to-white relative overflow-hidden">
      {/* Padrão hexagonal sutil no fundo */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 17.32v34.64L30 60 0 51.96V17.32L30 0zm0 10.39L8.66 22.17v26.66L30 60l21.34-11.17V22.17L30 10.39z' fill='%23A9683D' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
      }}></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial="hidden"
            animate="show"
            variants={fadeIn}
          >
            <span className="inline-block bg-juvelina-mint bg-opacity-30 px-4 py-1 rounded-full text-juvelina-gold font-medium mb-6">
              Inovação Natural para 2025
            </span>
            <h1 className="text-4xl md:text-5xl font-['Ws_Paradose'] leading-tight mb-6 text-black">
              Absorção 5x Superior em <br className="hidden md:block" /> 
              <span className="text-juvelina-gold">Cada Gota</span>
            </h1>
            <p className="text-gray-700 text-lg mb-8">
              Desperte seu bem-estar com Juvelina: o suplemento líquido de alta absorção com 25 nutrientes premium que revoluciona sua energia, imunidade e beleza.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={onCtaClick}
                className="bg-juvelina-gold text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <ShoppingCart size={20} />
                <span className="font-medium">Transforme sua Saúde Agora</span>
              </button>
              
              <button
                className="bg-white text-juvelina-gold border border-juvelina-gold px-6 py-3 rounded-full hover:bg-juvelina-mint/10 transition-all"
                onClick={() => {
                  document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Descobrir Benefícios
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { value: '+5mil', label: 'Clientes Satisfeitos' },
                { value: '25', label: 'Nutrientes Essenciais' },
                { value: '100%', label: 'Garantia de Devolução' }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-juvelina-gold font-bold text-xl">{stat.value}</div>
                  <p className="text-gray-600 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 flex justify-center relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1607006333439-505849ef4f76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Suplemento Líquido Juvelina" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
              
              <div className="absolute -bottom-4 right-4 bg-white p-3 rounded-lg shadow-md">
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-juvelina-gold"
        >
          <ChevronDown size={30} />
        </motion.div>
        <span className="text-sm text-gray-500">Descubra Mais</span>
      </div>
    </section>
  );
};

export default HeroSection;