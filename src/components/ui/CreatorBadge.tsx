// src/components/ui/CreatorBadge.tsx - CORRECTED VERSION
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, CheckCircle, Star } from 'lucide-react';
import TikTokIcon from './TikTokIcon';

interface Creator {
  id: number;
  name: string;
  handle: string;
  avatar: string;
  followers: string;
  verified: boolean;
  rating: number;
  quote: string;
  platform: 'instagram' | 'tiktok';
}

const CreatorBadge: React.FC = () => {
  const [showBadge, setShowBadge] = useState(false);
  const [activeCreator, setActiveCreator] = useState<number>(0);
  const [badgeClosed, setBadgeClosed] = useState<boolean>(false);
  
  // Lista de creators que endossam a marca
  const creators: Creator[] = [
    {
      id: 1,
      name: "Amanda Costa",
      handle: "@amandacosta",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      followers: "345K",
      verified: true,
      rating: 5,
      quote: "Juvelina mudou minha rotina! Recomendo para todas as minhas seguidoras.",
      platform: "instagram"
    },
    {
      id: 2,
      name: "Carol Fitness",
      handle: "@carolfitpro",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      followers: "198K",
      verified: true,
      rating: 5,
      quote: "O melhor suplemento que já testei! Faz parte da minha rotina de treinos.",
      platform: "tiktok"
    },
    {
      id: 3,
      name: "Dr. Marcelo",
      handle: "@drmarcelo.saude",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      followers: "521K",
      verified: true,
      rating: 5,
      quote: "Recomendo Juvelina aos meus pacientes pela alta absorção e qualidade.",
      platform: "instagram"
    }
  ];
  
  // Mostra o badge após um delay maior e alterna entre creators com intervalo maior
  useEffect(() => {
    // Não mostrar notificações se o usuário fechou manualmente
    if (badgeClosed) return;
    
    // Mostrar o badge após 25 segundos (aumentado de 20s para 25s)
    const timer = setTimeout(() => {
      setShowBadge(true);
    }, 25000);
    
    // Mudar de creator a cada 12 segundos (aumentado de 8s para 12s)
    const interval = setInterval(() => {
      if (showBadge) {
        setActiveCreator(prev => (prev + 1) % creators.length);
      }
    }, 12000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [showBadge, creators.length, badgeClosed]);
  
  // Renderiza as estrelas de avaliação
  const renderStars = (rating: number) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={10} 
          className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
  
  return (
    <AnimatePresence>
      {showBadge && !badgeClosed && (
        <motion.div
          initial={{ opacity: 0, x: -100, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed left-5 top-24 z-40 max-w-xs"
        >
          <div className="bg-white rounded-lg shadow-xl p-3 border border-juvelina-mint">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 mb-2">
                <img 
                  src={creators[activeCreator].avatar} 
                  alt={creators[activeCreator].name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-juvelina-gold"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-sm">{creators[activeCreator].name}</span>
                    {creators[activeCreator].verified && (
                      <CheckCircle size={12} className="text-blue-500 fill-blue-500" />
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    {creators[activeCreator].platform === 'instagram' ? (
                      <Instagram size={10} />
                    ) : (
                      <TikTokIcon size={10} />
                    )}
                    <span>{creators[activeCreator].handle}</span>
                    <span className="text-juvelina-gold">• {creators[activeCreator].followers}</span>
                  </div>
                </div>
              </div>
              
              <button 
                className="text-gray-400 hover:text-gray-600"
                onClick={() => {
                  setShowBadge(false);
                  setBadgeClosed(true); // Marca como fechado permanentemente até recarregar
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="text-sm text-gray-700 mb-2">
              "{creators[activeCreator].quote}"
            </div>
            
            <div className="flex justify-between items-center">
              {renderStars(creators[activeCreator].rating)}
              
              <a 
                href="#oferta" 
                className="text-xs text-juvelina-gold font-medium hover:underline"
                onClick={() => setShowBadge(false)}
              >
                Ver produto
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CreatorBadge;