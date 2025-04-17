import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  ShoppingCart, 
  Menu, 
  X, 
  Star, 
  Droplet, 
  CheckCircle, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  ChevronDown,
  ChevronUp,
  Heart,
  Send,
  Clock,
  Shield,
  TrendingUp,
  AtSign,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

function App() {
  // States
  const [showModal, setShowModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0); // First FAQ open by default
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [currentProductImage, setCurrentProductImage] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  // Handle scroll for navbar effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  // Toggle FAQ accordion
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Newsletter submission
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSuccess(true);
    setEmail('');
    setTimeout(() => setNewsletterSuccess(false), 3000);
  };

  // Toggle product tooltip
  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
    if (!showTooltip) {
      setTimeout(() => setShowTooltip(false), 3000);
    }
  };

  // Product images for carousel
  const productImages = [
    "https://images.unsplash.com/photo-1607006333439-505849ef4f76?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1556760544-b790f2f758a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
  ];

  // Benefit tabs
  const benefitTabs = [
    {
      title: "Renovação",
      icon: <Sparkles className="text-[#A9683D]" size={24} />,
      description: "Ingredientes orgânicos que renovam seu corpo a nível celular, promovendo regeneração e vitalidade de dentro para fora.",
      features: [
        "Combate o envelhecimento celular",
        "Restaura o equilíbrio natural do corpo",
        "Promove renovação da pele e tecidos"
      ]
    },
    {
      title: "Vitalidade",
      icon: <TrendingUp className="text-[#A9683D]" size={24} />,
      description: "Fórmula exclusiva que aumenta seus níveis de energia de forma sustentável, sem picos ou quedas ao longo do dia.",
      features: [
        "Energia duradoura sem estimulantes",
        "Melhora do foco e disposição diária",
        "Combate a fadiga crônica"
      ]
    },
    {
      title: "Equilíbrio",
      icon: <Heart className="text-[#A9683D]" size={24} />,
      description: "Combinação perfeita de adaptógenos que ajudam seu corpo a encontrar o equilíbrio ideal em todas as funções.",
      features: [
        "Redução dos níveis de estresse",
        "Suporte ao sistema imunológico",
        "Regulação dos processos metabólicos"
      ]
    }
  ];

  // FAQ items
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
    },
    {
      question: "Como é feita a entrega do produto?",
      answer: "Enviamos para todo o Brasil pelos Correios. O prazo de entrega varia de 3 a 7 dias úteis, dependendo da sua localização. Pedidos acima de R$200 têm frete grátis."
    },
    {
      question: "Qual a política de garantia?",
      answer: "Oferecemos garantia de satisfação de 30 dias. Se você não estiver completamente satisfeito, devolva o produto (mesmo parcialmente consumido) e reembolsaremos 100% do valor pago."
    }
  ];

  // Testimonials
  const testimonials = [
    {
      text: "Juvelina transformou minha saúde! Após 30 dias de uso, minha energia aumentou consideravelmente e sinto-me renovada como não me sentia há anos.",
      name: "Mariana Silva",
      location: "São Paulo, SP",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=776&q=80"
    },
    {
      text: "Como atleta, sempre busco o melhor para meu corpo. Juvelina melhorou minha recuperação e vitalidade. Sinto que meu corpo se regenera muito mais rápido agora.",
      name: "Rafael Costa",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=1534&q=80"
    },
    {
      text: "Aos 45 anos, sentia minha energia diminuindo. Depois de usar Juvelina por 2 meses, sinto-me revigorada e minha pele está visivelmente mais jovem. É incrível!",
      name: "Carolina Mendes",
      location: "Belo Horizonte, MG",
      rating: 5,
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=774&q=80"
    }
  ];

  // Blog posts
  const blogPosts = [
    {
      title: "Os benefícios da ashwagandha para o sistema imunológico",
      excerpt: "Descubra como este adaptógeno milenar pode fortalecer sua imunidade e reduzir o estresse diário.",
      image: "https://images.unsplash.com/photo-1611073615830-9f76b675f4e2?auto=format&fit=crop&w=774&q=80",
      date: "12 Abr 2025"
    },
    {
      title: "Como os minerais iônicos renovam seu organismo",
      excerpt: "Entenda como os minerais presentes no Juvelina contribuem para a revitalização celular.",
      image: "https://images.unsplash.com/photo-1597586124394-fbd6ef244026?auto=format&fit=crop&w=774&q=80",
      date: "05 Abr 2025"
    },
    {
      title: "Rotina diária de bem-estar e renovação",
      excerpt: "Dicas práticas para hábitos saudáveis que potencializam os efeitos do Juvelina.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1820&q=80",
      date: "28 Mar 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-hidden">
      {/* Announcement Bar with subtle animation */}
      <div className="bg-[#A9683D] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2">
            <span className="animate-pulse">🌿</span>
            <p className="text-center text-sm md:text-base italic" style={{fontFamily: "'Ws Paradose', serif"}}>
              Renovação e Vitalidade para seu corpo todos os dias
            </p>
            <span className="animate-pulse">🌿</span>
          </div>
        </div>
      </div>
      
      {/* Enhanced Navigation with scroll effect */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-sm py-4"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 group">
              <div className="flex relative">
                <Droplet className={`h-6 w-6 text-[#C2F7BC] transition-all duration-300 ${isScrolled ? "transform rotate-0" : "transform rotate-12"}`} />
                <Leaf className={`h-6 w-6 text-[#9BD0D2] -ml-2 transition-all duration-300 ${isScrolled ? "transform rotate-0" : "transform -rotate-12"}`} />
              </div>
              <span className="font-bold text-xl italic text-[#A9683D] group-hover:tracking-wide transition-all duration-300" style={{fontFamily: "'Ws Paradose', serif"}}>Juvelina</span>
            </div>
            
            {/* Desktop Menu with hover effects */}
            <nav className="hidden md:flex gap-8 items-center" style={{fontFamily: "'Zap', sans-serif"}}>
              {["Benefícios", "Ingredientes", "Depoimentos", "Blog", "FAQ"].map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-600 hover:text-[#A9683D] relative font-medium transition group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A9683D] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              
              <button 
                onClick={() => setShowModal(true)}
                className="bg-[#A9683D] text-white px-6 py-2 rounded-full hover:bg-[#A9683D]/90 hover:shadow-md transition-all duration-300 flex items-center gap-2 transform hover:translate-y-[-2px]"
              >
                <ShoppingCart size={18} />
                <span>Comprar</span>
              </button>
            </nav>
            
            {/* Mobile Menu Button with animation */}
            <button 
              className="md:hidden text-gray-700 p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? 
                <X size={24} className="transition-transform duration-300 transform rotate-90" /> : 
                <Menu size={24} className="transition-transform duration-300" />
              }
            </button>
          </div>
        </div>
        
        {/* Enhanced Mobile Menu with slide animation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-fadeIn shadow-sm">
            <div className="container mx-auto px-4 flex flex-col gap-4" style={{fontFamily: "'Zap', sans-serif"}}>
              {["Benefícios", "Ingredientes", "Depoimentos", "Blog", "FAQ"].map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-600 hover:text-[#A9683D] transition py-2 font-medium border-l-2 border-transparent hover:border-[#A9683D] hover:pl-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={() => {
                  setShowModal(true);
                  setMobileMenuOpen(false);
                }}
                className="bg-[#A9683D] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition flex items-center justify-center gap-2 w-full mt-2"
              >
                <ShoppingCart size={18} />
                <span>Comprar Agora</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with parallax effect and floating elements */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#C2F7BC]/20 to-white overflow-hidden">
        <div className="container mx-auto px-4 relative">
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-[#9BD0D2]/20 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-[#C2F7BC]/20 animate-pulse"></div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative z-10">
              <div className="inline-block mb-3 px-3 py-1 bg-[#A9683D]/10 rounded-full">
                <p className="text-[#A9683D] text-sm font-medium" style={{fontFamily: "'Zap', sans-serif"}}>
                  100% Orgânico • Vegano • Sem Glúten
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#A9683D] italic animate-fadeIn" style={{fontFamily: "'Ws Paradose', serif"}}>
                Renovação Natural <br/>para Seu Corpo
              </h1>
              <p className="text-gray-600 text-lg mb-8 animate-fadeInUp" style={{fontFamily: "'Zap', sans-serif"}}>
                Experimente o poder transformador da natureza com Juvelina Organics. 
                Nossa fórmula exclusiva combina ingredientes orgânicos que revitalizam, 
                regeneram e renovam seu organismo de dentro para fora.
              </p>
              
              <div className="flex flex-wrap gap-5 mb-8 animate-fadeInUp delay-100" style={{fontFamily: "'Zap', sans-serif"}}>
                {["Melhora Energética", "Renovação Celular", "Equilíbrio Natural", "Fortalece Imunidade"].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-lg shadow-sm">
                    <CheckCircle className="text-[#9BD0D2]" size={18} />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-200" style={{fontFamily: "'Zap', sans-serif"}}>
                <button 
                  onClick={() => setShowModal(true)}
                  className="bg-[#A9683D] text-white px-8 py-3 rounded-full hover:shadow-lg hover:bg-[#A9683D]/90 transition-all duration-300 text-lg font-medium flex items-center justify-center gap-2 transform hover:translate-y-[-2px]"
                >
                  Experimente Agora
                  <ArrowRight size={20} />
                </button>
                <a 
                  href="#depoimentos"
                  className="border border-[#9BD0D2] text-gray-700 px-8 py-3 rounded-full hover:bg-[#9BD0D2]/10 transition-all duration-300 text-lg font-medium flex items-center justify-center"
                >
                  Ver Depoimentos
                </a>
              </div>
            </div>
            
            {/* Interactive product display */}
            <div className="order-1 md:order-2 flex justify-center relative">
              <div className="relative group">
                <img 
                  src={productImages[currentProductImage]} 
                  alt="Suplemento Juvelina" 
                  className="rounded-lg shadow-xl max-w-full h-auto z-10 relative transition-all duration-500 transform group-hover:scale-105"
                />
                {/* Product info tooltip */}
                <button
                  className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md z-20 hover:bg-white transition-colors duration-300"
                  onClick={toggleTooltip}
                >
                  <span className="text-[#A9683D]">i</span>
                </button>
                
                {showTooltip && (
                  <div className="absolute top-16 right-4 bg-white p-4 rounded-lg shadow-lg z-20 w-64 animate-fadeIn">
                    <h4 className="font-bold text-[#A9683D] mb-2">Juvelina Organics</h4>
                    <p className="text-sm mb-3">Suplemento 100% natural com ingredientes orgânicos certificados para renovação completa do seu organismo.</p>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>60 cápsulas</span>
                      <span>1 mês de tratamento</span>
                    </div>
                  </div>
                )}
                
                {/* Product image gallery dots */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 mt-4">
                  {productImages.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setCurrentProductImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentProductImage === index ? "bg-[#A9683D] w-6" : "bg-gray-300 hover:bg-[#A9683D]/50"
                      }`}
                      aria-label={`Ver imagem ${index + 1} do produto`}
                    />
                  ))}
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[#C2F7BC]/30 -z-10 animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#9BD0D2]/30 -z-10 animate-float delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section with interactive tabs */}
      <section id="benefícios" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-[#C2F7BC]/20 text-[#A9683D] px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block" style={{fontFamily: "'Zap', sans-serif"}}>PARA VOCÊ</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#A9683D] italic" style={{fontFamily: "'Ws Paradose', serif"}}>Benefícios Revitalizantes</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{fontFamily: "'Zap', sans-serif"}}>
              Com a fórmula exclusiva da Juvelina Organics, você experimentará uma renovação profunda para seu corpo e mente.
            </p>
          </div>
          
          {/* Interactive Benefits Tabs */}
          <div className="max-w-4xl mx-auto">
            <div className="flex border-b border-gray-200 mb-8 overflow-x-auto hide-scrollbar">
              {benefitTabs.map((tab, index) => (
                <button 
                  key={index}
                  className={`flex-1 min-w-[120px] text-center py-4 px-4 font-medium transition-all duration-300 relative ${
                    activeTab === index 
                      ? "text-[#A9683D]" 
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab(index)}
                  style={{fontFamily: "'Zap', sans-serif"}}
                >
                  {tab.title}
                  {activeTab === index && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#A9683D] animate-expandWidth"></span>
                  )}
                </button>
              ))}
            </div>
            
            {/* Tab Content with animation */}
            <div className="transition-all duration-500 animate-fadeIn">
              <div className="bg-[#C2F7BC]/5 rounded-2xl p-8 transition-all">
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                  <div className="md:w-1/3 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md">
                      {benefitTabs[activeTab].icon}
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4 text-[#A9683D]" style={{fontFamily: "'Ws Paradose', serif"}}>
                      {benefitTabs[activeTab].title}
                    </h3>
                    <p className="text-gray-600 mb-6" style={{fontFamily: "'Zap', sans-serif"}}>
                      {benefitTabs[activeTab].description}
                    </p>
                    <div className="space-y-3" style={{fontFamily: "'Zap', sans-serif"}}>
                      {benefitTabs[activeTab].features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="text-[#9BD0D2]" size={18} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Statistical highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { number: "97%", text: "Usuários Satisfeitos", icon: <Users size={20} className="text-[#C2F7BC]" /> },
              { number: "100%", text: "Ingredientes Naturais", icon: <Leaf size={20} className="text-[#9BD0D2]" /> },
              { number: "15+", text: "Anos de Pesquisa", icon: <Clock size={20} className="text-[#C2F7BC]" /> },
              { number: "30", text: "Dias de Garantia", icon: <Shield size={20} className="text-[#9BD0D2]" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-md transition-all duration-300 group hover:bg-white">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-1 text-[#A9683D]" style={{fontFamily: "'Ws Paradose', serif"}}>
                  {stat.number}
                </h3>
                <p className="text-gray-600 text-sm" style={{fontFamily: "'Zap', sans-serif"}}>{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section with enhanced visuals */}
      <section id="ingredientes" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#C2F7BC]/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              {/* Main image with hover effect */}
              <img 
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=764&q=80" 
                alt="Ingredientes Naturais" 
                className="rounded-xl shadow-lg border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full border-2 border-[#9BD0D2]/30 -z-10 animate-float"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border-2 border-[#C2F7BC]/30 -z-10 animate-float delay-200"></div>
              
              {/* Image caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm text-[#A9683D] font-medium" style={{fontFamily: "'Zap', sans-serif"}}>
                  Cada ingrediente é cuidadosamente selecionado e testado para garantir qualidade premium
                </p>
              </div>
            </div>
            
            <div>
              <span className="bg-[#9BD0D2]/20 text-[#A9683D] px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block" style={{fontFamily: "'Zap', sans-serif"}}>100% NATURAL</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#A9683D] italic" style={{fontFamily: "'Ws Paradose', serif"}}>
                Ingredientes Puros da Natureza
              </h2>
              <p className="text-gray-600 text-lg mb-8" style={{fontFamily: "'Zap', sans-serif"}}>
                Nossa seleção rigorosa garante que apenas os ingredientes orgânicos mais puros e potentes sejam incluídos em cada cápsula Juvelina.
              </p>

              <div className="space-y-8" style={{fontFamily: "'Zap', sans-serif"}}>
                {[
                  {
                    name: "Ashwagandha Orgânica",
                    description: "Adaptógeno ancestral que reduz estresse e aumenta vitalidade e equilíbrio.",
                    icon: <Leaf className="text-[#A9683D]" size={20} />,
                    bgColor: "bg-[#C2