// src/components/modals/PurchaseModal.tsx - VERSÃO CORRIGIDA
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, CheckCircle, Clock, Shield, Star } from 'lucide-react';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  variant?: 'default' | 'exit-intent' | 'time-based';
  personalizedTitle?: string;
}

type PurchaseOption = 'single' | 'monthly' | 'kit';

interface OptionType {
  title: string;
  price: number;
  originalPrice: number;
  description: string;
  benefits: string[];
  popular?: boolean;
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({ 
  isOpen, 
  onClose, 
  variant = 'default',
  personalizedTitle
}) => {
  const [selectedOption, setSelectedOption] = useState<PurchaseOption>('monthly');
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Local storage key para controlar se o modal já foi fechado pelo usuário
  const MODAL_CLOSED_KEY = 'juvelina_modal_closed';
  
  // Verificar se é mobile e ajustar conforme necessário
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  // Verificar se o modal já foi fechado pelo usuário anteriormente
  useEffect(() => {
    if (isOpen) {
      const wasModalClosed = localStorage.getItem(MODAL_CLOSED_KEY) === 'true';
      
      // Se o usuário já fechou o modal anteriormente, fechamos automaticamente
      if (wasModalClosed) {
        console.log("Modal já foi fechado pelo usuário. Fechando automaticamente.");
        onClose();
      }
      
      // Resetar estado de exit intent quando modal é aberto
      if (variant === 'exit-intent') {
        setShowExitIntent(true);
      } else {
        setShowExitIntent(false);
      }
    }
  }, [isOpen, variant, onClose]);

  // Opções de compra
  const options: Record<PurchaseOption, OptionType> = {
    single: {
      title: 'Experimente',
      price: 149.90,
      originalPrice: 179.90,
      description: 'Perfeito para iniciar sua jornada',
      benefits: [
        '1 frasco (30 dias de uso)',
        'Frete Grátis em Todo Brasil',
        'Garantia de 30 dias'
      ]
    },
    monthly: {
      title: 'Assinatura Mensal',
      price: 129.90,
      originalPrice: 179.90,
      description: 'A escolha inteligente para resultados contínuos',
      benefits: [
        'Receba 1 frasco todo mês sem preocupações',
        'Economize R$600/ano',
        'Frete Grátis Prioritário',
        'Cancele quando quiser',
        'Acesso a conteúdos exclusivos'
      ],
      popular: true
    },
    kit: {
      title: 'Kit 3 Meses',
      price: 379.90,
      originalPrice: 539.70,
      description: 'Economize mais com nosso pacote trimestral',
      benefits: [
        '3 frascos (90 dias de uso)',
        'Economize R$159,80',
        'Frete Grátis Express',
        'Garantia Estendida de 90 dias'
      ]
    }
  };
  
  // Formatar preço
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  };
  
  // Calcular desconto
  const calculateDiscount = (originalPrice: number, price: number) => {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };
  
