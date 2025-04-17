import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  ShoppingCart, 
  Menu, 
  X, 
  Star, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  ChevronDown,
  ChevronUp,
  Droplets,
  BadgeCheck,
  Heart
} from 'lucide-react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Monitorar o scroll para efeitos visuais
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqItems = [
    {
      question: "Quais são os principais benefícios do Juvelina?",
      answer: "Juvelina foi formulado para apoiar a saúde geral, aumentar a energia, melhorar a imunidade e promover o bem-estar. Seus ingredientes naturais também ajudam na recuperação física e saúde da pele."
    },
    {
      question: "Como devo tomar o Juvelina?",
      answer: "Recomendamos tomar 2 cápsulas pela manhã com água ou sua bebida preferida. Para resultados ideais, use continuamente por pelo menos 30 dias."
    },
    {
      question: "O Juvelina tem efeitos colaterais?",
      answer: "Por ser um produto 100% natural, o Juvelina raramente causa efeitos colaterais. No entanto, pessoas com condições médicas específicas ou grávidas devem consultar um médico antes de usar."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "A maioria dos usuários começa a sentir os benefícios em 1-2 semanas, com resultados ideais após 4-6 semanas de uso contínuo."
    },
    {
      question: "O Juvelina é vegano e livre de glúten?",
      answer: "Sim! Juvelina é 100% vegano, livre de glúten, não-transgênico e fabricado em instalações certificadas sem os principais alérgenos."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-['Zap']">
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
              <div className="text-juvelina-gold">
                <Leaf className="h-7 w-7" />
              </div>
              <span className="font-['Ws_Paradose'] text-2xl text-juvelina-gold">Juvelina</span>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8 items-center">
              <a href="#beneficios" className="text-gray-600 hover:text-juvelina-gold transition font-medium">Benefícios</a>
              <a href="#ingredientes" className="text-gray-600 hover:text-juvelina-gold transition font-medium">Ingredientes</a>
              <a href="#depoimentos" className="text-gray-600 hover:text-juvelina-gold transition font-medium">Depoimentos</a>
              <a href="#faq" className="text-gray-600 hover:text-juvelina-gold transition font-medium">FAQ</a>
              <button 
                onClick={() => setShowModal(true)}
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
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-fadeIn">
            <div className="container mx-auto px-4 flex flex-col gap-4">
              <a 
                href="#beneficios" 
                className="text-gray-600 hover:text-juvelina-gold transition py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefícios
              </a>
              <a 
                href="#ingredientes" 
                className="text-gray-600 hover:text-juvelina-gold transition py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ingredientes
              </a>
              <a 
                href="#depoimentos" 
                className="text-gray-600 hover:text-juvelina-gold transition py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a 
                href="#faq" 
                className="text-gray-600 hover:text-juvelina-gold transition py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <button 
                onClick={() => {
                  setShowModal(true);
                  setMobileMenuOpen(false);
                }}
                className="bg-juvelina-gold text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition flex items-center justify-center gap-2 w-full mt-2 shadow-md"
              >
                <ShoppingCart size={18} />
                <span>Comprar Agora</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-juvelina-mint to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fadeInUp">
              <h1 className="text-4xl md:text-5xl font-['Ws_Paradose'] leading-tight mb-6 text-juvelina-gold">
                Revitalize Seu Corpo com Ingredientes 100% Naturais
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                O suplemento diário premium que combina o poder de plantas adaptógenas, vitaminas essenciais e minerais para potencializar sua energia, imunidade e bem-estar geral.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-juvelina-mint bg-opacity-40 px-3 py-1 rounded-full">
                  <CheckCircle className="text-juvelina-gold" size={20} />
                  <span>100% Natural</span>
                </div>
                <div className="flex items-center gap-2 bg-juvelina-mint bg-opacity-40 px-3 py-1 rounded-full">
                  <CheckCircle className="text-juvelina-gold" size={20} />
                  <span>Vegano</span>
                </div>
                <div className="flex items-center gap-2 bg-juvelina-mint bg-opacity-40 px-3 py-1 rounded-full">
                  <CheckCircle className="text-juvelina-gold" size={20} />
                  <span>Sem Glúten</span>
                </div>
                <div className="flex items-center gap-2 bg-juvelina-mint bg-opacity-40 px-3 py-1 rounded-full">
                  <CheckCircle className="text-juvelina-gold" size={20} />
                  <span>Sem Conservantes</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowModal(true)}
                  className="bg-juvelina-gold text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all text-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Experimente Agora
                  <ArrowRight size={20} />
                </button>
                <a 
                  href="#depoimentos"
                  className="border border-juvelina-gold text-juvelina-gold px-8 py-3 rounded-full hover:bg-juvelina-mint hover:bg-opacity-20 transition text-lg font-medium flex items-center justify-center"
                >
                  Ver Depoimentos
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-juvelina-aqua rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-juvelina-mint rounded-full filter blur-3xl opacity-20 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
              <img 
                src="https://images.unsplash.com/photo-1607006333439-505849ef4f76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Suplemento Juvelina" 
                className="rounded-lg shadow-2xl max-w-full h-auto z-10 relative animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Count Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-juvelina-gold font-bold text-4xl mb-2">+5mil</div>
              <p className="text-gray-600">Clientes Satisfeitos</p>
            </div>
            <div className="p-4">
              <div className="text-juvelina-gold font-bold text-4xl mb-2">14</div>
              <p className="text-gray-600">Ingredientes Naturais</p>
            </div>
            <div className="p-4">
              <div className="text-juvelina-gold font-bold text-4xl mb-2">100%</div>
              <p className="text-gray-600">Garantia de Devolução</p>
            </div>
            <div className="p-4">
              <div className="text-juvelina-gold font-bold text-4xl mb-2">3+</div>
              <p className="text-gray-600">Anos de Pesquisa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-juvelina-mint rounded-full filter blur-3xl opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-juvelina-mint bg-opacity-30 px-4 py-1 rounded-full text-juvelina-gold font-medium mb-4">Descubra o Poder da Natureza</div>
            <h2 className="text-3xl md:text-4xl font-['Ws_Paradose'] mb-4 text-juvelina-gold">Benefícios Transformadores</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Com a fórmula exclusiva do Juvelina, você experimentará melhorias significativas em diversos aspectos da sua saúde e bem-estar.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-juvelina-mint w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-juvelina-gold" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Fortalece a Imunidade</h3>
              <p className="text-gray-600">
                Combinação de vitaminas e minerais que fortalece seu sistema imunológico, ajudando seu corpo a combater infecções.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-juvelina-mint w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-juvelina-gold" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Aumenta a Energia</h3>
              <p className="text-gray-600">
                Revitalize seu corpo com nutrientes que melhoram os níveis de energia, combatendo a fadiga e aumentando a disposição diária.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-juvelina-mint w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-juvelina-gold" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Pele Radiante</h3>
              <p className="text-gray-600">
                Antioxidantes e vitaminas que nutrem sua pele de dentro para fora, promovendo um aspecto mais jovem e saudável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Ingredients */}
      <section id="ingredientes" className="py-16 md:py-24 bg-gradient-to-b from-white to-juvelina-mint bg-opacity-30 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-juvelina-mint bg-opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-juvelina-gold rounded-full filter blur-3xl opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" 
                alt="Ingredientes Naturais" 
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 text-juvelina-gold">
                  <BadgeCheck />
                  <span className="font-bold">100% Certificado</span>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-block bg-juvelina-mint bg-opacity-30 px-4 py-1 rounded-full text-juvelina-gold font-medium mb-4">Ingredientes Premium</div>
              <h2 className="text-3xl md:text-4xl font-['Ws_Paradose'] mb-6 text-juvelina-gold">Ingredientes Premium da Natureza</h2>
              <p className="text-gray-600 text-lg mb-8">
                Cada cápsula de Juvelina contém uma combinação poderosa de ingredientes orgânicos e bioativos que trabalham em sinergia para potencializar sua saúde.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 bg-white p-4 rounded-lg shadow-md transition-all hover:shadow-lg">
                  <div className="bg-juvelina-mint w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="text-juvelina-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Ashwagandha</h3>
                    <p className="text-gray-600">Adaptógeno poderoso que reduz estresse e aumenta resistência física.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 bg-white p-4 rounded-lg shadow-md transition-all hover:shadow-lg">
                  <div className="bg-juvelina-mint w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplets className="text-juvelina-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Vitamina D3</h3>
                    <p className="text-gray-600">Essencial para saúde óssea, imunidade e função cognitiva.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 bg-white p-4 rounded-lg shadow-md transition-all hover:shadow-lg">
                  <div className="bg-juvelina-mint w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="text-juvelina-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Extrato de Açaí</h3>
                    <p className="text-gray-600">Rico em antioxidantes que combatem os radicais livres e protegem as células.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 bg-white p-4 rounded-lg shadow-md transition-all hover:shadow-lg">
                  <div className="bg-juvelina-mint w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="text-juvelina-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Zinco Quelato</h3>
                    <p className="text-gray-600">Mineral de alta absorção que fortalece o sistema imunológico.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-juvelina-mint bg-opacity-30 px-4 py-1 rounded-full text-juvelina-gold font-medium mb-4">Processo Simplificado</div>
            <h2 className="text-3xl md:text-4xl font-['Ws_Paradose'] mb-4 text-juvelina-gold">Como Juvelina Transforma Sua Saúde</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Um ciclo completo de bem-estar com Juvelina é fácil de incorporar à sua rotina diária
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Linha conectora (visível apenas em telas médias e grandes) */}
            <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-[80%] h-0.5 bg-juvelina-mint"></div>
            
            <div className="relative text-center z-10">
              <div className="bg-white w-16 h-16 rounded-full border-2 border-juvelina-gold flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-juvelina-gold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Tome Diariamente</h3>
              <p className="text-gray-600">
                Duas cápsulas pela manhã com água ou com sua bebida favorita para melhor absorção.
              </p>
            </div>
            
            <div className="relative text-center z-10">
              <div className="bg-white w-16 h-16 rounded-full border-2 border-juvelina-gold flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-juvelina-gold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Nutrientes Absorvidos</h3>
              <p className="text-gray-600">
                Os ingredientes bioativos são rapidamente absorvidos, iniciando seu trabalho de regeneração.
              </p>
            </div>
            
            <div className="relative text-center z-10">
              <div className="bg-white w-16 h-16 rounded-full border-2 border-juvelina-gold flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-juvelina-gold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Resultados Visíveis</h3>
              <p className="text-gray-600">
                Em poucas semanas, sinta mais energia, imunidade fortalecida e pele mais radiante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-16 md:py-24 bg-gradient-to-b from-white to-juvelina-mint bg-opacity-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-juvelina-mint bg-opacity-30 px-4 py-1 rounded-full text-juvelina-gold font-medium mb-4">Histórias Reais</div>
            <h2 className="text-3xl md:text-4xl font-['Ws_Paradose'] mb-4 text-juvelina-gold">O Que Nossos Clientes Dizem</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Milhares de pessoas já transformaram sua saúde e bem-estar com Juvelina. Veja o que eles estão dizendo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex text-yellow-400 mb-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-gray-700 mb-6">
                "Juvelina transformou minha saúde! Após 30 dias de uso, minha energia aumentou consideravelmente e meu sistema imunológico está mais forte do que nunca."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-juvelina-mint rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" 
                    alt="Cliente" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Mariana Silva</h4>
                  <p className="text-sm text-gray-500">São Paulo, SP</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all hover:shadow-xl hover:-translate-y-1 md:translate-y-4">
              <div className="flex text-yellow-400 mb-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-gray-700 mb-6">
                "Como atleta, sempre busco o melhor para meu corpo. Juvelina melhorou minha recuperação e desempenho. É parte essencial da minha rotina diária."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-juvelina-mint rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1534&q=80" 
                    alt="Cliente" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Rafael Costa</h4>
                  <p className="text-sm text-gray-500">Rio de Janeiro, RJ</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex text-yellow-400 mb-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-gray-700 mb-6">
                "Aos 45 anos, sentia minha energia diminuindo gradualmente. Depois de usar Juvelina por 2 meses, sinto-me revigorada e minha pele está visivelmente mais saudável!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-juvelina-mint rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Cliente" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Carolina Mendes</h4>
                  <p className="text-sm text-gray-500">Belo Horizonte, MG</p>
                </div>
              </div>
            </div>
          </div>

          {/* Marcas de confiança */}
          <div className="mt-16">
            <p className="text-center text-gray-500 mb-8">Certificado pelas principais autoridades</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
              <div className="w-24 grayscale hover:grayscale-0 transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Anvisa-logo.png" alt="Anvisa" className="w-full" />
              </div>
              <div className="w-24 grayscale hover:grayscale-0 transition-all">
                <img src="https://static.wixstatic.com/media/7bc72d_ace52be0d23747c6aaf02bf4ee10613a~mv2.png/v1/fill/w_560,h_278,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/abiad-logo-azul.png" alt="ABIAD" className="w-full" />
              </div>
              <div className="w-24 grayscale hover:grayscale-0 transition-all">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968759.png" alt="Vegan" className="w-full" />
              </div>
              <div className="w-24 grayscale hover:grayscale-0 transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/USDA_organic_seal.svg" alt="Organic" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-juvelina-mint bg-opacity-30 relative overflow-hidden">
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-juvelina-aqua rounded-full filter blur-3xl opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-['Ws_Paradose'] mb-4 text-juvelina-gold">Comece Sua Jornada de Bem-Estar Hoje</h2>
              <p className="text-gray-700 text-lg mb-4">
                Junte-se a milhares de pessoas que estão experimentando os benefícios transformadores do Juvelina. Oferecemos garantia de satisfação de 30 dias.
              </p>
              <div className="flex justify-center gap-4 md:gap-6 flex-col sm:flex-row">
                <button 
                  onClick={() => setShowModal(true)}
                  className="bg-juvelina-gold text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition text-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <ShoppingCart size={20} />
                  Comprar Agora
                </button>
                <a 
                  href="#beneficios"
                  className="border border-juvelina-gold text-juvelina-gold px-8 py-3 rounded-full hover:bg-juvelina-mint hover:bg-opacity-20 transition text-lg font-medium flex items-center justify-center"
                >
                  Saiba Mais
                </a>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <div className="bg-juvelina-mint bg-opacity-30 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="text-juvelina-gold" size={24} />
                </div>
                <h3 className="font-bold mb-1">Garantia de Devolução</h3>
                <p className="text-gray-600 text-sm">Satisfação garantida ou seu dinheiro de volta em até 30 dias.</p>
              </div>
              
              <div className="p-4">
                <div className="bg-juvelina-mint bg-opacity-30 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="text-juvelina-gold" size={24} />
                </div>
                <h3 className="font-bold mb-1">100% Natural</h3>
                <p className="text-gray-600 text-sm">Ingredientes orgânicos e naturais sem aditivos químicos.</p>
              </div>
              
              <div className="p-4">
                <div className="bg-juvelina-mint bg-opacity-30 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="text-juvelina-gold" size={24} />
                </div>
                <h3 className="font-bold mb-1">Entrega Rápida</h3>
                <p className="text-gray-600 text-sm">Enviamos em até 24h com rastreamento completo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-juvelina-mint bg-opacity-30 px-4 py-1 rounded-full text-juvelina-gold font-medium mb-4">Dúvidas Frequentes</div>
            <h2 className="text-3xl md:text-4xl font-['Ws_Paradose'] mb-4 text-juvelina-gold">Perguntas Frequentes</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre o Juvelina e como ele pode beneficiar sua saúde.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">
            {faqItems.map((item, index) => (
              <div key={index} className={`border-b border-gray-100 ${index === 0 ? '' : 'mt-4'} py-4 transition-all`}>
                <button 
                  className="flex justify-between items-center w-full text-left font-medium text-lg py-2"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className={activeAccordion === index ? 'text-juvelina-gold' : 'text-gray-800'}>{item.question}</span>
                  {activeAccordion === index ? 
                    <ChevronUp size={20} className="text-juvelina-gold" /> : 
                    <ChevronDown size={20} className="text-gray-500" />
                  }
                </button>
                {activeAccordion === index && (
                  <div className="py-3 text-gray-600 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-juvelina-mint bg-opacity-10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-7 w-7 text-juvelina-gold" />
                <span className="font-['Ws_Paradose'] text-2xl text-juvelina-gold">Juvelina</span>
              </div>
              <p className="text-gray-600 mb-4">
                Suplementos naturais de alta qualidade para uma vida mais saudável e equilibrada.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-juvelina-gold hover:text-opacity-80 transition">
                  <Instagram size={22} />
                </a>
                <a href="#" className="text-juvelina-gold hover:text-opacity-80 transition">
                  <Facebook size={22} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-gray-800">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-juvelina-gold transition">Sobre Nós</a></li>
                <li><a href="#beneficios" className="text-gray-600 hover:text-juvelina-gold transition">Benefícios</a></li>
                <li><a href="#ingredientes" className="text-gray-600 hover:text-juvelina-gold transition">Ingredientes</a></li>
                <li><a href="#depoimentos" className="text-gray-600 hover:text-juvelina-gold transition">Depoimentos</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-gray-800">Ajuda & Suporte</h3>
              <ul className="space-y-2">
                <li><a href="#faq" className="text-gray-600 hover:text-juvelina-gold transition">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-juvelina-gold transition">Política de Envio</a></li>
                <li><a href="#" className="text-gray-600 hover:text-juvelina-gold transition">Política de Reembolso</a></li>
                <li><a href="#" className="text-gray-600 hover:text-juvelina-gold transition">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-gray-800">Contato</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-juvelina-gold">@</span>
                  contato@juvelina.com.br
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-juvelina-gold">📞</span>
                  +55 (11) 3456-7890
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-juvelina-gold">📍</span>
                  São Paulo, SP - Brasil
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Juvelina Organics. Todos os direitos reservados.</p>
            <p className="mt-2 text-xs">
              Este site não tem como objetivo diagnosticar, tratar, curar ou prevenir qualquer doença. Consulte seu médico antes de usar.
            </p>
          </div>
        </div>
      </footer>

      {/* Purchase Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-juvelina-gold">Comprar Juvelina</h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="mb-6">
                <div className="relative rounded-lg overflow-hidden mb-4 bg-juvelina-mint bg-opacity-20">
                  <img 
                    src="https://images.unsplash.com/photo-1607006333439-505849ef4f76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="Juvelina Product" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="absolute top-3 right-3 bg-juvelina-gold text-white text-sm py-1 px-3 rounded-full">
                    25% OFF
                  </div>
                </div>
                <h4 className="font-bold text-lg">Juvelina - Suplemento Natural</h4>
                <p className="text-gray-600">Frasco com 60 cápsulas (30 dias de tratamento)</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="font-bold text-2xl text-juvelina-gold">R$ 149,90</div>
                  <div className="text-sm text-gray-500 line-through">R$ 199,90</div>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-600">
                  <Star size={14} fill="currentColor" className="text-yellow-400" />
                  <Star size={14} fill="currentColor" className="text-yellow-400" />
                  <Star size={14} fill="currentColor" className="text-yellow-400" />
                  <Star size={14} fill="currentColor" className="text-yellow-400" />
                  <Star size={14} fill="currentColor" className="text-yellow-400" />
                  <span className="ml-1">4.9 (512 avaliações)</span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mb-6">
                <h4 className="font-bold mb-4">Escolha sua opção:</h4>
                
                <div className="space-y-3">
                  <div className="border-2 border-juvelina-gold rounded-xl p-4 bg-juvelina-mint bg-opacity-10">
                    <div className="flex gap-3">
                      <input 
                        type="radio" 
                        id="option1" 
                        name="purchase_option" 
                        className="mt-1 accent-juvelina-gold w-5 h-5" 
                        defaultChecked 
                      />
                      <div className="flex-1">
                        <label htmlFor="option1" className="font-bold flex justify-between items-center">
                          <span>Compra única</span>
                          <span className="text-juvelina-gold">R$ 149,90</span>
                        </label>
                        <p className="text-sm text-gray-600">Frasco único com 60 cápsulas</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-xl p-4 hover:border-juvelina-gold transition-all">
                    <div className="flex gap-3">
                      <input 
                        type="radio" 
                        id="option2" 
                        name="purchase_option"
                        className="mt-1 accent-juvelina-gold w-5 h-5"
                      />
                      <div className="flex-1">
                        <label htmlFor="option2" className="font-bold flex justify-between items-center">
                          <div className="flex items-center">
                            <span>Assinatura mensal</span>
                            <span className="ml-2 bg-juvelina-mint text-juvelina-gold text-xs px-2 py-0.5 rounded-full">POPULAR</span>
                          </div>
                          <span className="text-juvelina-gold">R$ 129,90</span>
                        </label>
                        <p className="text-sm text-gray-600">Economize 13% com entrega mensal automática</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-xl p-4 hover:border-juvelina-gold transition-all">
                    <div className="flex gap-3">
                      <input 
                        type="radio" 
                        id="option3" 
                        name="purchase_option" 
                        className="mt-1 accent-juvelina-gold w-5 h-5"
                      />
                      <div className="flex-1">
                        <label htmlFor="option3" className="font-bold flex justify-between items-center">
                          <div className="flex items-center">
                            <span>Kit 3 meses</span>
                            <span className="ml-2 bg-juvelina-gold text-white text-xs px-2 py-0.5 rounded-full">MELHOR VALOR</span>
                          </div>
                          <span className="text-juvelina-gold">R$ 379,90</span>
                        </label>
                        <p className="text-sm text-gray-600">Economize 16% na compra de 3 frascos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <button className="w-full bg-juvelina-gold text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition font-medium flex items-center justify-center gap-2 shadow-lg transform hover:-translate-y-1">
                  <ShoppingCart size={18} />
                  Adicionar ao Carrinho
                </button>
                
                <div className="flex items-center justify-center gap-6 text-sm text-gray-600 py-2">
                  <div className="flex items-center gap-1">
                    <Shield size={16} className="text-juvelina-gold" />
                    <span>Pagamento Seguro</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={16} className="text-juvelina-gold" />
                    <span>Garantia de 30 dias</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-center text-sm text-gray-500">
                    Formas de pagamento aceitas
                  </p>
                  <div className="flex justify-center items-center gap-2 mt-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" className="h-6 w-auto" alt="Visa" />
                    <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" className="h-6 w-auto" alt="Mastercard" />
                    <img src="https://cdn-icons-png.flaticon.com/512/217/217425.png" className="h-6 w-auto" alt="Boleto" />
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888870.png" className="h-6 w-auto" alt="Pix" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
