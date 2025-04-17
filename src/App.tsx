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
  ArrowUpRight,
  Users
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
                    bgColor: "bg-[#C2F7BC]/30"
                  },
                  {
                    name: "Óleo de Coco MCT",
                    description: "Fonte de energia rápida e duradoura que ajuda a manter o foco mental.",
                    icon: <Droplet className="text-[#A9683D]" size={20} />,
                    bgColor: "bg-[#9BD0D2]/30"
                  },
                  {
                    name: "Extrato de Açaí",
                    description: "Superalimento amazônico rico em antioxidantes que combatem o envelhecimento celular.",
                    icon: <Leaf className="text-[#A9683D]" size={20} />,
                    bgColor: "bg-[#C2F7BC]/30"
                  },
                  {
                    name: "Minerais Iônicos",
                    description: "Complexo mineral de alta absorção que revitaliza todas as funções corporais.",
                    icon: <Droplet className="text-[#A9683D]" size={20} />,
                    bgColor: "bg-[#9BD0D2]/30"
                  }
                ].map((ingredient, index) => (
                  <div 
                    key={index} 
                    className="flex gap-4 group hover:bg-white/80 p-3 rounded-lg transition-all duration-300 hover:shadow-sm"
                  >
                    <div className={`${ingredient.bgColor} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {ingredient.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 group-hover:text-[#A9683D] transition-colors duration-300">{ingredient.name}</h3>
                      <p className="text-gray-600">{ingredient.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <button
                onClick={() => setShowModal(true)}
                className="mt-8 inline-flex items-center gap-2 text-[#A9683D] font-medium hover:underline group"
              >
                Saiba mais sobre nossa formulação
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with enhanced carousel and card hover effects */}
      <section id="depoimentos" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-[#A9683D]/10 text-[#A9683D] px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block" style={{fontFamily: "'Zap', sans-serif"}}>
              EXPERIÊNCIAS REAIS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#A9683D] italic" style={{fontFamily: "'Ws Paradose', serif"}}>
              Histórias de Renovação
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{fontFamily: "'Zap', sans-serif"}}>
              Descubra como Juvelina Organics tem transformado a vida de milhares de pessoas através da renovação natural.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="max-w-4xl mx-auto relative">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="min-w-full p-4">
                    <div className="bg-white rounded-xl shadow-md p-8 border border-[#C2F7BC]/30 hover:shadow-lg transition-all duration-300">
                      <div className="flex text-[#A9683D] mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={20} fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 text-lg italic" style={{fontFamily: "'Zap', sans-serif"}}>
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-[#9BD0D2]/30 rounded-full overflow-hidden">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div style={{fontFamily: "'Zap', sans-serif"}}>
                          <h4 className="font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex justify-center mt-8 gap-3">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? 'bg-[#A9683D] w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Additional Social Proof */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            {[
              "Mais de 10.000 clientes satisfeitos",
              "Produto mais bem avaliado da categoria",
              "99% de avaliações 5 estrelas",
              "Recomendado por especialistas"
            ].map((item, index) => (
              <div key={index} className="bg-[#C2F7BC]/5 p-4 rounded-lg">
                <p className="font-medium text-sm" style={{fontFamily: "'Zap', sans-serif"}}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section with attractive cards */}
      <section id="blog" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#9BD0D2]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-[#9BD0D2]/20 text-[#A9683D] px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block" style={{fontFamily: "'Zap', sans-serif"}}>
              ARTIGOS RECENTES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#A9683D] italic" style={{fontFamily: "'Ws Paradose', serif"}}>
              Conhecimento para Renovação
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{fontFamily: "'Zap', sans-serif"}}>
              Descubra dicas, informações e estudos sobre bem-estar, saúde natural e o poder dos ingredientes orgânicos.
            </p>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-xs px-2 py-1 rounded">
                    {post.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-[#A9683D] transition-colors duration-300" style={{fontFamily: "'Ws Paradose', serif"}}>
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm" style={{fontFamily: "'Zap', sans-serif"}}>
                    {post.excerpt}
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-[#A9683D] text-sm font-medium group-hover:underline"
                  >
                    Ler artigo completo
                    <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Newsletter Subscription */}
          <div className="mt-16 bg-[#C2F7BC]/10 p-8 md:p-12 rounded-2xl max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-[#A9683D]" style={{fontFamily: "'Ws Paradose', serif"}}>
                Receba Dicas de Bem-Estar
              </h3>
              <p className="text-gray-600" style={{fontFamily: "'Zap', sans-serif"}}>
                Inscreva-se em nossa newsletter e receba conteúdos exclusivos sobre saúde natural e bem-estar.
              </p>
            </div>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <AtSign size={18} />
                  </div>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor email" 
                    className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9BD0D2]/50 transition-all"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-[#A9683D] text-white px-6 py-3 rounded-full hover:bg-[#A9683D]/90 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Inscrever-se</span>
                  <Send size={16} />
                </button>
              </div>
              
              {newsletterSuccess && (
                <div className="mt-4 text-center text-green-600 animate-fadeIn" style={{fontFamily: "'Zap', sans-serif"}}>
                  <CheckCircle size={16} className="inline mr-1" />
                  Inscrição realizada com sucesso!
                </div>
              )}
              
              <p className="text-xs text-gray-500 text-center mt-4" style={{fontFamily: "'Zap', sans-serif"}}>
                Respeitamos sua privacidade. Você pode cancelar a inscrição a qualquer momento.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section with interactive elements */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-[#A9683D]/10 text-[#A9683D] px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block" style={{fontFamily: "'Zap', sans-serif"}}>
              DÚVIDAS FREQUENTES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#A9683D] italic" style={{fontFamily: "'Ws Paradose', serif"}}>
              Perguntas Frequentes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{fontFamily: "'Zap', sans-serif"}}>
              Encontre respostas para as dúvidas mais comuns sobre o Juvelina e como ele pode beneficiar sua saúde.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-[#C2F7BC]/5 rounded-xl p-6 md:p-8">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`
                  border-b border-gray-200 last:border-0
                  ${index === activeAccordion ? 'pb-6' : 'pb-0'}
                `}
              >
                <button 
                  className="flex justify-between items-center w-full text-left font-medium text-lg py-5 group"
                  onClick={() => toggleAccordion(index)}
                  style={{fontFamily: "'Zap', sans-serif"}}
                >
                  <span className={`transition-colors duration-300 ${activeAccordion === index ? 'text-[#A9683D]' : 'text-gray-800 group-hover:text-[#A9683D]'}`}>
                    {item.question}
                  </span>
                  <span className={`
                    flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300
                    ${activeAccordion === index 
                      ? 'bg-[#A9683D] text-white transform rotate-180' 
                      : 'bg-gray-100 text-gray-500 group-hover:bg-[#A9683D]/10 group-hover:text-[#A9683D]'
                    }
                  `}>
                    {activeAccordion === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>
                <div 
                  className={`
                    overflow-hidden transition-all duration-300 
                    ${activeAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="py-1 text-gray-600" style={{fontFamily: "'Zap', sans-serif"}}>
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional question CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4" style={{fontFamily: "'Zap', sans-serif"}}>
              Não encontrou a resposta que procurava?
            </p>
            <a 
              href="#"
              className="inline-flex items-center gap-2 text-[#A9683D] font-medium border border-[#A9683D] px-6 py-3 rounded-full hover:bg-[#A9683D]/5 transition-colors duration-300"
            >
              <span>Entre em contato</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action with parallax-like effect */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#C2F7BC]/20 to-[#9BD0D2]/20 relative overflow-hidden">
        {/* Decorative elements with parallax effect */}
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-[#C2F7BC]/20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-[#9BD0D2]/20 animate-float delay-200"></div>
        <div className="absolute top-40 right-40 w-24 h-24 rounded-full bg-[#A9683D]/10 animate-float delay-100"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#A9683D] italic animate-fadeIn" style={{fontFamily: "'Ws Paradose', serif"}}>
              Transforme Sua Vitalidade Hoje
            </h2>
            <p className="text-gray-700 text-lg mb-8 animate-fadeInUp" style={{fontFamily: "'Zap', sans-serif"}}>
              Junte-se às milhares de pessoas que já descobriram o poder da renovação natural com Juvelina Organics. Oferecemos garantia de satisfação de 30 dias.
            </p>
            
            {/* Enhanced guarantee badge */}
            <div className="relative inline-block mb-8">
              <div className="absolute -top-12 right-0 rotate-12 z-10 animate-pulse">
                <div className="bg-white rounded-full px-6 py-2 shadow-lg text-[#A9683D] font-bold text-sm flex items-center gap-2" style={{fontFamily: "'Ws Paradose', serif"}}>
                  <Shield size={16} />
                  30 DIAS DE GARANTIA
                </div>
              </div>
              
              {/* Product showcase */}
              <div className="bg-white p-6 rounded-xl shadow-lg inline-block max-w-xs">
                <div className="relative mb-4">
                  <img 
                    src={productImages[0]} 
                    alt="Juvelina Produto" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 left-2 bg-[#A9683D] text-white text-xs px-2 py-1 rounded">
                    MAIS VENDIDO
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-1 text-[#A9683D]" style={{fontFamily: "'Ws Paradose', serif"}}>Juvelina Organics</h3>
                <p className="text-sm text-gray-600 mb-3" style={{fontFamily: "'Zap', sans-serif"}}>60 cápsulas • Tratamento Completo</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="font-bold text-xl text-[#A9683D]">R$ 149,90</div>
                  <div className="text-sm text-gray-500 line-through">R$ 199,90</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-4 flex-col sm:flex-row animate-fadeInUp delay-200" style={{fontFamily: "'Zap', sans-serif"}}>
              <button 
                onClick={() => setShowModal(true)}
                className="bg-[#A9683D] text-white px-8 py-3 rounded-full hover:shadow-lg hover:bg-[#A9683D]/90 transition-all duration-300 text-lg font-medium flex items-center justify-center gap-2 transform hover:translate-y-[-2px]"
              >
                <ShoppingCart size={20} />
                Comprar Agora
              </button>
              <a 
                href="#benefícios"
                className="border border-[#A9683D] text-[#A9683D] px-8 py-3 rounded-full hover:bg-[#A9683D]/10 transition-all duration-300 text-lg font-medium flex items-center justify-center"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer with better structure and animations */}
      <footer className="bg-gray-50 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6 group">
                <div className="flex">
                  <Droplet className="h-6 w-6 text-[#C2F7BC] group-hover:animate-bounce" />
                  <Leaf className="h-6 w-6 text-[#9BD0D2] -ml-2 group-hover:animate-bounce" />
                </div>
                <span className="font-bold text-xl italic text-[#A9683D]" style={{fontFamily: "'Ws Paradose', serif"}}>Juvelina</span>
              </div>
              <p className="text-gray-600 mb-6" style={{fontFamily: "'Zap', sans-serif"}}>
                Suplementos naturais de alta qualidade para uma vida mais saudável e equilibrada.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#A9683D] hover:text-white transition-colors duration-300">
                  <Instagram size={18} />
                </a>
                <a href="#" className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#A9683D] hover:text-white transition-colors duration-300">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
            
            <div style={{fontFamily: "'Zap', sans-serif"}}>
              <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-3">
                {["Sobre Nós", "Benefícios", "Ingredientes", "Depoimentos", "Blog"].map((item, index) => (
                  <li key={index}>
                    <a 
                      href={`#${item.toLowerCase().replace(/\s/g, '-')}`} 
                      className="text-gray-600 hover:text-[#A9683D] transition-colors duration-300 flex items-center gap-1 group"
                    >
                      <span className="w-0 h-0.5 bg-[#A9683D] transition-all duration-300 group-hover:w-2"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{fontFamily: "'Zap', sans-serif"}}>
              <h3 className="font-bold text-lg mb-4">Ajuda & Suporte</h3>
              <ul className="space-y-3">
                {["FAQ", "Política de Envio", "Política de Reembolso", "Termos de Uso", "Contato"].map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-[#A9683D] transition-colors duration-300 flex items-center gap-1 group"
                    >
                      <span className="w-0 h-0.5 bg-[#A9683D] transition-all duration-300 group-hover:w-2"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{fontFamily: "'Zap', sans-serif"}}>
              <h3 className="font-bold text-lg mb-4">Contato</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <AtSign size={16} className="text-[#A9683D]" />
                  <span>contato@juvelina.com.br</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#A9683D] font-bold text-sm">TEL:</span>
                  <span>+55 (11) 3456-7890</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A9683D] font-bold text-sm mt-1">END:</span>
                  <span>Av. Paulista, 1000<br/>São Paulo, SP - Brasil</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 py-8 border-t border-b border-gray-200 mb-8">
            {["Entrega Segura", "Pagamento Protegido", "Garantia de 30 dias", "100% Natural", "Vegano"].map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#9BD0D2]" />
                <span className="text-sm text-gray-600" style={{fontFamily: "'Zap', sans-serif"}}>{badge}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center text-gray-500 text-sm" style={{fontFamily: "'Zap', sans-serif"}}>
            <p>&copy; {new Date().getFullYear()} Juvelina Organics. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Enhanced Purchase Modal with better UX */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-[#A9683D]" style={{fontFamily: "'Ws Paradose', serif"}}>Comprar Juvelina</h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="mb-8">
                <div className="relative mb-4">
                  <img 
                    src={productImages[0]} 
                    alt="Juvelina Product" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="absolute top-2 left-2 bg-[#A9683D] text-white text-xs px-2 py-1 rounded">
                    MAIS VENDIDO
                  </div>
                </div>
                <h4 className="font-bold text-lg" style={{fontFamily: "'Ws Paradose', serif"}}>Juvelina Organics - Suplemento Natural</h4>
                <p className="text-gray-600" style={{fontFamily: "'Zap', sans-serif"}}>Frasco com 60 cápsulas (30 dias de tratamento)</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="font-bold text-2xl text-[#A9683D]">R$ 149,90</div>
                  <div className="text-sm text-gray-500 line-through">R$ 199,90</div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mb-8">
                <h4 className="font-bold mb-4" style={{fontFamily: "'Zap', sans-serif"}}>Escolha sua opção:</h4>
                
                <div className="space-y-3">
                  <div className="border-2 border-[#A9683D] rounded-lg p-4 bg-[#A9683D]/5">
                    <div className="flex gap-3">
                      <input 
                        type="radio" 
                        id="option1" 
                        name="purchase_option" 
                        className="mt-1" 
                        defaultChecked 
                      />
                      <div className="flex-1" style={{fontFamily: "'Zap', sans-serif"}}>
                        <label htmlFor="option1" className="font-bold flex justify-between">
                          <span>Compra única</span>
                          <span>R$ 149,90</span>
                        </label>
                        <p className="text-sm text-gray-600">Frasco único com 60 cápsulas</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-[#A9683D] hover:bg-[#A9683D]/5 transition-all duration-300">
                    <div className="flex gap-3">
                      <input 
                        type="radio" 
                        id="option2" 
                        name="purchase_option"
                        className="mt-1"
                      />
                      <div className="flex-1" style={{fontFamily: "'Zap', sans-serif"}}>
                        <label htmlFor="option2" className="font-bold flex justify-between">
                          <span>Assinatura mensal</span>
                          <span>R$ 129,90</span>
                        </label>
                        <p className="text-sm text-gray-600">Economize 13% com entrega mensal automática</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-[#A9683D] hover:bg-[#A9683D]/5 transition-all duration-300">
                    <div className="flex gap-3">
                      <input 
                        type="radio" 
                        id="option3" 
                        name="purchase_option" 
                        className="mt-1"
                      />
                      <div className="flex-1" style={{fontFamily: "'Zap', sans-serif"}}>
                        <label htmlFor="option3" className="font-bold flex justify-between">
                          <span>Kit 3 meses</span>
                          <span>R$ 379,90</span>
                        </label>
                        <p className="text-sm text-gray-600">Economize 16% na compra de 3 frascos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <button className="w-full bg-[#A9683D] text-white px-6 py-3 rounded-full hover:bg-[#A9683D]/90 hover:shadow-md transition-all duration-300 font-medium flex items-center justify-center gap-2 transform hover:translate-y-[-2px]">
                  <ShoppingCart size={18} />
                  Adicionar ao Carrinho
                </button>
                
                <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Shield size={16} className="text-[#A9683D]" />
                    <span>Pagamento Seguro</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={16} className="text-[#A9683D]" />
                    <span>Garantia de 30 dias</span>
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