// src/components/modals/PurchaseModal.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, CheckCircle, Clock, Shield } from 'lucide-react';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type PurchaseOption = 'single' | 'monthly' | 'kit';

// Adicionar a interface para o tipo das opções
interface OptionType {
  title: string;
  price: number;
  originalPrice: number;
  description: string;
  benefits: string[];
  popular?: boolean; // Adicionar popular como propriedade opcional
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({ isOpen, onClose }) => {
  const [selectedOption, setSelectedOption] = useState<PurchaseOption>('monthly');
  const [isLeavingModal, setIsLeavingModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    minutes: 15,
    seconds: 0
  });
  const [showExitIntent, setShowExitIntent] = useState(false);
  
  // Gatilho de urgência - contador regressivo
  useEffect(() => {
    if (!isOpen) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          clearInterval(timer);
          return { minutes: 0, seconds: 0 };
        }
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isOpen]);
  
  // Detectar intent de saída
  useEffect(() => {
    if (!isOpen) return;
    
    let timeout: ReturnType<typeof setTimeout>;
    
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 50 && !isLeavingModal && !showExitIntent) {
        setIsLeavingModal(true);
        timeout = setTimeout(() => {
          setShowExitIntent(true);
        }, 300);
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeout);
    };
  }, [isOpen, isLeavingModal, showExitIntent]);
  
  // Definir as opções com o tipo correto
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
      popular: true // Agora esta propriedade está definida no tipo
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
  
  // Restante do código permanece o mesmo...
  
  // Formatar preço
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  };
  
  // Calcular desconto
  const calculateDiscount = (originalPrice: number, price: number) => {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsLeavingModal(true);
              onClose();
            }
          }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
          >
            {/* Header com urgência */}
            <div className="bg-gradient-to-r from-juvelina-emerald to-juvelina-gold text-white p-4 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Oferta Especial de Lançamento</h3>
                <button
                  onClick={onClose}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <Clock size={18} />
                <div className="text-sm">
                  Oferta expira em: <span className="font-bold">{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              {/* Breve descrição do produto */}
              <div className="mb-6">
                <h4 className="font-bold text-lg text-juvelina-emerald mb-2">Transforme seu bem-estar com Juvelina</h4>
                <p className="text-gray-600">
                  Nosso suplemento líquido premium com 25 nutrientes essenciais e absorção 5x superior garante resultados visíveis desde as primeiras semanas.
                </p>
              </div>
              
              {/* Opções de compra */}
              <div className="border-t border-gray-200 pt-6 mb-6">
                <h4 className="font-bold mb-4">Escolha sua opção:</h4>
                
                <div className="space-y-3">
                  {(Object.entries(options) as [PurchaseOption, typeof options.single][]).map(([key, option]) => (
                    <div
                      key={key}
                      className={`border rounded-xl p-4 hover:border-juvelina-emerald transition-all cursor-pointer relative ${
                        selectedOption === key
                          ? 'border-2 border-juvelina-emerald bg-juvelina-mint bg-opacity-10'
                          : 'border-gray-200'
                      } ${option.popular && selectedOption !== key ? 'border-juvelina-gold/50' : ''}`}
                      onClick={() => setSelectedOption(key)}
                    >
                      {option.popular && (
                        <motion.div
                          className="absolute -top-3 right-4 bg-juvelina-gold text-white text-xs px-3 py-1 rounded-full uppercase font-bold tracking-wide"
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
                      
                      <div className="flex gap-3">
                        <input
                          type="radio"
                          id={`option-${key}`}
                          name="purchase_option"
                          checked={selectedOption === key}
                          onChange={() => setSelectedOption(key)}
                          className="mt-1 accent-juvelina-emerald w-5 h-5"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <label htmlFor={`option-${key}`} className="font-bold flex items-center">
                              <span>{option.title}</span>
                              {option.popular && (
                                <span className="ml-2 bg-juvelina-emerald/10 text-juvelina-emerald text-xs px-2 py-0.5 rounded-full">
                                  {calculateDiscount(option.originalPrice, option.price)}% OFF
                                </span>
                              )}
                            </label>
                            <div>
                              <span className="text-juvelina-emerald font-bold">
                                R$ {formatPrice(option.price)}
                                {key === 'monthly' && <span className="text-sm font-normal">/mês</span>}
                              </span>
                              <div className="text-gray-500 line-through text-sm">
                                R$ {formatPrice(option.originalPrice)}
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                          
                          {/* Mostrar benefícios apenas para a opção selecionada */}
                          {selectedOption === key && (
                            <motion.div 
                              className="mt-3 space-y-2 bg-gray-50 p-3 rounded-lg"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              {option.benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-2">
                                  <CheckCircle size={16} className="text-juvelina-emerald mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{benefit}</span>
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
              
              {/* Botão de ação principal */}
              <motion.button
                className="w-full bg-juvelina-gold text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition font-medium flex items-center justify-center gap-2 shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ShoppingCart size={20} />
                Garantir Meu Juvelina Agora
              </motion.button>
              
              {/* Elementos de confiança */}
              <div className="mt-4 flex items-center justify-center gap-6 text-sm text-gray-600 py-2">
                <div className="flex items-center gap-1">
                  <Shield size={16} className="text-juvelina-emerald" />
                  <span>Pagamento Seguro</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle size={16} className="text-juvelina-emerald" />
                  <span>Garantia de 30 dias</span>
                </div>
              </div>
              
              {/* Métodos de pagamento */}
              <div className="pt-4 border-t border-gray-100 mt-4">
                <p className="text-center text-sm text-gray-500 mb-2">
                  Formas de pagamento aceitas
                </p>
                <div className="flex justify-center items-center gap-3 mt-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" className="h-6 w-auto" alt="Visa" />
                  <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" className="h-6 w-auto" alt="Mastercard" />
                  <img src="https://cdn-icons-png.flaticon.com/512/217/217425.png" className="h-6 w-auto" alt="Boleto" />
                  <img src="https://cdn-icons-png.flaticon.com/512/888/888870.png" className="h-6 w-auto" alt="Pix" />
                </div>
              </div>
              
              {/* Depoimentos sociais */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex -space-x-2">
                    {['https://i.pravatar.cc/100?img=1', 'https://i.pravatar.cc/100?img=2', 'https://i.pravatar.cc/100?img=3'].map((avatar, i) => (
                      <img 
                        key={i} 
                        src={avatar} 
                        alt="Avatar de cliente" 
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ))}
                    <div className="w-8 h-8 rounded-full bg-juvelina-emerald text-white flex items-center justify-center text-xs font-bold border-2 border-white">
                      +5k
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium text-gray-800">+5.000 clientes</span> escolheram Juvelina no último mês
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Modal de Intent de Saída */}
          <AnimatePresence>
            {showExitIntent && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 z-60 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    setShowExitIntent(false);
                  }
                }}
              >
                <motion.div
                  className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                >
                  <div className="bg-juvelina-gold text-white p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold">Espere! Oferta Especial</h3>
                      <button
                        onClick={() => setShowExitIntent(false)}
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
                        className="bg-juvelina-emerald/10 rounded-lg p-4 flex items-center gap-4"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="text-3xl font-bold text-juvelina-emerald">+1</div>
                        <div>
                          <div className="font-bold">Frasco Adicional</div>
                          <div className="text-sm text-gray-600">Valor: R$ 149,90</div>
                          <div className="text-juvelina-emerald font-bold">GRÁTIS</div>
                        </div>
                      </motion.div>
                    </div>
                    
                    <button
                      className="w-full bg-juvelina-gold text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition font-medium mt-4"
                      onClick={() => {
                        setShowExitIntent(false);
                        setSelectedOption('monthly');
                      }}
                    >
                      Sim! Quero Aproveitar Esta Oferta
                    </button>
                    
                    <button
                      className="w-full text-gray-500 px-6 py-2 rounded-full hover:bg-gray-100 transition text-sm mt-2"
                      onClick={() => setShowExitIntent(false)}
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