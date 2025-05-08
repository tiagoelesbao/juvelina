// src/components/sections/ViralTestimonialsSection.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Instagram, ChevronLeft, ChevronRight, PlayCircle, Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import TikTokIcon from '../ui/TikTokIcon';

const ViralTestimonialsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'energia' | 'imunidade' | 'beleza'>('all');
  const [activeSocialProof, setActiveSocialProof] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [videoRef, setVideoRef] = useState<HTMLDivElement | null>(null);
  
  const [countUpValues, setCountUpValues] = useState({
    customers: 0,
    reviews: 0,
    rating: 0,
  });
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  // Simulação de incremento de números para efeito visual
  useEffect(() => {
    if (inView) {
      const duration = 2000; // duração da animação em ms
      const interval = 20; // intervalo entre cada atualização em ms
      const steps = duration / interval;
      let currentStep = 0;
      
      const targetValues = {
        customers: 5863,
        reviews: 1247,
        rating: 4.9,
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
            reviews: Math.floor(targetValues.reviews * progress),
            rating: parseFloat((targetValues.rating * progress).toFixed(1)),
          });
        }
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [inView]);
  
  // Rotação automática de social proof
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSocialProof((prev) => (prev + 1) % socialProofs.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Dados de testemunhos
  const testimonials: TestimonialType[] = [
    {
      id: 1,
      name: "Amanda Silva",
      handle: "@amandasilva_fit",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      socialPlatform: 'tiktok',
      content: "Estou completamente impressionada com a Juvelina! Depois de apenas 3 semanas, minha energia mudou completamente. Acordo disposta e mantenho o foco o dia todo. Não é como energéticos que te dão pico e depois queda. É uma energia constante e natural! ✨",
      videoThumbnail: "https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      videoUrl: "https://www.tiktok.com/@user/video/123456789",
      rating: 5,
      tag: 'energia',
      verified: true,
      date: "28/04/2025",
      highlight: true
    },
    {
      id: 2,
      name: "Carlos Mendes",
      handle: "@carlosmendes.trainer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      socialPlatform: 'instagram',
      content: "Como treinador, já testei vários suplementos, mas nenhum com absorção tão rápida quanto Juvelina. No treino de força, aguentei 30% mais carga! Meus clientes também já estão percebendo a diferença em suas rotinas. Não tem volta! 💪",
      videoThumbnail: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80",
      videoUrl: "https://www.instagram.com/p/ABC123",
      rating: 5,
      tag: 'energia',
      verified: true,
      date: "15/04/2025"
    },
    {
      id: 3,
      name: "Patrícia Alves",
      handle: "@patriciaalvesoficial",
      avatar: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      socialPlatform: 'instagram',
      content: "Aos 42 anos, estava difícil manter a pele bonita e cabelos fortes, até encontrar Juvelina! Em apenas 1 mês, minhas amigas começaram a perguntar meu segredo. Meu dermatologista notou a diferença e até pediu para ver o produto! A elasticidade da pele melhorou muito! 🌟",
      rating: 5,
      tag: 'beleza',
      verified: true,
      date: "02/05/2025",
      highlight: true
    },
    {
      id: 4,
      name: "Rodrigo Costa",
      handle: "@rodrigocosta",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      socialPlatform: 'tiktok',
      content: "No inverno sempre ficava doente, mas desde que comecei com Juvelina, minha imunidade está no topo! Já faz 3 meses que não pego sequer um resfriado. O melhor é que não preciso tomar várias cápsulas - apenas 5ml uma vez ao dia e pronto! 👊",
      videoThumbnail: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      videoUrl: "https://www.tiktok.com/@user/video/987654321",
      rating: 5,
      tag: 'imunidade',
      verified: true,
      date: "27/04/2025"
    },
    {
      id: 5,
      name: "Ana Paula Monteiro",
      handle: "@anapaulamont",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      socialPlatform: 'instagram',
      content: "Confesso que estava cética no início, mas depois de 6 semanas usando Juvelina, não consigo mais ficar sem! Minhas unhas pararam de quebrar e meu cabelo está crescendo muito mais rápido e forte. Já comprei para toda minha família! 😍",
      rating: 4,
      tag: 'beleza',
      verified: true,
      date: "05/05/2025"
    },
    {
      id: 6,
      name: "Fernando Gomes",
      handle: "@fernandogfit",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      socialPlatform: 'tiktok',
      content: "Como personal trainer, recomendo Juvelina para todos meus alunos que precisam de mais energia. Eu mesmo uso diariamente antes dos treinos e sinto uma diferença absurda na performance. O sabor é bem neutro e fácil de tomar. Top demais! 💯",
      videoThumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      videoUrl: "https://www.tiktok.com/@user/video/741852963",
      rating: 5,
      tag: 'energia',
      verified: true,
      date: "30/04/2025"
    },
    {
      id: 7,
      name: "Camila Duarte",
      handle: "@camiladuarte.life",
      avatar: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      socialPlatform: 'instagram',
      content: "Achei que não ia notar diferença, mas estou totalmente surpresa! Não pego gripe há meses e minha energia está constante durante todo o dia. O melhor é que não dá aquela queda depois, como acontece com café. Vou continuar usando com certeza! 🌿",
      rating: 5,
      tag: 'imunidade',
      verified: true,
      date: "22/04/2025",
      highlight: true
    },
    {
      id: 8,
      name: "Lucas Marques",
      handle: "@lucasmarques",
      avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      socialPlatform: 'tiktok',
      content: "Sou médico e sempre fui cético com suplementos, mas os resultados dos estudos de biodisponibilidade da Juvelina me convenceram a testar. Após 2 meses, meus exames mostram níveis de vitamina D e zinco muito melhores. Recomendo a pacientes selecionados. 👨‍⚕️",
      rating: 5,
      tag: 'imunidade',
      verified: true,
      date: "18/04/2025"
    }
  ];
  
  // Posts em tempo real simulados
  const socialProofs = [
    {
      id: 1,
      name: "Julia Ribeiro",
      avatar: "https://images.unsplash.com/photo-1619785292559-a15caa28bde6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      action: "acabou de comprar Juvelina",
      time: "agora mesmo",
      location: "São Paulo, SP"
    },
    {
      id: 2,
      name: "Marcos Almeida",
      avatar: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      action: "assinou o plano mensal",
      time: "há 2 minutos",
      location: "Rio de Janeiro, RJ"
    },
    {
      id: 3,
      name: "Fernanda Costa",
      avatar: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      action: "comprou o kit 3 meses",
      time: "há 5 minutos",
      location: "Belo Horizonte, MG"
    },
    {
      id: 4,
      name: "Pedro Henrique",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      action: "deixou uma avaliação 5 estrelas",
      time: "há 10 minutos",
      location: "Curitiba, PR"
    }
  ];
  
  // Filtrar testemunhos
  const filteredTestimonials = activeFilter === 'all'
    ? testimonials
    : testimonials.filter(t => t.tag === activeFilter);
  
  // Número de itens por página
  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage);
  const visibleTestimonials = filteredTestimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  
  // Navegação de páginas
  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };
  
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };
  
  // Função para renderizar estrelas de avaliação
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={14} 
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };
  
  // Formatador de números
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  
  return (
    <section 
      id="depoimentos" 
      className="py-20 bg-gradient-to-b from-white to-juvelina-mint/10 relative overflow-hidden"
      ref={ref}
    >
      {/* Popup de atividade recente */}
      <div className="fixed bottom-5 left-5 z-50">
        <AnimatePresence>
          <motion.div
            key={activeSocialProof}
            initial={{ opacity: 0, y: 50, x: -100 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-xl p-3 max-w-xs border border-juvelina-mint/30"
          >
            <div className="flex items-center gap-3">
              <img 
                src={socialProofs[activeSocialProof].avatar} 
                alt={socialProofs[activeSocialProof].name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="font-medium text-sm">{socialProofs[activeSocialProof].name}</div>
                <div className="text-xs text-gray-600">
                  {socialProofs[activeSocialProof].action} <span className="text-green-500 font-medium">{socialProofs[activeSocialProof].time}</span>
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{socialProofs[activeSocialProof].location}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Background decorativo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-[10%] w-72 h-72 bg-juvelina-mint rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 right-[10%] w-64 h-64 bg-juvelina-gold rounded-full filter blur-3xl opacity-10"></div>
        
        {/* Padrão hexagonal sutil */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 17.32v34.64L30 60 0 51.96V17.32L30 0zm0 10.39L8.66 22.17v26.66L30 60l21.34-11.17V22.17L30 10.39z' fill='%23A9683D' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-juvelina-mint bg-opacity-30 px-4 py-1 rounded-full text-juvelina-emerald font-medium mb-4">
            Resultados Reais
          </span>
          <h2 className="text-3xl md:text-4xl font-['Ws_Paradose'] mb-4 text-juvelina-emerald">
            Transformações com Juvelina
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Veja o que nossos clientes reais estão compartilhando nas redes sociais sobre suas experiências com Juvelina.
          </p>
        </div>
        
        {/* Estatísticas em cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { 
              label: 'Clientes Satisfeitos', 
              value: formatNumber(countUpValues.customers), 
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            { 
              label: 'Avaliações 5 Estrelas', 
              value: formatNumber(countUpValues.reviews), 
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              )
            },
            { 
              label: 'Avaliação Média', 
              value: countUpValues.rating.toString(), 
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              extra: (
                <div className="flex items-center justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              )
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-16 h-16 mx-auto bg-juvelina-mint/30 rounded-full flex items-center justify-center text-juvelina-gold mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
              {stat.extra}
            </motion.div>
          ))}
        </div>
        
        {/* Filtros de categoria */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'Todos' },
            { id: 'energia', label: 'Energia' },
            { id: 'imunidade', label: 'Imunidade' },
            { id: 'beleza', label: 'Beleza' }
          ].map((filter) => (
            <button
              key={filter.id}
              className={`px-5 py-2 rounded-full transition-colors ${
                activeFilter === filter.id
                  ? 'bg-juvelina-gold text-white'
                  : 'bg-white text-gray-700 hover:bg-juvelina-mint/20'
              }`}
              onClick={() => {
                setActiveFilter(filter.id as any);
                setCurrentPage(0);
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Destaque para testemunho principal */}
        {testimonials.filter(t => t.highlight && (activeFilter === 'all' || t.tag === activeFilter)).slice(0, 1).map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="bg-white rounded-xl shadow-xl overflow-hidden mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid md:grid-cols-2">
              {/* Coluna da esquerda - Vídeo/Imagem */}
              <div className="relative">
                {testimonial.videoThumbnail ? (
                  <div 
                    className="relative h-full min-h-[300px] cursor-pointer group"
                    onClick={() => {
                      if (videoRef) {
                        videoRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }
                    }}
                  >
                    <img 
                      src={testimonial.videoThumbnail} 
                      alt={`Vídeo de ${testimonial.name}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="bg-white bg-opacity-90 rounded-full p-4"
                      >
                        <PlayCircle size={36} className="text-juvelina-gold" />
                      </motion.div>
                    </div>
                    <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1">
                      {testimonial.socialPlatform === 'tiktok' ? (
                        <TikTokIcon size={14} />
                      ) : (
                        <Instagram size={14} />
                      )}
                      <span>{testimonial.socialPlatform === 'tiktok' ? 'TikTok' : 'Instagram'}</span>
                    </div>
                  </div>
                ) : (
                  <div className="h-full min-h-[300px] bg-juvelina-mint/20 flex items-center justify-center">
                    <Quote size={48} className="text-juvelina-gold opacity-50" />
                  </div>
                )}
              </div>
              
              {/* Coluna da direita - Conteúdo */}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-juvelina-gold"
                  />
                  <div>
                    <h3 className="font-bold text-xl">{testimonial.name}</h3>
                    <div className="text-gray-500 text-sm">{testimonial.handle}</div>
                    <div className="flex items-center gap-2 mt-1">
                      {renderStars(testimonial.rating)}
                      {testimonial.verified && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-medium">
                          Verificado
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg relative mb-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8 text-juvelina-gold opacity-20 absolute top-2 left-2" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-700 relative z-10 pl-6">{testimonial.content}</p>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{testimonial.date}</span>
                  <span className="inline-block bg-juvelina-mint/30 text-xs font-medium text-juvelina-emerald px-3 py-1 rounded-full">
                    {testimonial.tag === 'energia' ? 'Energia' : 
                     testimonial.tag === 'imunidade' ? 'Imunidade' : 'Beleza'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Lista de testemunhos */}
        <div className="grid md:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Cabeçalho com avatar e informações */}
              <div className="p-4 border-b">
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <div className="flex items-center gap-1 text-gray-500">
                        {testimonial.socialPlatform === 'tiktok' ? (
                          <TikTokIcon size={16} />
                        ) : (
                          <Instagram size={16} />
                        )}
                      </div>
                    </div>
                    <div className="text-gray-500 text-xs">{testimonial.handle}</div>
                    <div className="flex items-center gap-2 mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Imagem/vídeo */}
              {testimonial.videoThumbnail && (
                <div 
                  className="relative h-48 cursor-pointer"
                  onClick={() => {
                    if (videoRef) {
                      videoRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                >
                  <img 
                    src={testimonial.videoThumbnail} 
                    alt={`Vídeo de ${testimonial.name}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center hover:bg-opacity-40 transition-all">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-white bg-opacity-90 rounded-full p-2"
                    >
                      <PlayCircle size={28} className="text-juvelina-gold" />
                    </motion.div>
                  </div>
                </div>
              )}
              
              {/* Conteúdo */}
              <div className="p-4">
                <p className="text-gray-700 text-sm">
                  {testimonial.content.length > 100 
                    ? `${testimonial.content.substring(0, 100)}...` 
                    : testimonial.content
                  }
                </p>
                
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs text-gray-500">{testimonial.date}</span>
                  <span className="inline-block bg-juvelina-mint/30 text-xs font-medium text-juvelina-emerald px-2 py-0.5 rounded-full">
                    {testimonial.tag === 'energia' ? 'Energia' : 
                     testimonial.tag === 'imunidade' ? 'Imunidade' : 'Beleza'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Navegação de páginas */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className={`p-2 rounded-lg ${
                currentPage === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-juvelina-gold hover:bg-juvelina-mint/20'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-10 h-10 rounded-lg ${
                  currentPage === index
                    ? 'bg-juvelina-gold text-white'
                    : 'bg-white text-gray-700 hover:bg-juvelina-mint/20'
                }`}
              >
                {index + 1}
              </button>
            ))}
            
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className={`p-2 rounded-lg ${
                currentPage === totalPages - 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-juvelina-gold hover:bg-juvelina-mint/20'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
        
        {/* CTA para compartilhar experiência */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-juvelina-gold to-juvelina-gold/80 rounded-xl p-8 text-white text-center max-w-3xl mx-auto shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold mb-2">Compartilhe sua Experiência</h3>
          <p className="mb-6">
            Use a hashtag #JuvelinaOrganics nas redes sociais para compartilhar sua transformação e aparecer aqui!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="bg-white text-juvelina-gold px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors font-medium flex items-center gap-2">
              <Instagram size={18} />
              Instagram
            </button>
            <button className="bg-white text-juvelina-gold px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors font-medium flex items-center gap-2">
              <TikTokIcon size={18} />
              TikTok
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Definição da interface para os testemunhos
interface TestimonialType {
  id: number;
  name: string;
  handle: string;
  avatar: string;
  socialPlatform: 'tiktok' | 'instagram';
  content: string;
  videoUrl?: string;
  videoThumbnail?: string;
  rating: number;
  tag: 'energia' | 'beleza' | 'imunidade';
  verified: boolean;
  date: string;
  highlight?: boolean;
}
// src/components/sections/ViralTestimonialsSection.tsx - Stats Animation Snippet
// Replace the existing stats section with this improved version

// Estatísticas em cards com animação
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
  {[
    { 
      label: 'Clientes Satisfeitos', 
      value: formatNumber(countUpValues.customers), 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      animationDelay: 0.1
    },
    { 
      label: 'Avaliações 5 Estrelas', 
      value: formatNumber(countUpValues.reviews), 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      animationDelay: 0.2
    },
    { 
      label: 'Avaliação Média', 
      value: countUpValues.rating.toString(), 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      animationDelay: 0.3,
      extra: (
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className="text-yellow-400 fill-yellow-400"
            />
          ))}
        </div>
      )
    },
  ].map((stat, index) => (
    <motion.div
      key={index}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: stat.animationDelay }}
    >
      <motion.div 
        className="w-16 h-16 mx-auto bg-juvelina-mint/30 rounded-full flex items-center justify-center text-juvelina-gold mb-4"
        animate={{ 
          scale: [1, 1.05, 1],
          boxShadow: [
            '0 0 0 rgba(169, 104, 61, 0.4)',
            '0 0 8px rgba(169, 104, 61, 0.6)',
            '0 0 0 rgba(169, 104, 61, 0.4)'
          ]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        {stat.icon}
      </motion.div>
      <motion.h3 
        className="text-3xl font-bold text-gray-800 mb-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: stat.animationDelay + 0.2, duration: 0.5 }}
      >
        {stat.value}
      </motion.h3>
      <p className="text-gray-600">{stat.label}</p>
      {stat.extra}
    </motion.div>
  ))}
</div>

// Add this to the top of the component:
// Estados para countUpValues e suas atualizações
const [countUpValues, setCountUpValues] = useState({
  customers: 0,
  reviews: 0,
  rating: 0,
});

// Add this inside the useEffect for inView:
if (inView) {
  const duration = 2000; // duração da animação em ms
  const interval = 20; // intervalo entre cada atualização em ms
  const steps = duration / interval;
  let currentStep = 0;
  
  const targetValues = {
    customers: 5863,
    reviews: 1247,
    rating: 4.9,
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
        reviews: Math.floor(targetValues.reviews * progress),
        rating: parseFloat((targetValues.rating * progress).toFixed(1)),
      });
    }
  }, interval);
  
  return () => clearInterval(timer);
}

export default ViralTestimonialsSection;