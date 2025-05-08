// src/App.tsx
import { useState, useEffect } from 'react';
import { 
  ShoppingCart, 
  Menu, 
  X
} from 'lucide-react';
import HeroSection from './components/sections/HeroSection';
import BenefitsSection from './components/sections/BenefitsSection';
import AbsorptionSection from './components/sections/AbsorptionSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import PurchaseModal from './components/modals/PurchaseModal';
import IngredientsList from './components/IngredientsList';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showIngredients, setShowIngredients] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Marcar como carregado para animações iniciais
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Monitorar o scroll para efeitos visuais com otimização de performance
  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setScrollPosition(window.scrollY);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-['Zap'] overflow-x-hidden">
      {/* Announcement Bar */}
      <div className="bg-juvelina-gold text-white py-2">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm md:text-base animate-pulse-slow">
            🌿 Frete Grátis em Pedidos Acima de R$150 | Satisfação Garantida por 30 Dias 🌿
          </p>
        </div>
      </div>
      
      {/* Navigation */}
      <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrollPosition > 50 ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <motion.div 
                className="text-juvelina-emerald"
                initial={{ rotate: -10, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </motion.div>
              <span className="font-['Ws_Paradose'] text-2xl text-juvelina-emerald">Juvelina</span>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8 items-center">
              <a href="#beneficios" className="text-gray-600 hover:text-juvelina-emerald transition font-medium">Benefícios</a>
              <a href="#absorpcao" className="text-gray-600 hover:text-juvelina-emerald transition font-medium">Como Funciona</a>
              <a href="#ingredientes" className="text-gray-600 hover:text-juvelina-emerald transition font-medium">Ingredientes</a>
              <a href="#depoimentos" className="text-gray-600 hover:text-juvelina-emerald transition font-medium">Depoimentos</a>
              <a href="#planos" className="text-gray-600 hover:text-juvelina-emerald transition font-medium">Planos</a>
              <button 
                onClick={() => setShowModal(true)}
                className="bg-juvelina-emerald text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                <ShoppingCart size={18} />
                <span>Comprar</span>
              </button>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-juvelina-emerald"
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
                <a 
                  href="#beneficios" 
                  className="text-gray-600 hover:text-juvelina-emerald transition py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Benefícios
                </a>
                <a 
                  href="#absorpcao" 
                  className="text-gray-600 hover:text-juvelina-emerald transition py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Como Funciona
                </a>
                <a 
                  href="#ingredientes" 
                  className="text-gray-600 hover:text-juvelina-emerald transition py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Ingredientes
                </a>
                <a 
                  href="#depoimentos" 
                  className="text-gray-600 hover:text-juvelina-emerald transition py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Depoimentos
                </a>
                <a 
                  href="#planos" 
                  className="text-gray-600 hover:text-juvelina-emerald transition py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Planos
                </a>
                <button 
                  onClick={() => {
                    setShowModal(true);
                    setMobileMenuOpen(false);
                  }}
                  className="bg-juvelina-emerald text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition flex items-center justify-center gap-2 w-full mt-2 shadow-md"
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
        <HeroSection onCtaClick={() => setShowModal(true)} />
        
        {/* Benefits Section */}
        <BenefitsSection />
        
        {/* Absorption Comparison Section */}
        <AbsorptionSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Other sections... */}
      </main>

      {/* Footer */}
      <footer className="bg-juvelina-mint bg-opacity-10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Footer content here... */}
          </div>
        </div>
      </footer>

      {/* Modals */}
      <PurchaseModal isOpen={showModal} onClose={() => setShowModal(false)} />
      {showIngredients && <IngredientsList onClose={() => setShowIngredients(false)} />}
    </div>
  );
}

export default App;