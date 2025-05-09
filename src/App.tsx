// src/App.tsx - Versão refatorada com técnicas avançadas de conversão
import { useState, useEffect, useRef, createContext } from 'react';
import { ShoppingCart, Menu, X, ArrowUp, Bell, Globe, Sparkles, User, Star } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

// Componentes de seções
import HeroSection from './components/sections/HeroSection';
import BenefitsSection from './components/sections/BenefitsSection';
import AbsorptionSection from './components/sections/AbsorptionSection';
// import TestimonialsSection from './components/sections/TestimonialsSection';
import PricingSection from './components/sections/PricingSection';
import FaqSection from './components/sections/FaqSection';
import GuaranteeSection from './components/sections/GuaranteeSection';
import Footer from './components/Footer';
import VideoTestimonialsSection from './components/sections/VideoTestimonialsSection';
import UGCGallerySection from './components/sections/UGCGallerySection';
import ViralTestimonialsSection from './components/sections/ViralTestimonialsSection';
import ViralOfferSection from './components/sections/ViralOfferSection';

// Componentes de UI
import PurchaseModal from './components/modals/PurchaseModal';
import IngredientsList from './components/IngredientsList';
import CreatorBadge from './components/ui/CreatorBadge';
// import TikTokIcon from './components/ui/TikTokIcon';
import ScrollProgressBar from './components/ui/ScrollProgressBar';

// Definir o contexto da aplicação
export const AppContext = createContext<{
  openPurchaseModal: () => void;
  lastActiveSection: string;
  userStats: {
    visitTime: number;
    pageViews: number;
    scrollDepth: number;
  }
}>({
  openPurchaseModal: () => {},
  lastActiveSection: '',
  userStats: {
    visitTime: 0,
    pageViews: 0,
    scrollDepth: 0
  }
});

// Tipos para Social Proof
interface SocialProof {
  id: number;
  name: string;
  avatar: string;
  action: string;
  time: string;
  location: string;
}

interface Notification {
  id: number;
  type: 'purchase' | 'review' | 'stock' | 'discount';
  message: string;
  timestamp: number;
}