  // Variants para animação
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        damping: 25, 
        stiffness: 500 
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      y: 20,
      transition: { duration: 0.2 }
    }
  };
  
  // Título personalizado com base no variant
  const getTitle = () => {
    if (personalizedTitle) {
      return personalizedTitle;
    }
    
    if (variant === 'exit-intent') {
      return "Espere! Oferta Especial para Você";
    } else if (variant === 'time-based') {
      return "Oferta por Tempo Limitado!";
    }
    
    return "Oferta Especial de Lançamento";
  };
  
  // Conteúdo adicional com base no variant
  const getExtraContent = () => {
    if (variant === 'exit-intent') {
      return (
        <div className="bg-juvelina-mint/20 p-4 rounded-lg my-4">
          <p className="text-center text-green-800 font-medium">
            <span className="font-bold">BÔNUS EXCLUSIVO:</span> Adquira agora e ganhe um frasco adicional GRÁTIS!
          </p>
        </div>
      );
    } else if (variant === 'time-based') {
      return (
        <div className="bg-red-50 p-4 rounded-lg my-4 border border-red-100">
          <p className="text-center text-red-600">
            <Clock size={16} className="inline mr-1" /> Oferta válida por <span className="font-bold">tempo limitado</span>
          </p>
        </div>
      );
    }
    
    return null;
  };
  
  // Handler para fechar o modal, com persistência
  const handleClose = () => {
    // Marcar que o usuário fechou o modal conscientemente
    localStorage.setItem(MODAL_CLOSED_KEY, 'true');
    console.log("Modal fechado pelo usuário. Marcado como fechado.");
    onClose();
  };

  // Handler para fechar o exit intent
  const handleCloseExitIntent = () => {
    setShowExitIntent(false);
  };

  // Handler para aceitar a oferta de exit intent
  const handleAcceptExitOffer = () => {
    setShowExitIntent(false);
    setSelectedOption('monthly');
  };

  // Click fora para fechar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        // Se clicar fora do modal principal e não estiver no exit intent, fecha e persiste
        if (!showExitIntent) {
          handleClose();
        }
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, showExitIntent]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            backdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Conteúdo do modal - Layout responsivo aprimorado */}
          {isMobile ? (
            // Layout Mobile completamente redesenhado
            <motion.div
              ref={modalRef}
              className="bg-white rounded-t-2xl shadow-2xl w-full max-h-[90vh] overflow-y-auto relative mx-auto mt-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Header com urgência */}
              <div className="bg-gradient-to-r from-juvelina-gold to-juvelina-gold/80 text-white p-4 rounded-t-2xl sticky top-0 z-20">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">{getTitle()}</h3>
                  <button
                    onClick={handleClose}
                    className="text-white hover:text-gray-200 transition-colors p-2"
                    aria-label="Fechar"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                {/* Conteúdo extra específico do variant */}
                {getExtraContent()}
                
                {/* Breve descrição do produto - Simplificada para mobile */}
                <div className="mb-6">
                  <h4 className="font-bold text-lg text-juvelina-gold mb-2">Transforme seu bem-estar com Juvelina</h4>
                  <p className="text-gray-600 text-sm">
                    Suplemento líquido premium com 25 nutrientes essenciais e absorção 5x superior.
                  </p>
                </div>
                
                {/* Opções de compra otimizadas para mobile */}
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <h4 className="font-bold mb-4 text-center">Escolha sua opção:</h4>
                  
                  <div className="space-y-3">
                    {(Object.entries(options) as [PurchaseOption, typeof options.single][]).map(([key, option]) => (
                      <div
                        key={key}
                        className={`border rounded-xl p-3 hover:border-juvelina-gold transition-all cursor-pointer relative ${
                          selectedOption === key
                            ? 'border-2 border-juvelina-gold bg-juvelina-mint bg-opacity-10'
                            : 'border-gray-200'
                        } ${option.popular && selectedOption !== key ? 'border-juvelina-gold/50' : ''}`}
                        onClick={() => setSelectedOption(key)}
                      >
                        {option.popular && (
                          <motion.div
                            className="absolute -top-2.5 right-4 bg-juvelina-gold text-white text-xs px-2 py-0.5 rounded-full uppercase font-bold tracking-wide"
                            animate={{ 
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              repeat: Infinity,
                              repeatType: "mirror",
                              duration: 2
                            }}
                          >
                            Popular
                          </motion.div>
                        )}
                        
                        <div className="flex gap-3">
                          <input
                            type="radio"
                            id={`option-${key}`}
                            name="purchase_option"
                            checked={selectedOption === key}
                            onChange={() => setSelectedOption(key)}
                            className="mt-1 accent-juvelina-gold w-5 h-5"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <label htmlFor={`option-${key}`} className="font-bold text-sm flex items-center">
                                {option.title}
                              </label>
                              <div>
                                <span className="text-juvelina-gold font-bold text-sm">
                                  R$ {formatPrice(option.price)}
                                  {key === 'monthly' && <span className="text-xs font-normal">/mês</span>}
                                </span>
                                <div className="text-gray-500 line-through text-xs">
                                  R$ {formatPrice(option.originalPrice)}
                                </div>
                              </div>
                            </div>
                            
                            {/* Badges de economia/desconto */}
                            <div className="mt-1">
                              <span className="bg-juvelina-gold/10 text-juvelina-gold text-xs px-2 py-0.5 rounded-full">
                                {calculateDiscount(option.originalPrice, option.price)}% OFF
                              </span>
                            </div>
                            
                            {/* Mostrar apenas o primeiro benefício no modo colapsado */}
                            <p className="text-xs text-gray-600 mt-2">
                              {option.benefits[0]} {option.benefits.length > 1 ? '...' : ''}
                            </p>
                            
                            {/* Botão para expandir/colapsar benefícios */}
                            {selectedOption === key && option.benefits.length > 1 && (
                              <motion.div 
                                className="mt-3 space-y-2 bg-gray-50 p-3 rounded-lg"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                transition={{ duration: 0.3 }}
                              >
                                {option.benefits.map((benefit, index) => (
                                  <div key={index} className="flex items-start gap-2">
                                    <CheckCircle size={14} className="text-juvelina-gold mt-0.5 flex-shrink-0" />
                                    <span className="text-xs">{benefit}</span>
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Botão de ação principal */}
              <div className="p-4 pt-2 sticky bottom-0 bg-white z-20 border-t border-gray-100">
                <motion.button
                  className="w-full bg-juvelina-gold text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition font-medium flex items-center justify-center gap-2 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingCart size={20} />
                  Garantir Meu Juvelina Agora
                </motion.button>
                
                {/* Link para fechar como alternativa */}
                <button 
                  onClick={handleClose}
                  className="w-full text-gray-500 text-sm py-2 mt-2 hover:text-gray-700"
                >
                  Agora não, obrigado
                </button>
              </div>
              
              {/* Elementos de confiança reduzidos */}
              <div className="px-4 pb-6 pt-2 flex items-center justify-center gap-6 text-xs text-gray-600 flex-wrap">
                <div className="flex items-center gap-1">
                  <Shield size={12} className="text-juvelina-gold" />
                  <span>Pagamento Seguro</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle size={12} className="text-juvelina-gold" />
                  <span>Garantia de 30 dias</span>
                </div>
              </div>
            </motion.div>
          ) : (
            // Layout Desktop - mantido com pequenos ajustes
            <motion.div
              ref={modalRef}
              className="relative max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="bg-gradient-to-r from-juvelina-gold to-juvelina-gold/80 text-white p-4 rounded-t-2xl">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">{getTitle()}</h3>
                  <button
                    onClick={handleClose}
                    className="text-white hover:text-gray-200 transition-colors p-2"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                {/* Conteúdo extra específico do variant */}
                {getExtraContent()}
                
                <div className="text-center mb-6">
                  <h4 className="font-bold text-xl text-juvelina-gold mb-2">Escolha seu plano Juvelina</h4>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Nosso suplemento líquido premium com 25 nutrientes essenciais e absorção 5x superior para transformar seu bem-estar.
                  </p>
                </div>
                
                {/* Cards horizontais */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {(Object.entries(options) as [PurchaseOption, typeof options.single][]).map(([key, option]) => (
                    <div
                      key={key}
                      className={`border rounded-xl p-5 hover:border-juvelina-gold transition-all cursor-pointer relative ${
                        selectedOption === key
                          ? 'border-2 border-juvelina-gold bg-juvelina-mint bg-opacity-10 transform scale-105 shadow-lg'
                          : 'border-gray-200'
                      } ${option.popular ? 'ring-1 ring-juvelina-gold ring-offset-2' : ''}`}
                      onClick={() => setSelectedOption(key)}
                    >
                      {option.popular && (
                        <motion.div
                          className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-juvelina-gold text-white text-xs px-4 py-1 rounded-full uppercase font-bold tracking-wide"
                          animate={{ 
                            scale: [1, 1.05, 1],
                            boxShadow: [
                              '0 0 0 rgba(212, 178, 106, 0.4)',
                              '0 0 8px rgba(212, 178, 106, 0.8)',
                              '0 0 0 rgba(212, 178, 106, 0.4)'
                            ]
                          }}
                          transition={{
                            repeat: Infinity,
                            repeatType: "mirror",
                            duration: 2
                          }}
                        >
                          Mais Popular
                        </motion.div>
                      )}
                      
                      <div className="text-center">
                        <h5 className="font-bold text-lg mb-1">{option.title}</h5>
                        <p className="text-sm text-gray-600 h-10">{option.description}</p>
                        
                        <div className="mt-4 mb-6">
                          <div className="text-3xl font-bold text-juvelina-gold">
                            R$ {formatPrice(option.price)}
                            {key === 'monthly' && <span className="text-sm font-normal">/mês</span>}
                          </div>
                          <div className="flex justify-center items-center gap-2">
                            <span className="text-gray-500 line-through text-sm">
                              R$ {formatPrice(option.originalPrice)}
                            </span>
                            <span className="bg-juvelina-gold/10 text-juvelina-gold text-xs px-2 py-0.5 rounded-full">
                              {calculateDiscount(option.originalPrice, option.price)}% OFF
                            </span>
                          </div>
                        </div>
                        
                        <div className="space-y-3 text-left mb-6">
                          {option.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <CheckCircle size={16} className="text-juvelina-gold mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                        
                        <label htmlFor={`desktop-option-${key}`} className="flex items-center justify-center gap-2 cursor-pointer">
                          <input
                            id={`desktop-option-${key}`}
                            type="radio"
                            name="desktop_purchase_option"
                            checked={selectedOption === key}
                            onChange={() => setSelectedOption(key)}
                            className="accent-juvelina-gold w-5 h-5"
                          />
                          <span className="font-medium">Selecionar</span>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center mt-8">
                  <motion.button
                    className="bg-juvelina-gold text-white px-10 py-3 rounded-full hover:bg-opacity-90 transition font-medium flex items-center justify-center gap-2 shadow-lg max-w-md w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShoppingCart size={20} />
                    Garantir Meu Juvelina Agora
                  </motion.button>
                </div>
                
                {/* Link para fechar alternativo */}
                <div className="text-center mt-3">
                  <button 
                    onClick={handleClose}
                    className="text-gray-500 text-sm hover:text-gray-700"
                  >
                    Agora não, obrigado
                  </button>
                </div>
                
                {/* Elementos de confiança no rodapé */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap justify-around items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Shield size={18} className="text-juvelina-gold" />
                    <span>Pagamento 100% Seguro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={18} className="text-juvelina-gold" />
                    <span>Satisfação Garantida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-juvelina-gold" />
                    <span>Resultados Comprovados</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" className="h-6 w-auto" alt="Visa" />
                    <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" className="h-6 w-auto" alt="Mastercard" />
                    <img src="https://cdn-icons-png.flaticon.com/512/217/217425.png" className="h-6 w-auto" alt="Boleto" />
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888870.png" className="h-6 w-auto" alt="Pix" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Modal de Intent de Saída */}
          <AnimatePresence>
            {showExitIntent && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-70 z-60 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={(e) => {
                  // Permitir fechar o exit intent ao clicar fora
                  if (e.target === e.currentTarget) {
                    handleCloseExitIntent();
                  }
                }}
              >
                <motion.div
                  className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                >
                  <div className="bg-juvelina-gold text-white p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold">Espere! Oferta Especial</h3>
                      <button
                        onClick={handleCloseExitIntent}
                        className="text-white hover:text-gray-200"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      Não perca nossa oferta exclusiva de lançamento! Ganhe um frasco adicional <strong>GRÁTIS</strong> ao assinar hoje.
                    </p>
                    
                    <div className="flex justify-center my-4">
                      <motion.div
                        className="bg-juvelina-mint/30 rounded-lg p-4 flex items-center gap-4"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="text-3xl font-bold text-juvelina-gold">+1</div>
                        <div>
                          <div className="font-bold">Frasco Adicional</div>
                          <div className="text-sm text-gray-600">Valor: R$ 149,90</div>
                          <div className="text-juvelina-gold font-bold">GRÁTIS</div>
                        </div>
                      </motion.div>
                    </div>
                    
                    <button
                      className="w-full bg-juvelina-gold text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition font-medium mt-4"
                      onClick={handleAcceptExitOffer}
                    >
                      Sim! Quero Aproveitar Esta Oferta
                    </button>
                    
                    <button
                      className="w-full text-gray-500 px-6 py-2 rounded-full hover:bg-gray-100 transition text-sm mt-2"
                      onClick={handleCloseExitIntent}
                    >
                      Não, prefiro pagar preço integral depois
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PurchaseModal;