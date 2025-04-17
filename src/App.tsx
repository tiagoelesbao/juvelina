import React, { useState } from 'react';
import { Star, Shield, Clock, ArrowRight, Leaf, CheckCircle2, X, Heart, Droplet, Sparkles } from 'lucide-react';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full bg-emerald-500 text-white py-2">
          <p className="text-center text-sm">
            🌿 Experimente o Futuro da Suplementação Natural 🌿
          </p>
        </div>
        
        <nav className="container mx-auto px-4 py-6 mt-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-emerald-500" />
            <span className="font-bold text-xl">Juvelina</span>
          </div>
          <div className="flex gap-4 items-center">
            <a href="#beneficios" className="text-gray-600 hover:text-emerald-500 transition">Benefícios</a>
            <a href="#depoimentos" className="text-gray-600 hover:text-emerald-500 transition">Depoimentos</a>
            <button 
              onClick={() => setShowModal(true)}
              className="bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition"
            >
              Experimente Agora
            </button>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">