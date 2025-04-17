import React, { useState } from 'react';
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
  Heart
} from 'lucide-react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

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
    <div className="min-h-screen bg-white text-gray-800">
      {/* Announcement Bar */}
      <div className="bg-[#A9683D] text-white py-2">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm md:text-base italic" style={{fontFamily: "'Ws Paradose', serif"}}>
            🌿 Renovação e Vitalidade para seu corpo todos os dias 🌿
          </p>
        </div>
      </div>
      
      {/* Navigation */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                <Droplet className="h-6 w-6 text-[#C2F7BC]" />
                <Leaf className="h-6 w-6 text-[#9BD0D2] -ml-2" />
              </div>
              <span className="font-bold text-xl italic text-[#A9683D]" style={{fontFamily: "'Ws Paradose', serif"}}>Juvelina</span>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8 items-center" style={{fontFamily: "'Zap', sans-serif"}}>
              <a href="#beneficios" className="text-gray-600 hover:text-[#A9683D] transition font-medium">Benefícios</a>
              <a href="#ingredientes" className="text-gray-600 hover:text-[#A9683D] transition font-medium">Ingredientes</a>
              <a href="#depoimentos" className="text-gray-600 hover:text-[#A9683D] transition font-medium">Depoimentos</a>
              <a href="#faq" className="text-gray-600 hover:text-[#A9683D] transition font-medium">FAQ</a>
              <button 
                onClick={() => setShowModal(true)}
                className="bg-[#A9683D] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition flex items-center gap-2"
              >
                <ShoppingCart size={18} />
                <span>Comprar</span>
              </button>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="container mx-auto px-4 flex flex-col gap-4" style={{fontFamily: "'Zap', sans-serif"}}>
              <a 
                href="#beneficios" 
                className="text-gray-600 hover:text-[#A9683D] transition py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefícios
              </a>
              <a 
                href="#ingredientes" 
                className="text-gray-600 hover:text-[#A9683D] transition py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ingredientes
              </a>
              <a 
                href="#depoimentos" 
                className="text-gray-600 hover:text-[#A9683D] transition py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a 
                href="#faq" 
                className="text-gray-600 hover:text-[#A9683D] transition py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
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

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#C2F7BC]/20 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#A9683D] italic" style={{fontFamily: "'Ws Paradose', serif"}}>
                Renovação Natural para Seu Corpo
              </h1>
              <p className="text-gray-600 text-lg mb-8" style={{fontFamily: "'Zap', sans-serif"}}>
                Experimente o poder transformador da natureza com Juvelina Organics. Nossa fórmula exclusiva combina ingredientes orgânicos que revitalizam, regeneram e renovam seu organismo de dentro para fora.
              </p>
              <div className="flex flex-wrap gap-4 mb-8" style={{fontFamily: "'Zap', sans-serif"}}>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-[#9BD0D2]" size={20} />
                  <span>100% Orgânico</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-[#9BD0D2]" size={20} />
                  <span>Vegano</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-[#9BD0D2]" size={20} />
                  <span>Sem Glúten</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-[#9BD0D2]" size={20} />
                  <span>Sem Conservantes</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4" style={{fontFamily: "'Zap', sans-serif"}}>
                <button 
                  onClick={() => setShowModal(true)}
                  className="bg-[#A9683D] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition text-lg font-medium flex items-center justify-center gap-2"
                >
                  Experimente Agora
                  <ArrowRight size={20} />
                </button>
                <a 
                  href="#depoimentos"
                  className="border border-[#9BD0D2] text-gray-700 px-8 py-3 rounded-full hover:bg-[#9BD0D2]/10 transition text-lg font-medium flex items-center justify-center"
                >
                  Ver Depoimentos
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1607006333439-505849ef4f76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Suplemento Juvelina" 
                  className="rounded-lg shadow-xl max-w-full h-auto z-10 relative"
                />
                <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-[#C2F7BC]/30 -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-[#9BD0D2]/30 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#A9683D] italic" style={{fontFamily: "'Ws Paradose', serif"}}>Benefícios Revitalizantes</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{fontFamily: "'Zap', sans-serif"}}>
              Com a fórmula exclusiva da Juvelina Organics, você experimentará uma renovação profunda para seu corpo e mente.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#C2F7BC]/10 p-8 rounded-xl text-center hover:shadow-md transition">
              <div className="bg-[#C2F7BC]/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplet className="text-[#A9683D]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#A9683D]" style={{fontFamily: "'Ws Paradose', serif"}}>Hidratação Celular</h3>
              <p className="text-gray-600" style={{fontFamily: "'Zap', sans-serif"}}>
                Nossa fórmula única hidrata suas células de dentro para fora, renovando e revigorando seu organismo em nível celular.
              </p>
            </div>
            
            <div className="bg-[#9BD0D2]/10 p-8 rounded-xl text-center hover:shadow-md transition">
              <div className="bg-[#9BD0D2]/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-[#A9683D]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#A9683D]" style={{fontFamily: "'Ws Paradose', serif"}}>Regeneração Natural</h3>
              <p className="text-gray-600" style={{fontFamily: "'Zap', sans-serif"}}>
                Ingredientes orgânicos selecionados que estimulam a capacidade natural do corpo de se regenerar e fortalecer.
              </p>
            </div>
            
            <div className="bg-[#A9683D]/10 p-8 rounded-xl text-center hover:shadow-md transition">
              <div className="bg-[#A9683D]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-[#A9683D]" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#A9683D]" style={{fontFamily: "'Ws Paradose', serif"}}>Vitalidade Duradoura</h3>
              <p className="text-gray-600" style={{fontFamily: "'Zap', sans-serif"}}>
                Aumente sua energia e resistência com nutrientes que equilibram seu corpo e promovem vitalidade contínua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Ingredients */}
      <section id="ingredientes" className="py-16 md:py-24 bg-[#C2F7BC]/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" 
                alt="Ingredientes Naturais" 
                className="rounded-lg shadow-lg border-4 border-white"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full border-2 border-[#9BD0D2]/30 -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border-2 border-[#C2F7BC]/30 -z-10"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#A9683D] italic" style={{fontFamily: "'Ws Paradose', serif"}}>
                Ingredientes Puros da Natureza
              </h2>
              <p className="text-gray-600 text-lg mb-8" style={{fontFamily: "'Zap', sans-serif"}}>
                Nossa seleção rigorosa garante que apenas os ingredientes orgânicos mais puros e potentes sejam incluídos em cada cápsula Juvelina.
              </p>

              <div className="space-y-6" style={{fontFamily: "'Zap', sans-serif"}}>
                <div className="flex gap-4">
                  <div className="bg-[#C2F7BC]/30 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="text-[#A9683D]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Ashwagandha Orgânica</h3>
                    <p className="text-gray-600">Adaptógeno ancestral que reduz estresse e aumenta vitalidade e equilíbrio.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-[#9BD0D2]/30 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplet className="text-[#A9683D]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Óleo de Coco MCT</h3>
                    <p className="text-gray-600">Fonte de energia rápida e duradoura que ajuda a manter o foco mental.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-[#C2F7BC]/30 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="text-[#A9683D]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Extrato de Açaí</h3>
                    <p className="text-gray-600">Superalimento amazônico rico em antioxidantes que combatem o envelhecimento celular.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-[#9BD0D2]/30 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplet className="text-[#A9683D]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Minerais Iônicos</h3>
                    <p className="text-gray-600">Complexo mineral de alta absorção que revitaliza todas as funções corporais.</p>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#A9683D] italic" style={{fontFamily: "'Ws Paradose', serif"}}>
              Histórias de Renovação
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{fontFamily: "'Zap', sans-serif"}}>
              Descubra como Juvelina Organics tem transformado a vida de milhares de pessoas através da renovação natural.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#C2F7BC]/5 p-8 rounded-lg border border-[#C2F7BC]/30 hover:shadow-md transition">
              <div className="flex text-[#A9683D] mb-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-gray-700 mb-6" style={{fontFamily: "'Zap', sans-serif"}}>
                "Juvelina transformou minha saúde! Após 30 dias de uso, minha energia aumentou consideravelmente e sinto-me renovada como não me sentia há anos."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#9BD0D2]/30 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" 
                    alt="Cliente" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div style={{fontFamily: "'Zap', sans-serif"}}>
                  <h4 className="font-bold">Mariana Silva</h4>
                  <p className="text-sm text-gray-500">São Paulo, SP</p>
                </div>
              </div>
            </div>

            <div className="bg-[#9BD0D2]/5 p-8 rounded-lg border border-[#9BD0D2]/30 hover:shadow-md transition">
              <div className="flex text-[#A9683D] mb-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-gray-700 mb-6" style={{fontFamily: "'Zap', sans-serif"}}>
                "Como atleta, sempre busco o melhor para meu corpo. Juvelina melhorou minha recuperação e vitalidade. Sinto que meu corpo se regenera muito mais rápido agora."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#C2F7BC]/30 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1534&q=80" 
                    alt="Cliente" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div style={{fontFamily: "'Zap', sans-serif"}}>
                  <h4 className="font-bold">Rafael Costa</h4>
                  <p className="text-sm text-gray-500">Rio de Janeiro, RJ</p>
                </div>
              </div>
            </div>

            <div className="bg-[#A9683D]/5 p-8 rounded-lg border border-[#A9683D]/20 hover:shadow-md transition">
              <div className="flex text-[#A9683D] mb-4">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-gray-700 mb-6" style={{fontFamily: "'Zap', sans-serif"}}>
                "Aos 45 anos, sentia minha energia diminuindo. Depois de usar Juvelina por 2 meses, sinto-me revigorada e minha pele está visivelmente mais jovem. É incrível!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#9BD0D2]/30 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Cliente" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div style={{fontFamily: "'Zap', sans-serif"}}>
                  <h4 className="font-bold">Carolina Mendes</h4>
                  <p className="text-sm text-gray-500">Belo Horizonte, MG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#C2F7BC]/20 to-[#9BD0D2]/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#A9683D] italic" style={{fontFamily: "'Ws Paradose', serif"}}>
              Transforme Sua Vitalidade Hoje
            </h2>
            <p className="text-gray-700 text-lg mb-8" style={{fontFamily: "'Zap', sans-serif"}}>
              Junte-se às milhares de pessoas que já descobriram o poder da renovação natural com Juvelina Organics. Oferecemos garantia de satisfação de 30 dias.
            </p>
            <div className="relative inline-block">
              <div className="absolute -top-12 right-0 rotate-12">
                <div className="bg-white rounded-full px-6 py-2 shadow-md text-[#A9683D] font-bold text-sm" style={{fontFamily: "'Ws Paradose', serif"}}>
                  30 DIAS DE GARANTIA
                </div>
              </div>
              <div className="flex justify-center gap-4 flex-col sm:flex-row" style={{fontFamily: "'Zap', sans-serif"}}>
                <button 
                  onClick={() => setShowModal(true)}
                  className="bg-[#A9683D] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition text-lg font-medium flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} />
                  Comprar Agora
                </button>
                <a 
                  href="#beneficios"
                  className="border border-[#A9683D] text-[#A9683D] px-8 py-3 rounded-full hover:bg-[#A9683D]/10 transition text-lg font-medium flex items-center justify-center"
                >
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre o Juvelina e como ele pode beneficiar sua saúde.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 py-4">
                <button 
                  className="flex justify-between items-center w-full text-left font-medium text-lg py-2"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                  {activeAccordion === index ? 
                    <ChevronUp size={20} className="text-emerald-500" /> : 
                    <ChevronDown size={20} className="text-gray-500" />
                  }
                </button>
                {activeAccordion === index && (
                  <div className="py-3 text-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-emerald-500" />
                <span className="font-bold text-xl">Juvelina</span>
              </div>
              <p className="text-gray-600 mb-4">
                Suplementos naturais de alta qualidade para uma vida mais saudável e equilibrada.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-500 hover:text-emerald-500 transition">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-emerald-500 transition">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 transition">Sobre Nós</a></li>
                <li><a href="#beneficios" className="text-gray-600 hover:text-emerald-500 transition">Benefícios</a></li>
                <li><a href="#ingredientes" className="text-gray-600 hover:text-emerald-500 transition">Ingredientes</a></li>
                <li><a href="#depoimentos" className="text-gray-600 hover:text-emerald-500 transition">Depoimentos</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Ajuda & Suporte</h3>
              <ul className="space-y-2">
                <li><a href="#faq" className="text-gray-600 hover:text-emerald-500 transition">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 transition">Política de Envio</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 transition">Política de Reembolso</a></li>
                <li><a href="#" className="text-gray-600 hover:text-emerald-500 transition">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-600">
                <li>contato@juvelina.com.br</li>
                <li>+55 (11) 3456-7890</li>
                <li>São Paulo, SP - Brasil</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Juvelina. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Purchase Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Comprar Juvelina</h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1607006333439-505849ef4f76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Juvelina Product" 
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-lg">Juvelina - Suplemento Natural</h4>
                <p className="text-gray-600">Frasco com 60 cápsulas (30 dias de tratamento)</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="font-bold text-2xl text-emerald-600">R$ 149,90</div>
                  <div className="text-sm text-gray-500 line-through">R$ 199,90</div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mb-6">
                <h4 className="font-bold mb-4">Escolha sua opção:</h4>
                
                <div className="space-y-3">
                  <div className="border border-emerald-500 rounded-lg p-4 bg-emerald-50">
                    <div className="flex gap-3">
                      <input 
                        type="radio" 
                        id="option1" 
                        name="purchase_option" 
                        className="mt-1" 
                        defaultChecked 
                      />
                      <div className="flex-1">
                        <label htmlFor="option1" className="font-bold flex justify-between">
                          <span>Compra única</span>
                          <span>R$ 149,90</span>
                        </label>
                        <p className="text-sm text-gray-600">Frasco único com 60 cápsulas</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-emerald-300 transition">
                    <div className="flex gap-3">
                      <input 
                        type="radio" 
                        id="option2" 
                        name="purchase_option"
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <label htmlFor="option2" className="font-bold flex justify-between">
                          <span>Assinatura mensal</span>
                          <span>R$ 129,90</span>
                        </label>
                        <p className="text-sm text-gray-600">Economize 13% com entrega mensal automática</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-emerald-300 transition">
                    <div className="flex gap-3">
                      <input 
                        type="radio" 
                        id="option3" 
                        name="purchase_option" 
                        className="mt-1"
                      />
                      <div className="flex-1">
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
                <button className="w-full bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition font-medium flex items-center justify-center gap-2">
                  <ShoppingCart size={18} />
                  Adicionar ao Carrinho
                </button>
                
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Shield size={16} className="text-emerald-500" />
                    <span>Pagamento Seguro</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={16} className="text-emerald-500" />
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