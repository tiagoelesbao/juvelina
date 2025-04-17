import React, { useState } from 'react';
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
  ChevronUp
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
      <div className="bg-emerald-500 text-white py-2">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm md:text-base">
            🌿 Frete Grátis em Pedidos Acima de R$150 | Satisfação Garantida por 30 Dias 🌿
          </p>
        </div>
      </div>
      
      {/* Navigation */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-emerald-500" />
              <span className="font-bold text-xl">Juvelina</span>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8 items-center">
              <a href="#beneficios" className="text-gray-600 hover:text-emerald-500 transition font-medium">Benefícios</a>
              <a href="#ingredientes" className="text-gray-600 hover:text-emerald-500 transition font-medium">Ingredientes</a>
              <a href="#depoimentos" className="text-gray-600 hover:text-emerald-500 transition font-medium">Depoimentos</a>
              <a href="#faq" className="text-gray-600 hover:text-emerald-500 transition font-medium">FAQ</a>
              <button 
                onClick={() => setShowModal(true)}
                className="bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition flex items-center gap-2"
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
            <div className="container mx-auto px-4 flex flex-col gap-4">
              <a 
                href="#beneficios" 
                className="text-gray-600 hover:text-emerald-500 transition py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefícios
              </a>
              <a 
                href="#ingredientes" 
                className="text-gray-600 hover:text-emerald-500 transition py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ingredientes
              </a>
              <a 
                href="#depoimentos" 
                className="text-gray-600 hover:text-emerald-500 transition py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a 
                href="#faq" 
                className="text-gray-600 hover:text-emerald-500 transition py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <button 
                onClick={() => {
                  setShowModal(true);
                  setMobileMenuOpen(false);
                }}
                className="bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition flex items-center justify-center gap-2 w-full mt-2"
              >
                <ShoppingCart size={18} />
                <span>Comprar Agora</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Revitalize Seu Corpo com Ingredientes 100% Naturais
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                O suplemento diário premium que combina o poder de plantas adaptógenas, vitaminas essenciais e minerais para potencializar sua energia, imunidade e bem-estar geral.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-emerald-500" size={20} />
                  <span>100% Natural</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-emerald-500" size={20} />
                  <span>Vegano</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-emerald-500" size={20} />
                  <span>Sem Glúten</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-emerald-500" size={20} />
                  <span>Sem Conservantes</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowModal(true)}
                  className="bg-emerald-500 text-white px-8 py-3 rounded-full hover:bg-emerald-600 transition text-lg font-medium flex items-center justify-center gap-2"
                >
                  Experimente Agora
                  <ArrowRight size={20} />
                </button>
                <a 
                  href="#depoimentos"
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition text-lg font-medium flex items-center justify-center"
                >
                  Ver Depoimentos
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1607006333439-505849ef4f76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Suplemento Juvelina" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios Transformadores</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Com a fórmula exclusiva do Juvelina, você experimentará melhorias significativas em diversos aspectos da sua saúde e bem-estar.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-emerald-50 p-8 rounded-xl text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Fortalece a Imunidade</h3>
              <p className="text-gray-600">
                Combinação de vitaminas e minerais que fortalece seu sistema imunológico, ajudando seu corpo a combater infecções.
              </p>
            </div>
            
            <div className="bg-emerald-50 p-8 rounded-xl text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Aumenta a Energia</h3>
              <p className="text-gray-600">
                Revitalize seu corpo com nutrientes que melhoram os níveis de energia, combatendo a fadiga e aumentando a disposição diária.
              </p>
            </div>
            
            <div className="bg-emerald-50 p-8 rounded-xl text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-emerald-600" size={32} />
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
      <section id="ingredientes" className="py-16 md:py-24 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" 
                alt="Ingredientes Naturais" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ingredientes Premium da Natureza</h2>
              <p className="text-gray-600 text-lg mb-8">
                Cada cápsula de Juvelina contém uma combinação poderosa de ingredientes orgânicos e bioativos que trabalham em sinergia para potencializar sua saúde.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Ashwagandha</h3>
                    <p className="text-gray-600">Adaptógeno poderoso que reduz estresse e aumenta resistência física.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Vitamina D3</h3>
                    <p className="text-gray-600">Essencial para saúde óssea, imunidade e função cognitiva.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Extrato de Açaí</h3>
                    <p className="text-gray-600">Rico em antioxidantes que combatem os radicais livres e protegem as células.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="text-emerald-600" size={20} />
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

      {/* Testimonials */}
      <section id="depoimentos" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Milhares de pessoas já transformaram sua saúde e bem-estar com Juvelina. Veja o que eles estão dizendo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
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
                <div className="w-12 h-12 bg-emerald-200 rounded-full overflow-hidden">
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

            <div className="bg-gray-50 p-8 rounded-lg">
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
                <div className="w-12 h-12 bg-emerald-200 rounded-full overflow-hidden">
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

            <div className="bg-gray-50 p-8 rounded-lg">
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
                <div className="w-12 h-12 bg-emerald-200 rounded-full overflow-hidden">
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-emerald-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comece Sua Jornada de Bem-Estar Hoje</h2>
            <p className="text-gray-700 text-lg mb-8">
              Junte-se a milhares de pessoas que estão experimentando os benefícios transformadores do Juvelina. Oferecemos garantia de satisfação de 30 dias.
            </p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row">
              <button 
                onClick={() => setShowModal(true)}
                className="bg-emerald-500 text-white px-8 py-3 rounded-full hover:bg-emerald-600 transition text-lg font-medium flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Comprar Agora
              </button>
              <a 
                href="#beneficios"
                className="border border-emerald-500 text-emerald-500 px-8 py-3 rounded-full hover:bg-emerald-50 transition text-lg font-medium flex items-center justify-center"
              >
                Saiba Mais
              </a>
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