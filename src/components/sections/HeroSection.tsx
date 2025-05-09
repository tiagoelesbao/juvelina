// src/components/sections/HeroSection.tsx - Refined Version
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ShoppingCart, ChevronDown, TrendingUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import AnimatedButton from '../ui/AnimatedButton';

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animação para números de autoridade
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.2,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  // Animação TikTok Badge - efeito de pulsar e piscar
  const tikTokBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 400, 
        damping: 15,
        delay: 0.5
      }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background com gradientes elegantes e modernos */}
      <div className="absolute inset-0 bg-gradient-radial from-juvelina-mint/10 via-white to-juvelina-cream z-0"></div>
      
      {/* Linhas decorativas sutis */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-juvelina-gold/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-1/2 bg-gradient-to-t from-juvelina-mint/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-juvelina-gold/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Efeito de brilho sutil */}
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white opacity-30 rounded-full blur-3xl"></div>
      
      {/* Partículas sutis para criar movimento */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-juvelina-gold/10 to-juvelina-mint/10"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(40px)"
            }}
            animate={{
              y: [0, Math.random() * -50 - 20],
              x: [0, Math.random() * 30 - 15],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-gradient-to-r from-juvelina-mint/30 to-juvelina-mint/10 px-4 py-1 rounded-full text-juvelina-gold font-medium mb-6">
              Inovação Natural para 2025
            </span>
            <h1 className="text-4xl md:text-6xl font-['Ws_Paradose'] leading-tight mb-4 text-black font-bold">
              Absorção <span className="text-juvelina-gold">5x Superior</span> em <br className="hidden md:block" /> 
              <motion.span 
                className="text-juvelina-gold inline-block"
                animate={{ 
                  y: [0, -5, 0],
                  textShadow: [
                    "0px 0px 0px rgba(169, 104, 61, 0.3)",
                    "0px 5px 15px rgba(169, 104, 61, 0.5)",
                    "0px 0px 0px rgba(169, 104, 61, 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                Cada Gota
              </motion.span>
            </h1>
            
            {/* Subtítulo aprimorado com mais destaque e informações-chave */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mb-6"
            >
              <p className="text-gray-700 text-lg md:text-xl font-medium mb-4">
                Desperte seu bem-estar com Juvelina: o suplemento líquido de alta absorção 
                com 25 nutrientes premium que revoluciona sua energia, imunidade e beleza.
              </p>
              
              <div className="flex flex-wrap items-center gap-3 mt-2">
                {/* Pills destacando benefícios-chave */}
                {[
                  { text: "Energia Diária", color: "bg-yellow-100 text-yellow-800" },
                  { text: "Imunidade Reforçada", color: "bg-green-100 text-green-800" },
                  { text: "Pele e Cabelos", color: "bg-purple-100 text-purple-800" }
                ].map((item, index) => (
                  <motion.span
                    key={index}
                    className={`${item.color} text-sm font-medium px-3 py-1 rounded-full`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                  >
                    {item.text}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <AnimatedButton
                onClick={onCtaClick}
                color="gold"
                className="shadow-lg text-lg py-4 px-8"
              >
                <ShoppingCart size={20} />
                <span className="font-bold">Transforme sua Saúde Agora</span>
              </AnimatedButton>
              
              <AnimatedButton
                onClick={() => {
                  document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' });
                }}
                color="white"
                className="text-lg"
              >
                Descobrir Benefícios
              </AnimatedButton>
            </div>
            
            {/* Estatísticas com animação */}
            <motion.div 
              ref={ref}
              variants={statsVariants}
              initial="hidden"
              animate={controls}
              className="grid grid-cols-3 gap-3 text-center"
            >
              {[
                { value: '+5mil', label: 'Clientes Satisfeitos' },
                { value: '25', label: 'Nutrientes Essenciais' },
                { value: '100%', label: 'Garantia de Devolução' }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  variants={statItemVariants}
                  className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-md border border-juvelina-gold/10 hover:shadow-lg transition-shadow"
                >
                  <motion.div 
                    className="text-juvelina-gold font-bold text-2xl md:text-3xl"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 flex justify-center relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* TikTok Badge - Reposicionado mais para cima e com efeito de pulsar/piscar */}
            <motion.div
              className="absolute -top-16 right-0 z-10 bg-white rounded-full shadow-xl flex items-center p-3 gap-2"
              variants={tikTokBadgeVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                animate={{ 
                  opacity: [1, 0.7, 1],
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0px 0px 0px rgba(0, 0, 0, 0.1)",
                    "0px 0px 10px rgba(0, 0, 0, 0.2)",
                    "0px 0px 0px rgba(0, 0, 0, 0.1)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center"
              >
                {/* TikTok Icon */}
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" 
                  fill="currentColor"/>
                </svg>
              </motion.div>
              <div className="flex flex-col">
                <motion.span 
                  className="font-bold text-sm"
                  animate={{
                    color: ["#000000", "#E50A0A", "#000000"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  Viral no TikTok
                </motion.span>
                <span className="text-xs text-gray-500">+2M de visualizações</span>
              </div>
            </motion.div>

            <div className="relative w-full max-w-md">
              {/* Halo effect around product */}
              <div className="absolute inset-0 bg-gradient-radial from-juvelina-gold/20 to-transparent rounded-full blur-2xl"></div>
              
              {/* Imagem principal do produto */}
              <motion.div
                className="relative rounded-lg overflow-hidden"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30 z-10"
                  animate={{
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                ></motion.div>
                
                <img 
                  src="/src/assets/images/juvelina-bottle.png" 
                  alt="Suplemento Líquido Juvelina" 
                  className="rounded-lg max-w-full h-auto relative z-0"
                  style={{ filter: "drop-shadow(0px 20px 30px rgba(169, 104, 61, 0.3))" }}
                />
              </motion.div>
              
              {/* Selo de Pureza Certificada */}
              <motion.div
                className="absolute -bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg"
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-2 text-juvelina-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-sm">Pureza Certificada</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Indicador de scroll centralizado */}
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