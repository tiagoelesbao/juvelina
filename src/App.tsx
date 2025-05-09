// src/App.tsx - VERSÃO CORRIGIDA
import { useState, useEffect, useRef, createContext } from 'react';
import { ShoppingCart, Menu, X, ArrowUp, Bell, Globe, Sparkles, User, Star } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

// Componentes de seções - IMPORTAÇÕES CORRIGIDAS
import HeroSection from './features/hero';
import { BenefitsSection, AbsorptionSection } from './features/benefits';
import { PricingSection, ViralOfferSection } from './features/pricing';
import { VideoTestimonialsSection, ViralTestimonialsSection, UGCGallerySection, TestimonialsSection } from './features/testimonials';
import { FaqSection, GuaranteeSection } from './features';

// Componentes de UI e layout
import Footer from './components/layout/Footer';
import PurchaseModal from './components/common/PurchaseModal';
import IngredientsList from './components/IngredientsList';
import { 
  CreatorBadge, 
  ScrollProgressBar, 
  RecentActivityNotification, 
  VisitorCounter 
} from './components/ui';

// Definir o contexto da aplicação
export const AppContext = createContext<{
  openPurchaseModal: (e?: React.MouseEvent) => void;
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

function App() {
  // Estado do modal de compra
  const [showModal, setShowModal] = useState(false);
  const [modalVariant, setModalVariant] = useState<'default' | 'exit-intent' | 'time-based'>('default');
  
  // Refs para controle de ações do modal
  const isActionInProgressRef = useRef(false);
  const modalCloseAttemptedRef = useRef(false);
  
  // Estado do menu mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Estados de UI
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showIngredients, setShowIngredients] = useState(false);
  const [exitIntentShown, setExitIntentShown] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lastActiveSection, setLastActiveSection] = useState<string>('hero');
  const [showWelcomeTooltip, setShowWelcomeTooltip] = useState(false);
  
  // Controle para notificações
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  
  // Estados de urgência e escassez
  const [discountTimer, setDiscountTimer] = useState({
    hours: 5,
    minutes: 59,
    seconds: 59
  });
  const [stockCount, setStockCount] = useState(54);
  
  // Referências para elementos DOM
  const appRef = useRef<HTMLDivElement>(null);
  
  // Controle para não exibir modais automáticos
  const [autoModalDisabled, setAutoModalDisabled] = useState(false);
  
  // Detectar se é mobile
  const [isMobile, setIsMobile] = useState(false);
  
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
  
  // Verificar se exibição automática do modal está desativada
  useEffect(() => {
    const isAutoDisabled = localStorage.getItem('juvelina_auto_modal_disabled') === 'true';
    setAutoModalDisabled(isAutoDisabled);
  }, []);
  
  // Determinar tipo de dispositivo
  useEffect(() => {
    const checkDevice = () => {
      const mobileCheck = window.innerWidth < 768;
      setIsMobile(mobileCheck);
      
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      
      setUserStats(prev => ({
        ...prev,
        deviceType: mobileCheck ? 'mobile' : isTablet ? 'tablet' : 'desktop'
      }));
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  
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
  
  // Detectar intent de saída - CORRIGIDO
  useEffect(() => {
    // Não mostrar intent de saída se já foi mostrado, se a exibição automática está desativada,
    // ou se o modal já estiver aberto
    if (exitIntentShown || autoModalDisabled || showModal) return;
    
    // Só mostramos após pelo menos 20 segundos no site
    const minTimeBeforeIntent = 20000; // 20 segundos
    
    // Verificamos se o usuário já está no site há tempo suficiente
    if (userStats.visitTime * 1000 < minTimeBeforeIntent) return;
    
    const handleMouseLeave = (e: MouseEvent) => {
      // Só ativamos se o cursor sair pela parte superior e se não estiver em mobile
      // Também verificamos se não há ação em progresso e o modal não está aberto
      if (e.clientY < 5 && !exitIntentShown && !autoModalDisabled && 
          window.innerWidth >= 768 && !isActionInProgressRef.current && !showModal) {
        setExitIntentShown(true);
        handleOpenPurchaseModal(undefined, 'exit-intent');
        
        // Rastreamento
        console.log('[Analytics] Exit intent detectado - Tempo: ' + userStats.visitTime + 's');
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [exitIntentShown, userStats.visitTime, autoModalDisabled, showModal]);
  
  // Timer para mostrar popup baseado no tempo - CORRIGIDO
  useEffect(() => {
    // Não mostrar se o modal já estiver aberto, se exit intent já foi mostrado,
    // ou se a exibição automática está desativada
    if (showModal || exitIntentShown || autoModalDisabled || isActionInProgressRef.current) return;
    
    // Mostrar modal após 60 segundos se o usuário não interagiu com a oferta
    const timeThreshold = 60; // 60 segundos
    
    // Verificamos se o usuário já está no site há tempo suficiente
    if (userStats.visitTime >= timeThreshold) {
      const shouldShowTimeBasedModal = Math.random() < 0.5; // 50% de chance
      
      if (shouldShowTimeBasedModal) {
        handleOpenPurchaseModal(undefined, 'time-based');
        
        // Eventos para analytics
        console.log('[Analytics] Modal baseado no tempo exibido - Tempo: ' + userStats.visitTime + 's');
      }
    }
  }, [userStats.visitTime, showModal, exitIntentShown, autoModalDisabled]);
  
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
  
  // FUNÇÃO CORRIGIDA para abrir o modal de compra
  const handleOpenPurchaseModal = (e?: React.MouseEvent, variant: 'default' | 'exit-intent' | 'time-based' = 'default') => {
    // Prevenir comportamento padrão se evento for fornecido
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Evitar múltiplas aberturas simultâneas
    if (isActionInProgressRef.current || showModal) return;
    
    // Marca que uma ação está em progresso
    isActionInProgressRef.current = true;
    
    // Define o variante e abre o modal
    setModalVariant(variant);
    
    // Pequeno delay para sincronizar estado
    setTimeout(() => {
      setShowModal(true);
      
      // Libera para novas ações após a animação
      setTimeout(() => {
        isActionInProgressRef.current = false;
      }, 600);
    }, 50);
    
    // Eventos para analytics
    console.log('[Analytics] CTA Clicado: Abrir Modal de Compra - Variante: ' + variant);
  };
  
  // FUNÇÃO CORRIGIDA para fechar o modal
  const handleCloseModal = () => {
    // Evitar múltiplos fechamentos
    if (isActionInProgressRef.current || modalCloseAttemptedRef.current) return;
    
    // Marca que uma ação está em progresso e que tentamos fechar
    isActionInProgressRef.current = true;
    modalCloseAttemptedRef.current = true;
    
    // Fecha o modal com pequeno delay
    setTimeout(() => {
      setShowModal(false);
      
      // Marca como fechado no localStorage para controlar exibição automática
      localStorage.setItem('juvelina_auto_modal_disabled', 'true');
      setAutoModalDisabled(true);
      
      // Libera para novas ações após a animação
      setTimeout(() => {
        isActionInProgressRef.current = false;
        modalCloseAttemptedRef.current = false;
      }, 600);
    }, 50);
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
        
        {/* Componente de notificações flutuantes - apenas em desktop */}
        {!isMobile && <CreatorBadge />}
        
        {/* Nova Notificação de Atividade Recente - apenas nas seções relevantes */}
        <RecentActivityNotification 
          enabled={notificationsEnabled} 
          currentSection={lastActiveSection}
          isMobile={isMobile}
        />
        
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
        
        {/* Contador de visitantes - Versão adaptativa */}
        <div className="fixed bottom-5 right-5 z-40">
          <VisitorCounter compact={isMobile} />
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
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowIngredients(true);
                    console.log('[Analytics] Visualização de Ingredientes');
                  }}
                  className="text-gray-600 hover:text-juvelina-gold transition font-medium"
                >
                  Ingredientes
                </button>
                <button 
                  onClick={(e) => handleOpenPurchaseModal(e)}
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
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setShowIngredients(true);
                      setMobileMenuOpen(false);
                    }}
                  >
                    Ingredientes
                  </button>
                  <button 
                    onClick={(e) => {
                      handleOpenPurchaseModal(e);
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
          <HeroSection onCtaClick={(e) => handleOpenPurchaseModal(e)} />
          
          {/* Video Testimonials Section */}
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
          <ViralOfferSection onCtaClick={(e) => handleOpenPurchaseModal(e)} />
          
          {/* Pricing Section */}
          <PricingSection onCtaClick={(e) => handleOpenPurchaseModal(e)} />
          
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
          personalizedTitle={
            modalVariant === 'exit-intent' 
              ? "Espere! Oferta Especial para Você"
              : getPersonalizedCTA()
          }
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

export default App;