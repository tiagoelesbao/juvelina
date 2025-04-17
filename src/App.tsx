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
  Heart,
  Zap,
  Lock,
  ShieldCheck,
  TrendingUp,
  Brain
} from 'lucide-react';
import IngredientsList from './components/IngredientsList';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showIngredients, setShowIngredients] = useState(false);

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
      question: "Quais são os principais benefícios da Juvelina?",
      answer: "Juvelina foi formulada para oferecer múltiplos benefícios: fortalecimento do sistema imunológico com Glutamina, melhoria na saúde de cabelos e unhas com Biotina, suporte à saúde da pele com Colágeno, aumento da energia com BCAAs (L-leucina, L-isoleucina, L-valina), e suporte nutricional completo com seu complexo de vitaminas e minerais essenciais."
    },
    {
      question: "Como devo tomar a Juvelina?",
      answer: "Recomendamos tomar 2 cápsulas pela manhã com água ou sua bebida preferida. Para resultados ideais, use continuamente por pelo menos 30 dias. A fórmula líquida de alta absorção permite que os nutrientes sejam aproveitados pelo organismo de forma mais eficiente."
    },
    {
      question: "A Juvelina tem efeitos colaterais?",
      answer: "Por ser um produto com ingredientes naturais e dosagens cuidadosamente formuladas, a Juvelina raramente causa efeitos colaterais. No entanto, pessoas com condições médicas específicas, grávidas ou lactantes devem consultar um médico antes de usar."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "A maioria dos usuários começa a sentir aumento de energia em 1-2 semanas. Melhorias na pele podem ser percebidas após 3-4 semanas, enquanto resultados em cabelos e unhas geralmente são notados após 4-6 semanas de uso contínuo, devido ao ciclo natural de crescimento dessas estruturas."
    },
    {
      question: "A Juvelina é vegana e livre de glúten?",
      answer: "Juvelina é livre de glúten, não-transgênica e fabricada em instalações certificadas sem os principais alérgenos. Nosso colágeno é de origem animal (peixe), portanto o produto não é vegano, mas todos os outros ingredientes são de origem vegetal ou mineral."
    },
    {
      question: "Como funciona a garantia de devolução?",
      answer: "Oferecemos garantia de satisfação de 30 dias. Se não estiver completamente satisfeito, basta entrar em contato com nosso atendimento ao cliente e devolver o produto (mesmo que parcialmente usado). Realizaremos o reembolso integral sem perguntas em até 7 dias úteis após o recebimento."
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
              <a href="#sobre" className="text-gray-600 hover:text-juvelina-gold transition font-medium">Sobre</a>
              <a href="#beneficios" className="text-gray-600 hover:text-juvelina-gold transition font-medium">Benefícios</a>
              <a href="#ingredientes" className="text-gray-600 hover:text-juvelina-gold transition font-medium">Ingredientes</a>
              <a href="#como-funciona" className="text-gray-600 hover:text-juvelina-gold transition font-medium">Como Funciona</a>
              <a href="#depoimentos" className="text-gray-600 hover:text-juvelina-gold transition font-medium">Depoimentos</a>
              <a href="#planos" className="text-gray-600 hover:text-juvelina-gold transition font-medium">Planos</a>
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
                href="#sobre" 
                className="text-gray-600 hover:text-juvelina-gold transition py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </a>
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
                href="#como-funciona" 
                className="text-gray-600 hover:text-juvelina-gold transition py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Como Funciona
              </a>
              <a 
                href="#depoimentos" 
                className="text-gray-600 hover:text-juvelina-gold transition py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a 
                href="#planos" 
                className="text-gray-600 hover:text-juvelina-gold transition py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Planos
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
                Nutra Seu Bem-Estar com o Poder da Natureza
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Descubra o suplemento líquido que está transformando vidas com alta absorção, ingredientes premium e resultados reais para sua energia, imunidade e beleza.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-juvelina-mint bg-opacity-40 px-3 py-1 rounded-full">
                  <CheckCircle className="text-juvelina-gold" size={20} />
                  <span>Alta Absorção</span>
                </div>
                <div className="flex items-center gap-2 bg-juvelina-mint bg-opacity-40 px-3 py-1 rounded-full">
                  <CheckCircle className="text-juvelina-gold" size={20} />
                  <span>25 Nutrientes</span>
                </div>
                <div className="flex items-center gap-2 bg-juvelina-mint bg-opacity-40 px-3 py-1 rounded-full">
                  <CheckCircle className="text-juvelina-gold" size={20} />
                  <span>Resultados Reais</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowModal(true)}
                  className="bg-juvelina-gold text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all text-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Transforme Sua Saúde Hoje
                  <ArrowRight size={20} />
                </button>
                <a 
                  href="#como-funciona"
                  className="border border-juvelina-gold text-juvelina-gold px-8 py-3 rounded-full hover:bg-juvelina-mint hover:bg-opacity-20 transition text-lg font-medium flex items-center justify-center"
                >
                  Descubra Como Funciona
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-juvelina-aqua rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-juvelina-mint rounded-full filter blur-3xl opacity-20 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
              <img 
                src="https://images.unsplash.com/photo-1607006333439-505849ef4f76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Suplemento Líquido Juvelina" 
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
              <div className="text-juvelina-gold font-bold text-4xl mb-2">25</div>
              <p className="text-gray-600">Nutrientes Essenciais</p>
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

      {/* About Section */}
      <section id="sobre" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-juvelina-mint bg-opacity-30 px-4 py-1 rounded-full text-juvelina-gold font-medium mb-4">Nossa História</div>
            <h2 className="text-3xl md:text-4xl font-['Ws_Paradose'] mb-4 text-juvelina-gold">Inovação Natural para Seu Bem-Estar</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg mb-6">
              Desde o início, a Juvelina nasceu da necessidade de tornar a suplementação mais intuitiva e prazerosa. Observamos um mercado saturado de produtos genéricos e decidimos inovar, trazendo um suplemento líquido que se encaixa na rotina real das pessoas.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              Com fórmulas líquidas de alta absorção, ingredientes naturais selecionados e um compromisso genuíno com resultados, criamos não apenas um suplemento, mas uma experiência transformadora para quem busca saúde e vitalidade.
            </p>
            <p className="text-gray-700 text-lg">
              Nossa jornada é feita de escuta ativa e evolução constante, sempre guiada pelos feedbacks de quem confia em nossa marca. Não vendemos apenas suplementos – criamos experiências que transformam hábitos e promovem qualidade de vida.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-juvelina-mint bg-opacity-10 p-6 rounded-xl text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-juvelina-mint rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="text-juvelina-gold" size={24} />
              </div>
              <h3 className="font-bold text-xl mb-2">Fórmula Líquida</h3>
              <p className="text-gray-600">Alta absorção para resultados mais rápidos e eficientes no seu organismo.</p>
            </div>
            
            <div className="bg-juvelina-mint bg-opacity-10 p-6 rounded-xl text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-juvelina-mint rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-juvelina-gold" size={24} />
              </div>
              <h3 className="font-bold text-xl mb-2">Premium & Natural</h3>
              <p className="text-gray-600">25 nutrientes cuidadosamente selecionados para uma fórmula completa e equilibrada.</p>
            </div>
            
            <div className="bg-juvelina-mint bg-opacity-10 p-6 rounded-xl text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-juvelina-mint rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-juvelina-gold" size={24} />
              </div>
              <h3 className="font-bold text-xl mb-2">Cuidado Genuíno</h3>
              <p className="text-gray-600">Desenvolvido com empatia para atender às necessidades reais de saúde e bem-estar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section (Dores e Soluções) */}
      <section id="beneficios" className="py-16 md:py-24 bg-gradient-to-b from-white to-juvelina-mint bg-opacity-20 relative">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-juvelina-mint rounded-full filter blur-3xl opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-juvelina-mint bg-opacity-30 px-4 py-1 rounded-full text-juvelina-gold font-medium mb-4">Soluções Reais</div>
            <h2 className="text-3xl md:text-4xl font-['Ws_Paradose'] mb-4 text-juvelina-gold">Transformando Desafios em Bem-Estar</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Entendemos os obstáculos do dia a dia que dificultam sua jornada de saúde. Juvelina foi criada para superar esses desafios.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <h3 className="font-bold text-xl mb-6 text-juvelina-gold flex items-center gap-2">
                <X size={20} className="text-red-500" />
                O Desafio
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 text-red-500"><X size={16} /></div>
                  <p className="text-gray-700">Falta de tempo e consistência para manter uma rotina de suplementação eficiente.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 text-red-500"><X size={16} /></div>
                  <p className="text-gray-700">Dificuldade em encontrar produtos naturais e práticos que realmente tragam benefícios.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 text-red-500"><X size={16} /></div>
                  <p className="text-gray-700">Dúvidas sobre a eficácia e confiabilidade de suplementos tradicionais.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 text-red-500"><X size={16} /></div>
                  <p className="text-gray-700">Suplementos convencionais são engessados, com pouca personalização para diferentes necessidades.</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <h3 className="font-bold text-xl mb-6 text-juvelina-gold flex items-center gap-2">
                <CheckCircle size={20} className="text-green-500" />
                A Solução Juvelina
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 text-green-500"><CheckCircle size={16} /></div>
                  <p className="text-gray-700">Formato líquido de alta absorção que se integra facilmente à sua rotina diária.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 text-green-500"><CheckCircle size={16} /></div>
                  <p className="text-gray-700">25 nutrientes premium cuidadosamente selecionados para oferecer resultados visíveis e duradouros.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 text-green-500"><CheckCircle size={16} /></div>
                  <p className="text-gray-700">Transparência total: mostramos exatamente o que você está consumindo e como funciona.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 text-green-500"><CheckCircle size={16} /></div>
                  <p className="text-gray-700">Fórmula completa que atende múltiplas necessidades: energia, imunidade, pele, cabelos e unhas.</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#ingredientes" className="inline-flex items-center gap-2 text-juvelina-gold font-medium hover:underline">
              Conheça nossos ingredientes premium
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredientes" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-juvelina-mint bg-opacity-30 px-4 py-1 rounded-full text-juvelina-gold font-medium mb-4">Pureza e Potência</div>
            <h2 className="text-3xl md:text-4xl font-['Ws_Paradose'] mb-4 text-juvelina-gold">Ingredientes Premium da Natureza</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Cada ingrediente é cuidadosamente selecionado para garantir máxima eficácia e segurança, trabalhando em sinergia para sua saúde integral.
            </p>
          </div>
          
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
                  <span className="font-bold">Pureza Certificada</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-juvelina-gold">
                <div className="bg-juvelina-mint w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="text-juvelina-gold" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Colágeno Peptídico (2,5g)</h3>
                  <p className="text-gray-600">Peptídeos bioativos que promovem a firmeza e elasticidade da pele, fortalecem cabelos e unhas, e apoiam a saúde das articulações.</p>
                </div>
              </div>
              
              <div className="flex gap-4 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-juvelina-gold">
                <div className="bg-juvelina-mint w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="text-juvelina-gold" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Complexo BCAA (935mg)</h3>
                  <p className="text-gray-600">Aminoácidos essenciais (L-leucina, L-isoleucina, L-valina) que auxiliam na recuperação muscular, síntese proteica e fornecem energia sustentada.</p>
                </div>
              </div>
              
              <div className="flex gap-4 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-juvelina-gold">
                <div className="bg-juvelina-mint w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="text-juvelina-gold" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Glutamina (310mg)</h3>
                  <p className="text-gray-600">Aminoácido essencial para fortalecer o sistema imunológico e melhorar a absorção de nutrientes, acelerando a eficácia de toda a fórmula.</p>
                </div>
              </div>
              
              <div className="flex gap-4 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-juvelina-gold">
                <div className="bg-juvelina-mint w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Brain className="text-juvelina-gold" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Vitaminas e Minerais</h3>
                  <p className="text-gray-600">Um complexo completo com 13 vitaminas e 3 minerais essenciais em dosagens ideais, incluindo Biotina (45mcg) para saúde dos cabelos e Vitamina C (100mg) para imunidade.</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button 
                  onClick={() => setShowIngredients(true)}
                  className="bg-juvelina-mint bg-opacity-30 text-juvelina-gold px-6 py-2 rounded-full hover:bg-opacity-50 transition"
                >
                  Ver Lista Completa de Ingredientes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="py-16 md:py-24 bg-juvelina-mint bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-juvelina-mint bg-opacity-30 px-4 py-1 rounded-full text-juvelina-gold font-medium mb-4">Ciência & Natureza</div>
            <h2 className="text-3xl md:text-4xl font-['Ws_Paradose'] mb-4 text-juvelina-gold">Como a Juvelina Atua no Seu Organismo</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A tecnologia de absorção avançada da Juvelina permite que os nutrientes sejam aproveitados de forma superior, com resultados mais rápidos e eficientes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <img 
                src="https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Tecnologia de Absorção Juvelina" 
                className="rounded-lg shadow-xl mx-auto"
              />
            </div>
            
            <div className="md:col-span-7">
              <div className="space-y-10">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-juvelina-gold text-white flex items-center justify-center font-bold">1</div>
                  <h3 className="text-xl font-bold mb-2">Absorção Superior</h3>
                  <p className="text-gray-700">Nossa fórmula líquida elimina a barreira da digestão das cápsulas, permitindo que os nutrientes sejam absorvidos até 5x mais rápido pelo seu organismo, com biodisponibilidade maximizada.</p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-juvelina-gold text-white flex items-center justify-center font-bold">2</div>
                  <h3 className="text-xl font-bold mb-2">Sinergia de Ingredientes</h3>
                  <p className="text-gray-700">A Glutamina presente em nossa fórmula acelera a absorção de todos os outros nutrientes, enquanto o complexo de BCAAs e Colágeno trabalham juntos para potencializar os resultados em energia e beleza.</p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-juvelina-gold text-white flex items-center justify-center font-bold">3</div>
                  <h3 className="text-xl font-bold mb-2">Benefícios Múltiplos Integrados</h3>
                  <p className="text-gray-700">Nossa fórmula exclusiva foi desenvolvida para atender múltiplas necessidades simultaneamente: Energia (BCAAs), Imunidade (Glutamina, Vitamina C, Zinco), Beleza (Colágeno, Biotina, Silício) e Bem-estar geral (complexo vitamínico).</p>
                </div>
                
                <div className="mt-8 bg-white p-4 rounded-lg border-l-4 border-juvelina-gold shadow-md">
                  <p className="flex items-start">
                    <span className="text-juvelina-gold mr-2"><ShieldCheck size={20} /></span>
                    <span className="text-gray-700 italic">
                      "Nossa fórmula com 25 nutrientes essenciais trabalha em equilíbrio perfeito para potencializar múltiplos benefícios, ajudando seu corpo a absorver e utilizar cada componente de forma otimizada." <span className="font-medium not-italic">— Equipe de Pesquisa Juvelina</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl">
              <h3 className="text-xl font-bold mb-4 text-center text-juvelina-gold">Resultados Comprovados em Nossos Estudos</h3>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-juvelina-gold mb-2">97%</div>
                  <p className="text-gray-600">dos usuários relataram aumento de energia nas primeiras 2 semanas</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-juvelina-gold mb-2">89%</div>
                  <p className="text-gray-600">notaram melhoria na imunidade após 30 dias de uso</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-juvelina-gold mb-2">92%</div>
                  <p className="text-gray-600">perceberam pele, cabelo e unhas mais saudáveis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-juvelina-mint bg-opacity-30 px-4 py-1 rounded-full text-juvelina-gold font-medium mb-4">Histórias Reais</div>
            <h2 className="text-3xl md:text-4xl font-['Ws_Paradose'] mb-4 text-juvelina-gold">Transformações com Juvelina</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Veja o que nossos clientes estão dizendo sobre suas experiências e resultados com Juvelina.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vídeo TikTok 1 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="relative pb-[177.77%] h-0"> {/* Proporção do TikTok: 9:16 */}
                <iframe 
                  src="https://www.tiktok.com/embed/7320003074217688374" 
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                </iframe>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-juvelina-mint flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" alt="Cliente Juvelina" className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <h4 className="font-bold">Mariana Silva</h4>
                    <div className="flex text-yellow-400 text-sm">
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  "Minha energia mudou completamente após 2 semanas com Juvelina. É incrível como um produto natural pode fazer tanta diferença!"
                </p>
              </div>
            </div>
            
            {/* Vídeo TikTok 2 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="relative pb-[177.77%] h-0"> {/* Proporção do TikTok: 9:16 */}
                <iframe 
                  src="https://www.tiktok.com/embed/7320002791000568102" 
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                </iframe>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-juvelina-mint flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1534&q=80" alt="Cliente Juvelina" className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <h4 className="font-bold">Carlos Mendes</h4>
                    <div className="flex text-yellow-400 text-sm">
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  "Como atleta, posso afirmar que a Juvelina melhorou minha recuperação e foco. Agora é parte essencial da minha rotina diária."
                </p>
              </div>
            </div>
            
            {/* Vídeo TikTok 3 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="relative pb-[177.77%] h-0"> {/* Proporção do TikTok: 9:16 */}
                <iframe 
                  src="https://www.tiktok.com/embed/7320002498211115306" 
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                </iframe>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-juvelina-mint flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Cliente Juvelina" className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <h4 className="font-bold">Patricia Alves</h4>
                    <div className="flex text-yellow-400 text-sm">
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                      <Star size={12} fill="currentColor" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  "Aos 42 anos, sinto mais disposição do que aos 30. Minha pele está radiante e minha imunidade melhorou significativamente. Juvelina mudou minha vida!"
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#" className="text-juvelina-gold hover:underline flex items-center justify-center gap-2">
              Ver mais histórias de transformação
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-16 md:py-24 bg-gradient-to-b from-white to-juvelina-mint bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-juvelina-mint bg-opacity-30 px-4 py-1 rounded-full text-juvelina-gold font-medium mb-4">Invista em Seu Bem-Estar</div>
            <h2 className="text-3xl md:text-4xl font-['Ws_Paradose'] mb-4 text-juvelina-gold">Escolha o Plano Ideal para Você</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Opções flexíveis para acompanhar sua jornada de transformação, com entrega cuidadosa e qualidade garantida.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Plano 1: Compra Única */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Experimente</h3>
                <p className="text-gray-600 mb-6">Ideal para quem quer conhecer os benefícios da Juvelina</p>
                <div className="flex items-center gap-2 mb-6">
                  <div className="text-3xl font-bold">R$149,90</div>
                  <div className="text-gray-500 line-through text-sm">R$179,90</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-juvelina-gold" />
                    <span className="text-gray-700">1 frasco (30 dias de uso)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-juvelina-gold" />
                    <span className="text-gray-700">Frete Grátis em Todo Brasil</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-juvelina-gold" />
                    <span className="text-gray-700">Garantia de 30 dias</span>
                  </li>
                </ul>
                <button className="w-full bg-juvelina-gold text-white py-3 rounded-xl hover:bg-opacity-90 transition">
                  Comprar Agora
                </button>
              </div>
            </div>
            
            {/* Plano 2: Plano Mensal (Popular) */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden transform scale-105 border-2 border-juvelina-gold relative">
              <div className="absolute top-0 right-0 bg-juvelina-gold text-white text-sm py-1 px-3 rounded-bl-lg font-medium">
                MAIS POPULAR
              </div>
              <div className="p-6 pt-10">
                <h3 className="text-xl font-bold mb-2">Assinatura Mensal</h3>
                <p className="text-gray-600 mb-6">A escolha ideal para manter seus resultados</p>
                <div className="flex items-center gap-2 mb-6">
                  <div className="text-3xl font-bold">R$129,90<span className="text-sm font-normal">/mês</span></div>
                  <div className="text-gray-500 line-through text-sm">R$179,90</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-juvelina-gold" />
                    <span className="text-gray-700">Receba 1 frasco todo mês</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-juvelina-gold" />
                    <span className="text-gray-700">Economize R$50/mês</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-juvelina-gold" />
                    <span className="text-gray-700">Frete Grátis Prioritário</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-juvelina-gold" />
                    <span className="text-gray-700">Cancele quando quiser</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-juvelina-gold" />
                    <span className="text-gray-700">Acesso a conteúdos exclusivos</span>
                  </li>
                </ul>
                <button className="w-full bg-juvelina-gold text-white py-3 rounded-xl hover:bg-opacity-90 transition">
                  Assinar Agora
                </button>
              </div>
            </div>
            
            {/* Plano 3: Kit 3 Meses */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Kit 3 Meses</h3>
                <p className="text-gray-600 mb-6">Economize mais com nosso pacote trimestral</p>
                <div className="flex items-center gap-2 mb-6">
                  <div className="text-3xl font-bold">R$379,90</div>
                  <div className="text-gray-500 line-through text-sm">R$539,70</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-juvelina-gold" />
                    <span className="text-gray-700">3 frascos (90 dias de uso)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-juvelina-gold" />
                    <span className="text-gray-700">Economize R$159,80</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-juvelina-gold" />
                    <span className="text-gray-700">Frete Grátis Express</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-juvelina-gold" />
                    <span className="text-gray-700">Garantia Estendida de 90 dias</span>
                  </li>
                </ul>
                <button className="w-full bg-juvelina-gold text-white py-3 rounded-xl hover:bg-opacity-90 transition">
                  Comprar Kit
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-10 flex justify-center">
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-3 max-w-xl">
              <div className="text-juvelina-gold"><Lock size={24} /></div>
              <p className="text-gray-700 text-sm">
                <span className="font-medium">Pagamento 100% Seguro:</span> Aceitamos cartões de crédito, boleto, Pix e parcelamos em até 12x. Seus dados são protegidos com criptografia de ponta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-juvelina-mint bg-opacity-10 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-juvelina-mint bg-opacity-30 px-4 py-1 rounded-full text-juvelina-gold font-medium mb-4">Confiança Total</div>
                <h2 className="text-3xl md:text-4xl font-['Ws_Paradose'] mb-6 text-juvelina-gold">Garantia Incondicional de Satisfação</h2>
                <p className="text-gray-700 mb-6">
                  Acreditamos tanto nos resultados da Juvelina que oferecemos uma garantia completa de devolução do seu dinheiro. Experimente por até 30 dias e, se não estiver completamente satisfeito, devolvemos 100% do valor investido.
                </p>
                <p className="text-gray-700 mb-6">
                  Sem perguntas, sem burocracia. Apenas precisamos receber o produto (mesmo que parcialmente usado) e processaremos seu reembolso em até 7 dias úteis.
                </p>
                <div className="flex items-center gap-3">
                  <Shield className="text-juvelina-gold" size={32} />
                  <span className="font-bold text-juvelina-gold text-lg">30 Dias de Garantia</span>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://cdn.pixabay.com/photo/2017/03/12/02/20/satisfaction-guaranteed-2136200_1280.png" 
                  alt="Selo de Garantia Juvelina" 
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-juvelina-mint to-white bg-opacity-30 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-juvelina-aqua rounded-full filter blur-3xl opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-['Ws_Paradose'] mb-6 text-juvelina-gold">Comece Sua Jornada de Transformação Hoje</h2>
              <p className="text-gray-700 text-lg mb-8">
                Junte-se a milhares de pessoas que já estão experimentando os benefícios transformadores da Juvelina. Sua melhor versão está a apenas um clique de distância.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setShowModal(true)}
                  className="bg-juvelina-gold text-white px-10 py-4 rounded-full hover:bg-opacity-90 transition-all text-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Transforme Sua Saúde Agora
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="bg-juvelina-mint bg-opacity-30 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="text-juvelina-gold" size={24} />
                </div>
                <h3 className="font-bold mb-1">Garantia de 30 dias</h3>
                <p className="text-gray-600 text-sm">Satisfação garantida ou seu dinheiro de volta, sem complicações.</p>
              </div>
              
              <div className="p-4">
                <div className="bg-juvelina-mint bg-opacity-30 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="text-juvelina-gold" size={24} />
                </div>
                <h3 className="font-bold mb-1">25 Nutrientes Premium</h3>
                <p className="text-gray-600 text-sm">Fórmula completa com ingredientes naturais de alta qualidade.</p>
              </div>
              
              <div className="p-4">
                <div className="bg-juvelina-mint bg-opacity-30 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Droplets className="text-juvelina-gold" size={24} />
                </div>
                <h3 className="font-bold mb-1">Alta Absorção</h3>
                <p className="text-gray-600 text-sm">Fórmula líquida para resultados mais rápidos e eficientes.</p>
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
            <h2 className="text-3xl md:text-4xl font-['Ws_Paradose'] mb-4 text-juvelina-gold">Perguntas e Respostas</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre a Juvelina e como ela pode beneficiar sua saúde.
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
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Não encontrou o que procurava?</p>
            <a href="#" className="text-juvelina-gold font-medium hover:underline">Entre em contato com nossa equipe</a>
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
                Nutrindo seu bem-estar com soluções naturais e inovadoras, para uma vida mais saudável e equilibrada.
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
              <h3 className="font-bold text-lg mb-4 text-gray-800">Menu Rápido</h3>
              <ul className="space-y-2">
                <li><a href="#sobre" className="text-gray-600 hover:text-juvelina-gold transition">Sobre Nós</a></li>
                <li><a href="#como-funciona" className="text-gray-600 hover:text-juvelina-gold transition">Como Funciona</a></li>
                <li><a href="#ingredientes" className="text-gray-600 hover:text-juvelina-gold transition">Ingredientes</a></li>
                <li><a href="#depoimentos" className="text-gray-600 hover:text-juvelina-gold transition">Depoimentos</a></li>
                <li><a href="#planos" className="text-gray-600 hover:text-juvelina-gold transition">Planos</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-gray-800">Ajuda & Suporte</h3>
              <ul className="space-y-2">
                <li><a href="#faq" className="text-gray-600 hover:text-juvelina-gold transition">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-juvelina-gold transition">Política de Entrega</a></li>
                <li><a href="#" className="text-gray-600 hover:text-juvelina-gold transition">Política de Reembolso</a></li>
                <li><a href="#" className="text-gray-600 hover:text-juvelina-gold transition">Termos de Uso</a></li>
                <li><a href="#" className="text-gray-600 hover:text-juvelina-gold transition">Privacidade</a></li>
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
              <div className="mt-6">
                <h4 className="font-medium mb-2">Inscreva-se para novidades</h4>
                <div className="flex">
                  <input type="email" placeholder="Seu e-mail" className="bg-white border border-gray-200 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-juvelina-gold" />
                  <button className="bg-juvelina-gold text-white px-4 rounded-r-lg hover:bg-opacity-90 transition">
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Juvelina Organics. Todos os direitos reservados.</p>
            <p className="mt-2 text-xs">
              Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Consulte seu médico antes de usar.
            </p>
          </div>
        </div>
      </footer>

      {/* Ingredients List Modal */}
      {showIngredients && <IngredientsList onClose={() => setShowIngredients(false)} />}
      
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
                <h4 className="font-bold text-lg">Juvelina - Suplemento Líquido</h4>
                <p className="text-gray-600">Frasco com 25 nutrientes essenciais (30 dias de tratamento)</p>
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
                        <p className="text-sm text-gray-600">Frasco único (30 dias de uso)</p>
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