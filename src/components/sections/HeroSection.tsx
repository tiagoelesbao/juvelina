// src/components/sections/HeroSection.tsx
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ChevronDown } from 'lucide-react';
// Importando com caminho absoluto em vez de relativo
import '../../animations.css';

// Definindo a interface para as props
interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  // Estado para controlar a visibilidade de elementos com base na visualização
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  
  // Estado para animação de contagem dos números
  const [stats, setStats] = useState([
    { id: 1, value: 0, target: 12500, label: 'Clientes Satisfeitos', icon: '👥' }, // Aumentado para valor mais impactante
    { id: 2, value: 0, target: 25, label: 'Nutrientes Premium', icon: '🌿' },
    { id: 3, value: 0, target: 100, label: 'Garantia de Satisfação', icon: '✓' },
  ]);
  
  // Rastreamento de scroll para animações - Threshold reduzido para garantir ativação
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("Hero section in view - activating animations");
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Reduzido de 0.2 para 0.1 para garantir detecção mais cedo
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animação de contagem para estatísticas - otimizada para garantir execução
  useEffect(() => {
    if (inView) {
      console.log("Starting counter animations");
      
      // Ajuste para garantir que os incrementos sejam proporcionais aos valores alvo
      const interval = setInterval(() => {
        let allCompleted = true;
        
        setStats(prev => 
          prev.map(stat => {
            if (stat.value < stat.target) {
              allCompleted = false;
              
              // Ajuste dinâmico de incremento baseado no tamanho do target
              const increment = stat.target > 1000 ? 
                Math.ceil(stat.target / 40) : 
                Math.max(1, Math.ceil(stat.target / 15));
              
              return {
                ...stat,
                value: Math.min(stat.value + increment, stat.target)
              };
            }
            return stat;
          })
        );
        
        if (allCompleted) {
          console.log("Counter animations completed");
          clearInterval(interval);
        }
      }, 30);
      
      return () => clearInterval(interval);
    }
  }, [inView]);

  // Benefícios-chave do produto
  const benefits = [
    { 
      id: 'energy', 
      icon: '⚡', 
      text: 'Energia Sustentada', 
      color: 'bg-yellow-100 text-yellow-700 border-yellow-300' 
    },
    { 
      id: 'immunity', 
      icon: '🛡️', 
      text: 'Imunidade Reforçada', 
      color: 'bg-green-100 text-green-700 border-green-300'
    },
    { 
      id: 'beauty', 
      icon: '✨', 
      text: 'Beleza Radiante', 
      color: 'bg-purple-100 text-purple-700 border-purple-300'
    }
  ];

  // Formatação de números para exibição - adaptada para números maiores
  const formatNumber = (num: number): string => {
    if (num >= 10000) {
      return `+${(num / 1000).toFixed(0)}mil`;
    } else if (num >= 1000) {
      return `+${(num / 1000).toFixed(1)}mil`.replace('.', ',');
    }
    return `${num}%`;
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(255,253,244,0.8) 0%, rgba(255,255,255,0.9) 50%, rgba(194,247,188,0.2) 100%)",
      }}
    >
      {/* ===== ELEMENTOS DE FUNDO ===== */}
      
      {/* Círculos com gradientes que criam uma sensação de profundidade */}
      <motion.div 
        className="absolute rounded-full opacity-20"
        style={{
          width: '60vw',
          height: '60vw',
          background: "radial-gradient(circle, rgba(169,104,61,0.1) 0%, transparent 70%)",
          top: '20%',
          right: '-20vw',
          filter: 'blur(60px)'
        }}
      />
      
      <motion.div 
        className="absolute rounded-full opacity-20"
        style={{
          width: '40vw',
          height: '40vw',
          background: "radial-gradient(circle, rgba(194,247,188,0.15) 0%, transparent 70%)",
          bottom: '10%',
          left: '-10vw',
          filter: 'blur(50px)'
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      {/* Efeito de luz central */}
      <div 
        className="absolute rounded-full opacity-30"
        style={{
          width: '30vw',
          height: '30vw',
          background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)",
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(60px)'
        }}
      />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ===== COLUNA DE TEXTO - ESQUERDA ===== */}
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge de inovação */}
            <motion.div 
              className="inline-block rounded-full px-4 py-1.5 mb-6 bg-gradient-to-r from-juvelina-mint/30 to-juvelina-mint/10 text-juvelina-gold font-medium"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Inovação Natural para 2025
            </motion.div>
            
            {/* Headline principal */}
            <motion.h1 
              className="text-4xl md:text-6xl font-['Ws_Paradose'] font-bold leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <span className="block">Absorção <span className="text-juvelina-gold">5x Superior</span> em</span>
              
              <motion.span 
                className="block text-juvelina-gold"
                animate={{ 
                  y: [0, -5, 0],
                  textShadow: [
                    "0px 0px 0px rgba(169,104,61,0.3)",
                    "0px 5px 15px rgba(169,104,61,0.5)",
                    "0px 0px 0px rgba(169,104,61,0.3)"
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
            </motion.h1>
            
            {/* Subtítulo com copy focada em benefícios */}
            <motion.p 
              className="text-gray-700 text-lg md:text-xl font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Desperte seu bem-estar com Juvelina: o suplemento líquido de alta absorção 
              com 25 nutrientes premium que revoluciona:
            </motion.p>
            
            {/* Chips de Benefícios */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.id}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full border ${benefit.color}`}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: 0.6 + (index * 0.1), duration: 0.5 }
                  }}
                >
                  <span className="text-lg">{benefit.icon}</span>
                  <span className="font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <motion.button
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-white shadow-lg bg-gradient-to-r from-juvelina-gold to-juvelina-gold/90"
                style={{ 
                  boxShadow: "0 10px 20px rgba(169,104,61,0.3)"
                }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 25px rgba(169,104,61,0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={onCtaClick}
              >
                <ShoppingCart size={20} />
                <span>Transforme sua Saúde Agora</span>
              </motion.button>
              
              <motion.button
                className="flex items-center justify-center px-6 py-3.5 rounded-full font-medium border-2 border-juvelina-gold text-juvelina-gold bg-white/80 backdrop-blur-sm"
                whileHover={{ 
                  backgroundColor: "rgba(169,104,61,0.1)",
                  scale: 1.02
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Descobrir Benefícios
              </motion.button>
            </motion.div>
            
            {/* Estatísticas sociais - com animação de contagem otimizada */}
            <div 
              ref={statsRef}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.id}
                  className="bg-white/70 backdrop-blur-md p-4 rounded-xl border border-juvelina-gold/20 shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 15px 30px rgba(169,104,61,0.15)" 
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: inView ? 1 : 0, 
                    y: inView ? 0 : 20,
                    transition: { delay: 0.3 + index * 0.2, duration: 0.6 }
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="text-2xl md:text-3xl font-bold mb-1 text-gradient-gold animate-shimmer">
                      {stat.id === 1 ? formatNumber(stat.value) : `${stat.value}${stat.id === 3 ? '%' : ''}`}
                    </div>
                    <div className="text-sm text-gray-700">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* ===== COLUNA DA IMAGEM - DIREITA ===== */}
          <motion.div 
            className="md:col-span-1 order-1 md:order-2 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {/* TikTok Badge - posicionado no topo da coluna */}
            <motion.div
              className="absolute -top-10 right-0 z-20"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.div
                className="bg-white rounded-full shadow-xl flex items-center p-3 gap-2"
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    "0px 10px 25px rgba(0, 0, 0, 0.15)",
                    "0px 4px 10px rgba(0, 0, 0, 0.1)"
                  ]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  repeatType: "reverse"
                }}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="w-10 h-10 bg-black rounded-full flex items-center justify-center"
                  animate={{ 
                    opacity: [0.8, 1, 0.8],
                    filter: [
                      "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.2))",
                      "drop-shadow(0px 0px 10px rgba(238, 29, 82, 0.5))",
                      "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.2))"
                    ]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                >
                  {/* TikTok Icon */}
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="white"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </motion.div>
                <div className="flex flex-col">
                  <motion.span 
                    className="font-bold text-sm"
                    animate={{ 
                      color: ["#000000", "#EE1D52", "#000000"],
                      textShadow: [
                        "0px 0px 0px rgba(238, 29, 82, 0)",
                        "0px 0px 5px rgba(238, 29, 82, 0.5)",
                        "0px 0px 0px rgba(238, 29, 82, 0)"
                      ]
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
            </motion.div>
          
            {/* Container da imagem principal - APRIMORADO */}
            <div className="relative mx-auto max-w-lg"> {/* Aumentado para max-w-lg */}
              {/* Efeito de luz radial aumentado */}
              <div 
                className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(169,104,61,0.15) 0%, transparent 70%)",
                  filter: "blur(30px)",
                  transform: "scale(1.2)" // Aumentado para dar mais destaque
                }}
              />
              
              {/* Imagem do produto com tamanho aumentado */}
              <motion.div
                className="relative z-10"
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  ease: "easeInOut" 
                }}
              >
                {/* Mantendo a URL do Imgur conforme solicitado */}
                <img 
                  src="https://i.imgur.com/Gkaa22f.png" 
                  alt="Suplemento Líquido Juvelina" 
                  className="max-w-full h-auto"
                  style={{ 
                    filter: "drop-shadow(0px 30px 60px rgba(169,104,61,0.3))",
                    transform: "scale(1.25)" // Aumentado de 1.15 para 1.25
                  }}
                />
              </motion.div>

              {/* Selos de certificação - reposicionados para melhor encaixe com o frasco maior */}
              <motion.div 
                className="absolute top-1/4 -left-16 transform" // Ajustado de -left-12 para -left-16
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.div
                  className="bg-white rounded-full pl-2 pr-4 py-2 flex items-center gap-2 shadow-lg"
                  style={{
                    boxShadow: "0 10px 25px rgba(169,104,61,0.2)",
                    border: "1px solid rgba(169,104,61,0.1)"
                  }}
                  whileHover={{ y: -3, boxShadow: "0 12px 30px rgba(169,104,61,0.3)" }}
                  animate={{ y: [0, -5, 0] }} // Adicionada animação de flutuação suave
                  transition={{ 
                    y: { duration: 3, repeat: Infinity, repeatType: "reverse" }
                  }}
                >
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-green-100"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span 
                    className="font-medium text-sm text-gray-700"
                  >
                    Dermatologicamente Testado
                  </span>
                </motion.div>
              </motion.div>
              
              {/* Selo de Pureza Certificada - reposicionado */}
              <motion.div
                className="bg-white rounded-full pl-2 pr-4 py-2 flex items-center gap-2 shadow-lg absolute -bottom-8 right-0" // Ajustado de -bottom-6 para -bottom-8
                style={{
                  boxShadow: "0 10px 25px rgba(169,104,61,0.2)",
                  border: "1px solid rgba(169,104,61,0.1)"
                }}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: [0, -4, 0] // Animação de flutuação
                }}
                transition={{ 
                  delay: 1, 
                  duration: 0.5,
                  y: { delay: 1.5, duration: 4, repeat: Infinity, repeatType: "reverse" }
                }}
                whileHover={{ y: -3, boxShadow: "0 12px 30px rgba(169,104,61,0.3)" }}
              >
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(169,104,61,0.15)" }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="15" 
                    height="15" 
                    viewBox="0 0 20 20" 
                    fill="#A9683D"
                  >
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span 
                  className="font-medium text-sm text-gray-700"
                >
                  Pureza Certificada
                </span>
              </motion.div>
              
              {/* Selo adicional - reposicionado */}
              <motion.div
                className="bg-white rounded-full pl-2 pr-4 py-2 flex items-center gap-2 shadow-lg absolute bottom-1/3 -left-12" // Ajustado de -left-10 para -left-12
                style={{
                  boxShadow: "0 10px 25px rgba(169,104,61,0.2)",
                  border: "1px solid rgba(169,104,61,0.1)"
                }}
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: 0,
                  y: [0, -5, 0] // Animação de flutuação
                }}
                transition={{ 
                  delay: 1.2, 
                  duration: 0.5,
                  y: { delay: 1.7, duration: 3.5, repeat: Infinity, repeatType: "reverse" }
                }}
                whileHover={{ y: -3, boxShadow: "0 12px 30px rgba(169,104,61,0.3)" }}
              >
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-100"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <span 
                  className="font-medium text-sm text-gray-700"
                >
                  100% Natural
                </span>
              </motion.div>
              
              {/* Novo selo "Absorção 5x" - adicionado para melhor balanceamento visual */}
              <motion.div
                className="bg-white rounded-full pl-2 pr-4 py-2 flex items-center gap-2 shadow-lg absolute top-1/2 -right-14"
                style={{
                  boxShadow: "0 10px 25px rgba(169,104,61,0.2)",
                  border: "1px solid rgba(169,104,61,0.1)"
                }}
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: 0,
                  y: [0, -5, 0] // Animação de flutuação
                }}
                transition={{ 
                  delay: 1.4, 
                  duration: 0.5,
                  y: { delay: 1.9, duration: 3.7, repeat: Infinity, repeatType: "reverse" }
                }}
                whileHover={{ y: -3, boxShadow: "0 12px 30px rgba(169,104,61,0.3)" }}
              >
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(169,104,61,0.15)" }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#A9683D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <span 
                  className="font-medium text-sm text-gray-700"
                >
                  Absorção 5x
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-juvelina-gold"
        >
          <ChevronDown size={30} />
          <span className="text-sm text-gray-500 mt-1">Descubra Mais</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;