function App() {
  // Estado do modal de compra
  const [showModal, setShowModal] = useState(false);
  const [modalVariant, setModalVariant] = useState<'default' | 'exit-intent' | 'time-based'>('default');
  const [exitIntentShown, setExitIntentShown] = useState(false);
  const [modalClosedByUser, setModalClosedByUser] = useState(false);
  
  // Estado do menu mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Estados de UI
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showIngredients, setShowIngredients] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lastActiveSection, setLastActiveSection] = useState<string>('hero');
  const [showWelcomeTooltip, setShowWelcomeTooltip] = useState(false);
  
  // Estados de notificações e social proof
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showNotification, setShowNotification] = useState<number | null>(null);
  const [activeSocialProof, setActiveSocialProof] = useState<number | null>(null);
  
  // Estados de urgência e escassez
  const [discountTimer, setDiscountTimer] = useState({
    hours: 5,
    minutes: 59,
    seconds: 59
  });
  const [stockCount, setStockCount] = useState(54);
  const [visitorsCount, setVisitorsCount] = useState(Math.floor(Math.random() * 15) + 20);
  
  // Referências para elementos DOM
  const appRef = useRef<HTMLDivElement>(null);
  
  // Scroll progress com Framer Motion
  const { scrollYProgress } = useScroll();
  useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Stats do usuário para personalização
  const [userStats, setUserStats] = useState({
    visitTime: 0,
    pageViews: 1,
    scrollDepth: 0,
    interests: [] as string[],
    deviceType: 'desktop'
  });
  
  // Efeito para verificar se o modal já foi fechado pelo usuário anteriormente
  useEffect(() => {
    const wasModalClosed = localStorage.getItem('juvelina_modal_closed') === 'true';
    setModalClosedByUser(wasModalClosed);
  }, []);

  // Determinar tipo de dispositivo
  useEffect(() => {
    const checkDevice = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      
      setUserStats(prev => ({
        ...prev,
        deviceType: isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'
      }));
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  
  // Dados de social proof
  const socialProofs: SocialProof[] = [
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
  
  // Configuração do timer de desconto
  useEffect(() => {
    const timer = setInterval(() => {
      setDiscountTimer(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59, hours: prev.hours };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reiniciar o timer para manter a urgência
          return { hours: 4, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Simulação de variação de estoque
  useEffect(() => {
    const stockTimer = setInterval(() => {
      const randomReduction = Math.floor(Math.random() * 2) + 1;
      
      setStockCount(prev => {
        if (prev <= 10) {
          return Math.floor(Math.random() * 30) + 40;
        }
        return prev - randomReduction;
      });
    }, 60000); // A cada minuto
    
    return () => clearInterval(stockTimer);
  }, []);
  
  // Simulação de visitantes ativos
  useEffect(() => {
    const visitorsTimer = setInterval(() => {
      setVisitorsCount(prev => {
        // Gera uma mudança aleatória entre -2 e +3
        const change = Math.floor(Math.random() * 6) - 2;
        
        // Garantir que o número não fique abaixo de 18 ou acima de 40
        return Math.max(18, Math.min(40, prev + change));
      });
    }, 10000); // Atualiza a cada 10 segundos
    
    return () => clearInterval(visitorsTimer);
  }, []);
  
  // Monitorar tempo de visita do usuário
  useEffect(() => {
    const timer = setInterval(() => {
      setUserStats(prev => ({
        ...prev,
        visitTime: prev.visitTime + 1
      }));
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Monitorar posição de scroll e seção ativa
  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        const currentPosition = window.scrollY;
        setScrollPosition(currentPosition);
        setShowScrollTop(currentPosition > 600);
        
        // Rastrear profundidade de scroll para personalização de experiência
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrolledPercentage = (currentPosition / (documentHeight - windowHeight)) * 100;
        
        setUserStats(prev => ({
          ...prev,
          scrollDepth: Math.max(prev.scrollDepth, Math.round(scrolledPercentage))
        }));
        
        // Detectar seção atual para analytics e personalização
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(current => {
          const sectionHeight = current.clientHeight;
          const sectionTop = (current as HTMLElement).offsetTop - 100;
          const sectionId = current.getAttribute('id') || '';
          
          if (currentPosition > sectionTop && currentPosition <= sectionTop + sectionHeight) {
            if (lastActiveSection !== sectionId) {
              setLastActiveSection(sectionId);
              
              // Adicionar interesse com base na seção visualizada
              if (['beneficios', 'absorpcao', 'imunidade', 'beleza', 'energia'].includes(sectionId)) {
                setUserStats(prev => {
                  const newInterests = [...prev.interests];
                  if (!newInterests.includes(sectionId)) {
                    newInterests.push(sectionId);
                  }
                  return { ...prev, interests: newInterests };
                });
              }
              
              // Eventos para analytics (simulada)
              console.log(`[Analytics] Visualizando seção: ${sectionId} - Tempo: ${userStats.visitTime}s`);
            }
          }
        });
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastActiveSection, userStats.visitTime]);
  
  // Detectar intent de saída - Com correções
  useEffect(() => {
    // Não mostrar intent de saída se já foi fechado pelo usuário
    if (exitIntentShown || modalClosedByUser) return;
    
    // Só mostramos após pelo menos 20 segundos no site
    const minTimeBeforeIntent = 20000; // 20 segundos
    
    // Verificamos se o usuário já está no site há tempo suficiente
    if (userStats.visitTime * 1000 < minTimeBeforeIntent) return;
    
    const handleMouseLeave = (e: MouseEvent) => {
      // Só ativamos se o cursor sair pela parte superior e se não estiver em mobile
      if (e.clientY < 5 && !exitIntentShown && !modalClosedByUser && window.innerWidth >= 768) {
        setExitIntentShown(true);
        setModalVariant('exit-intent');
        setShowModal(true);
        
        // Marcamos como mostrado para não repetir
        console.log('[Analytics] Exit intent detectado - Tempo: ' + userStats.visitTime + 's');
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [exitIntentShown, userStats.visitTime, modalClosedByUser]);
  
  // Timer para mostrar popup baseado no tempo - Com correções
  useEffect(() => {
    // Não mostrar se modal já estiver aberto, se já tiver sido fechado pelo usuário,
    // ou se o exit intent já foi mostrado
    if (showModal || exitIntentShown || modalClosedByUser) return;
    
    // Mostrar modal após 60 segundos se o usuário não interagiu com a oferta
    const timeThreshold = 60; // 60 segundos
    
    // Verificamos se o usuário já está no site há tempo suficiente
    if (userStats.visitTime >= timeThreshold) {
      const shouldShowTimeBasedModal = Math.random() < 0.5; // Reduzido de 0.7 para 0.5 (50% de chance)
      
      if (shouldShowTimeBasedModal) {
        setModalVariant('time-based');
        setShowModal(true);
        
        // Eventos para analytics
        console.log('[Analytics] Modal baseado no tempo exibido - Tempo: ' + userStats.visitTime + 's');
      }
    }
  }, [userStats.visitTime, showModal, exitIntentShown, modalClosedByUser]);
  
  // Gerenciar social proofs
  useEffect(() => {
    // Mostrar primeiro social proof após 15 segundos
    const initialTimer = setTimeout(() => {
      setActiveSocialProof(0);
    }, 15000);
    
    // Rotacionar social proofs
    const interval = setInterval(() => {
      if (activeSocialProof !== null) {
        setActiveSocialProof(prev => prev !== null ? (prev + 1) % socialProofs.length : 0);
      }
    }, 8000);
    
    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [activeSocialProof]);
  
  // Gerenciar notificações
  useEffect(() => {
    // Criar algumas notificações para mostrar ao longo do tempo
    const createNotifications = () => {
      const newNotifications: Notification[] = [
        {
          id: 1,
          type: 'purchase',
          message: 'Alguém acabou de comprar Juvelina Organics',
          timestamp: Date.now() + 25000 // 25 segundos após carregar
        },
        {
          id: 2,
          type: 'stock',
          message: 'Restam apenas poucas unidades em estoque!',
          timestamp: Date.now() + 40000 // 40 segundos após carregar
        },
        {
          id: 3,
          type: 'discount',
          message: 'Oferta especial: 30% OFF por tempo limitado!',
          timestamp: Date.now() + 60000 // 60 segundos após carregar
        },
        {
          id: 4,
          type: 'review',
          message: 'Amanda acabou de avaliar Juvelina com 5 estrelas!',
          timestamp: Date.now() + 90000 // 90 segundos após carregar
        }
      ];
      
      setNotifications(newNotifications);
    };
    
    createNotifications();
    
    // Verifica a cada segundo quais notificações devem ser exibidas
    const notificationChecker = setInterval(() => {
      const currentTime = Date.now();
      
      // Encontrar a próxima notificação a ser mostrada
      const nextNotification = notifications.find(
        notif => notif.timestamp <= currentTime && (showNotification !== notif.id)
      );
      
      if (nextNotification) {
        setShowNotification(nextNotification.id);
        
        // Esconde a notificação após 5 segundos
        setTimeout(() => {
          setShowNotification(null);
          
          // Reagenda esta notificação para aparecer novamente mais tarde
          setNotifications(prev => 
            prev.map(n => 
              n.id === nextNotification.id 
                ? { ...n, timestamp: Date.now() + (Math.random() * 120000 + 60000) } 
                : n
            )
          );
        }, 5000);
      }
    }, 1000);
    
    return () => clearInterval(notificationChecker);
  }, [notifications, showNotification]);
  
  // Mostrar tooltip de boas-vindas inicial
  useEffect(() => {
    // Mostrar tooltip de boas-vindas após 2 segundos
    const welcomeTimer = setTimeout(() => {
      setShowWelcomeTooltip(true);
      
      // Esconder após 7 segundos
      setTimeout(() => {
        setShowWelcomeTooltip(false);
      }, 7000);
    }, 2000);
    
    return () => clearTimeout(welcomeTimer);
  }, []);
  
  // Função para abrir o modal de compra manualmente (para CTA)
  const handleOpenPurchaseModal = () => {
    if (!modalClosedByUser) {
      setModalVariant('default');
      setShowModal(true);
      
      // Eventos para analytics
      console.log('[Analytics] CTA Clicado: Abrir Modal de Compra - Seção: ' + lastActiveSection);
    }
  };
  
  // Função para fechar o modal - com atualização de estado
  const handleCloseModal = () => {
    setShowModal(false);
    
    // Quando o componente PurchaseModal chamar esta função com persistência,
    // ele já terá guardado a preferência no localStorage
    const wasModalClosed = localStorage.getItem('juvelina_modal_closed') === 'true';
    if (wasModalClosed) {
      setModalClosedByUser(true);
    }
  };
  
  // Função para rolar para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Navegação de seções para rastreamento de conversão
  const navigationItems = [
    { id: 'video-depoimentos', label: 'Resultados em Vídeo' },
    { id: 'beneficios', label: 'Benefícios' },
    { id: 'absorpcao', label: 'Como Funciona' },
    { id: 'ugc-gallery', label: 'Comunidade' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'garantia', label: 'Garantia' }
  ];
  
  // Função para navegar para seção
  const navigateToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
      
      // Fechar menu mobile se aberto
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
      
      // Rastreamento de navegação
      console.log(`[Analytics] Navegação para seção: ${sectionId} - Tempo: ${userStats.visitTime}s`);
    }
  };
  
  // Personalizar conteúdo baseado em interesses do usuário
  const getPersonalizedCTA = () => {
    // Se o usuário mostrou interesse em beleza
    if (userStats.interests.includes('beleza')) {
      return "Transforme Sua Beleza com Juvelina";
    }
    // Se o usuário mostrou interesse em energia
    else if (userStats.interests.includes('energia')) {
      return "Potencialize Sua Energia com Juvelina";
    }
    // Se o usuário mostrou interesse em imunidade
    else if (userStats.interests.includes('imunidade')) {
      return "Fortaleça Sua Imunidade com Juvelina";
    }
    // Padrão
    return "Transforme Sua Saúde com Juvelina";
  };
  
  return (
    <AppContext.Provider value={{ 
      openPurchaseModal: handleOpenPurchaseModal, 
      lastActiveSection,
      userStats: {
        visitTime: userStats.visitTime,
        pageViews: userStats.pageViews,
        scrollDepth: userStats.scrollDepth
      }
    }}>
      <div 
        className="min-h-screen bg-white text-gray-800 font-['Zap'] overflow-x-hidden relative"
        ref={appRef}
      >
        {/* Barra de progresso de scroll */}
        <ScrollProgressBar color="#A9683D" height={3} showPercentage={false} position="top" />
        
        {/* Componente de notificações flutuantes */}
        <CreatorBadge />
        
        {/* Popup de social proof */}
        <AnimatePresence>
          {activeSocialProof !== null && (
            <motion.div
              key={`social-proof-${activeSocialProof}`}
              initial={{ opacity: 0, y: 50, x: -100 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="fixed bottom-5 left-5 z-40 max-w-xs"
            >
              <div className="bg-white rounded-lg shadow-xl p-3 border border-juvelina-mint/30">
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Notificações do sistema */}
        <AnimatePresence>
          {showNotification !== null && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-20 right-5 z-40 max-w-xs bg-white rounded-lg shadow-lg p-3 border-l-4 border-juvelina-gold"
            >
              {notifications.find(n => n.id === showNotification)?.type === 'purchase' && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <ShoppingCart size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{notifications.find(n => n.id === showNotification)?.message}</div>
                    <div className="text-xs text-gray-500">Agora mesmo</div>
                  </div>
                </div>
              )}
              
              {notifications.find(n => n.id === showNotification)?.type === 'stock' && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                    <Bell size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{notifications.find(n => n.id === showNotification)?.message}</div>
                    <div className="text-xs text-gray-500">Restam apenas {stockCount} unidades</div>
                  </div>
                </div>
              )}
              
              {notifications.find(n => n.id === showNotification)?.type === 'discount' && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-juvelina-gold/20 rounded-full flex items-center justify-center text-juvelina-gold">
                    <Sparkles size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{notifications.find(n => n.id === showNotification)?.message}</div>
                    <div className="text-xs text-gray-500">Acaba em {discountTimer.hours}h {discountTimer.minutes}m</div>
                  </div>
                </div>
              )}
              
              {notifications.find(n => n.id === showNotification)?.type === 'review' && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Star size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{notifications.find(n => n.id === showNotification)?.message}</div>
                    <div className="text-xs text-gray-500">Há poucos minutos</div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Popup de boas-vindas */}
        <AnimatePresence>
          {showWelcomeTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-20 right-5 z-40 max-w-xs bg-white rounded-lg shadow-xl p-4 border border-juvelina-gold"
            >
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-juvelina-gold rounded-full flex items-center justify-center text-white">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Bem-vindo à Juvelina Organics!</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Descubra como nosso suplemento líquido pode transformar sua saúde e bem-estar.
                  </p>
                  <button 
                    className="mt-2 text-sm text-juvelina-gold font-medium hover:underline"
                    onClick={() => navigateToSection('beneficios')}
                  >
                    Explorar benefícios →
                  </button>
                </div>
                <button 
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowWelcomeTooltip(false)}
                >
                  <X size={16} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Contador de visitantes */}
        <div className="fixed bottom-5 right-5 z-40">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.5 }}
              className="bg-white rounded-full py-1 px-3 shadow-md border border-gray-100 flex items-center gap-2"
            >
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-gray-200 border border-white flex items-center justify-center text-xs font-bold text-gray-600"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-700 font-medium">
                {visitorsCount} pessoas vendo agora
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Announcement Bar - Gatilho de urgência e escassez */}
        <div className="bg-juvelina-gold text-white py-2 sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center md:justify-between">
              <p className="text-center text-sm md:text-base flex items-center justify-center gap-2 flex-grow">
                <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse"></span>
                🌿 OFERTA ESPECIAL: 30% OFF + Frete Grátis | Restam {discountTimer.hours}h:{discountTimer.minutes}m:{discountTimer.seconds}s | Apenas {stockCount} unidades! 🌿
              </p>
              <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Globe size={14} className="text-white" />
                  <select className="bg-transparent text-white text-sm border-none outline-none cursor-pointer">
                    <option value="pt-BR" className="text-gray-800">Português</option>
                    <option value="en-US" className="text-gray-800">English</option>
                    <option value="es-ES" className="text-gray-800">Español</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <header className={`bg-white sticky top-10 z-40 transition-all duration-300 ${scrollPosition > 50 ? 'shadow-md' : 'shadow-sm'}`}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
                <div className="text-juvelina-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <span className="font-['Ws_Paradose'] text-2xl text-juvelina-gold">Juvelina</span>
              </div>
              
              {/* Desktop Menu */}
              <nav className="hidden md:flex gap-6 items-center">
                {navigationItems.map((item) => (
                  <button 
                    key={item.id}
                    className={`text-gray-600 hover:text-juvelina-gold transition font-medium relative ${
                      lastActiveSection === item.id ? 'text-juvelina-gold' : ''
                    }`}
                    onClick={() => navigateToSection(item.id)}
                  >
                    {item.label}
                    {lastActiveSection === item.id && (
                      <motion.div 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-juvelina-gold"
                        layoutId="activeSection"
                      />
                    )}
                  </button>
                ))}
                <button 
                  onClick={() => {
                    setShowIngredients(true);
                    console.log('[Analytics] Visualização de Ingredientes');
                  }}
                  className="text-gray-600 hover:text-juvelina-gold transition font-medium"
                >
                  Ingredientes
                </button>
                <button 
                  onClick={handleOpenPurchaseModal}
                  className="bg-juvelina-gold text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  <ShoppingCart size={18} />
                  <span>Comprar</span>
                </button>
              </nav>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-juvelina-gold"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                className="md:hidden bg-white border-t border-gray-100 py-4"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="container mx-auto px-4 flex flex-col gap-4">
                  {navigationItems.map((item) => (
                    <button 
                      key={item.id}
                      className={`text-left text-gray-600 hover:text-juvelina-gold transition py-2 font-medium ${
                        lastActiveSection === item.id ? 'text-juvelina-gold' : ''
                      }`}
                      onClick={() => navigateToSection(item.id)}
                    >
                      {item.label}
                    </button>
                  ))}
                  <button 
                    className="text-left text-gray-600 hover:text-juvelina-gold transition py-2 font-medium"
                    onClick={() => {
                      setShowIngredients(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Ingredientes
                  </button>
                  <button 
                    onClick={() => {
                      handleOpenPurchaseModal();
                      setMobileMenuOpen(false);
                    }}
                    className="bg-juvelina-gold text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition flex items-center justify-center gap-2 w-full mt-2 shadow-md"
                  >
                    <ShoppingCart size={18} />
                    <span>Comprar Agora</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Main Content */}
       <main>
          {/* Hero Section */}
          <HeroSection onCtaClick={handleOpenPurchaseModal} />
          
          {/* Video Testimonials Section - MOVIDO PARA CÁ */}
          <VideoTestimonialsSection />
          
          {/* Benefits Section */}
          <BenefitsSection />
          
          {/* Absorption Comparison Section */}
          <AbsorptionSection />
          
          {/* UGC Gallery Section */}
          <UGCGallerySection />
          
          {/* Viral Testimonials Section */}
          <ViralTestimonialsSection />
          
          {/* Guarantee Section */}
          <GuaranteeSection />
          
          {/* Viral Offer Section */}
          <ViralOfferSection onCtaClick={handleOpenPurchaseModal} />
          
          {/* Pricing Section */}
          <PricingSection onCtaClick={handleOpenPurchaseModal} />
          
          {/* FAQ Section */}
          <FaqSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Modals e Overlays */}
        <PurchaseModal 
          isOpen={showModal} 
          onClose={handleCloseModal} 
          variant={modalVariant}
          personalizedTitle={getPersonalizedCTA()}
        />
        
        {showIngredients && <IngredientsList onClose={() => setShowIngredients(false)} />}
        
        {/* Botão de voltar ao topo */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              className="fixed bottom-20 right-5 w-12 h-12 bg-juvelina-gold/80 backdrop-blur-sm text-white rounded-full shadow-lg flex items-center justify-center z-40"
              onClick={scrollToTop}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </AppContext.Provider>
  );
}

// Componente para notificações de compras recentes e atividade
const RecentPurchaseNotifications = () => {
  const [notifications, setNotifications] = useState<Array<{
    id: number;
    name: string;
    product: string;
    time: string;
    location: string;
  }>>([]);
  
  useEffect(() => {
    const firstNames = [
      "Ana", "João", "Maria", "Pedro", "Julia", 
      "Carlos", "Márcia", "Renato", "Fernanda", "Lucas",
      "Gabriela", "Rafael", "Patricia", "Ricardo", "Camila"
    ];
    
    const cities = [
      "São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG", 
      "Curitiba, PR", "Brasília, DF", "Recife, PE", "Salvador, BA",
      "Porto Alegre, RS", "Fortaleza, CE", "Manaus, AM"
    ];
    
    const products = [
      "Juvelina Multivitamínico", 
      "Kit 3 Meses Juvelina", 
      "Assinatura Mensal"
    ];
    
    // Gerar notificação inicial após 15 segundos (aumentado de 10s para 15s)
    const initialTimer = setTimeout(() => {
      generateNotification();
    }, 15000);
    
    // Configurar intervalo maior para gerar notificações (entre 30-60 segundos)
    const interval = setInterval(() => {
      // 40% de chance de gerar uma notificação (reduzido de 50% para 40%)
      if (Math.random() < 0.4) {
        generateNotification();
      }
    }, Math.random() * 30000 + 30000); // Entre 30s e 60s
    
    function generateNotification() {
      const newNotification = {
        id: Date.now(),
        name: firstNames[Math.floor(Math.random() * firstNames.length)],
        product: products[Math.floor(Math.random() * products.length)],
        time: 'agora',
        location: cities[Math.floor(Math.random() * cities.length)]
      };
      
      setNotifications(prev => [newNotification, ...prev].slice(0, 1));
      
      // Remover após 7 segundos (aumentado de 5s para 7s)
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
      }, 7000);
    }
    
    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);
  
  return (
    <div className="fixed bottom-20 left-5 z-40">
      <AnimatePresence>
        {notifications.map(notification => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: -100, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-white rounded-lg shadow-xl p-3 mb-3 border-l-4 border-green-500 max-w-xs"
          >
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm">
                  <span className="font-medium">{notification.name}</span> de {notification.location} acabou de comprar
                </p>
                <p className="text-sm font-medium text-juvelina-gold">{notification.product}</p>
                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default App;