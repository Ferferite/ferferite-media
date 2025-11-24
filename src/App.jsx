import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  MessageCircle, 
  TrendingUp, 
  Users, 
  Zap, 
  CheckCircle, 
  XCircle, 
  Bot, 
  ArrowRight, 
  BarChart3, 
  ShieldCheck,
  Cpu,
  Menu,
  X,
  Play,
  ShoppingCart,
  Clock,
  ThumbsUp,
  Share2,
  Megaphone
} from 'lucide-react';

// --- Custom CSS for Liquid Glass Animations & Backgrounds ---
const customStyles = `
  /* --- SMOOTH SCROLL & GLOBAL SETTINGS --- */
  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
  
  body {
    overflow-x: hidden;
    width: 100%;
    position: relative;
  }

  /* Fix pentru scroll sacadat: optimizare GPU pentru animații */
  @keyframes drift {
    0% { transform: translate3d(0px, 0px, 0) scale(1); }
    33% { transform: translate3d(30px, -50px, 0) scale(1.1); }
    66% { transform: translate3d(-20px, 20px, 0) scale(0.9); }
    100% { transform: translate3d(0px, 0px, 0) scale(1); }
  }
  
  @keyframes liquid-shine {
    0% { background-position: 200% center; }
    100% { background-position: -200% center; }
  }

  .liquid-bg-blob {
    position: absolute;
    filter: blur(80px);
    opacity: 0.6;
    animation: drift 10s infinite ease-in-out;
    z-index: 0;
    will-change: transform; /* Optimizare crucială pentru performanță scroll */
    transform: translate3d(0,0,0);
  }

  /* --- VISION PRO / LIQUID GLASS STYLE --- */
  .glass-card {
    /* Translucent Base */
    background: linear-gradient(
      135deg, 
      rgba(255, 255, 255, 0.15) 0%, 
      rgba(255, 255, 255, 0.05) 100%
    );
    
    /* 30px Gaussian Blur + Refraction Simulation */
    backdrop-filter: blur(30px) saturate(200%);
    -webkit-backdrop-filter: blur(30px) saturate(200%);

    /* Cold, Futuristic Borders (Glowing Edges) */
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    /* Depth & Soft Reflections */
    box-shadow: 
      0 8px 32px 0 rgba(0, 0, 0, 0.3), 
      inset 0 0 0 1px rgba(255, 255, 255, 0.05), 
      inset 0 0 20px rgba(255, 255, 255, 0.1); 

    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .glass-card:hover {
    background: linear-gradient(
      135deg, 
      rgba(255, 255, 255, 0.25) 0%, 
      rgba(255, 255, 255, 0.1) 100%
    );
    box-shadow: 
      0 15px 45px 0 rgba(0, 0, 0, 0.4),
      inset 0 0 0 1px rgba(255, 255, 255, 0.2),
      inset 0 0 30px rgba(255, 255, 255, 0.15);
    transform: translateY(-4px) scale(1.01);
    border-top: 1px solid rgba(255, 255, 255, 0.6);
  }
  
  .glass-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    pointer-events: none;
    opacity: 0.6;
  }

  .text-liquid-gradient {
    background: linear-gradient(90deg, #a5b4fc, #ffffff, #6366f1);
    background-size: 200% auto;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    animation: liquid-shine 4s linear infinite;
  }
  
  .typing-cursor::after {
    content: '|';
    animation: blink 1s step-start infinite;
  }

  @keyframes blink {
    50% { opacity: 0; }
  }
  
  /* Animation for fake scarcity pulse */
  @keyframes pulse-red {
    0%, 100% { background-color: rgba(239, 68, 68, 0.1); border-color: rgba(239, 68, 68, 0.5); }
    50% { background-color: rgba(239, 68, 68, 0.3); border-color: rgba(239, 68, 68, 1); }
  }
  
  .animate-pulse-red {
    animation: pulse-red 2s infinite;
  }
`;

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'py-2' : 'py-6'}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
        <div className={`glass-card rounded-full px-6 py-3 flex justify-between items-center transition-colors duration-500 ${isScrolled ? 'bg-black/60' : ''}`}>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
              <span className="font-bold text-white text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-white tracking-wide">FERFERITE<span className="text-indigo-400 font-light">MEDIA</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[
              { name: 'Servicii', id: 'servicii' },
              { name: 'AI Agents', id: 'ai-agents' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button 
                key={item.name} 
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-gray-300 hover:text-white transition-colors font-medium tracking-wide"
              >
                {item.name}
              </button>
            ))}
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-indigo-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Audit Gratuit
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-24 left-0 w-full px-4 md:hidden z-50">
          <div className="glass-card rounded-2xl p-4 flex flex-col gap-4 backdrop-blur-xl">
            {[
              { name: 'Servicii', id: 'servicii' },
              { name: 'AI Agents', id: 'ai-agents' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button 
                key={item.name} 
                onClick={() => scrollToSection(item.id)}
                className="text-gray-200 py-3 border-b border-white/10 text-center hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.name}
              </button>
            ))}
             <button className="bg-indigo-600 text-white w-full py-3 rounded-xl font-bold mt-2">
              Audit Gratuit
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const words = ["Optimizează CRO", "Scade Neridicările", "Automatizează Fluxuri", "Creează Reclame Virale", "Implementează AI"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseDuration = 2000;

    const handleTyping = () => {
      const fullText = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Liquid Background Elements - Optimized for Performance */}
      <div className="liquid-bg-blob w-[500px] h-[500px] bg-indigo-600 rounded-full top-[-100px] left-[-100px] mix-blend-screen"></div>
      <div className="liquid-bg-blob w-[400px] h-[400px] bg-purple-600 rounded-full bottom-[10%] right-[-50px] mix-blend-screen animation-delay-2000"></div>
      <div className="liquid-bg-blob w-[300px] h-[300px] bg-blue-500 rounded-full top-[40%] left-[30%] mix-blend-screen animation-delay-4000"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-xs uppercase tracking-widest text-gray-300 font-semibold">E-commerce Intelligence Agency</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Noi nu doar vindem, <br/>
          <span className="block h-[1.2em] md:inline-block">
             <span className="text-liquid-gradient typing-cursor">
              {currentText}
            </span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformăm magazinul tău online într-o mașinărie automată de profit. 
          De la managementul echipei prin SOP-uri riguroase, la Agenți AI care lucrează 24/7.
          <span className="block mt-4 text-white font-semibold italic">"Cel mai bun lucru care s-a întâmplat magazinului tău."</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 rounded-full bg-white text-black font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]">
            <span className="relative z-10 flex items-center gap-2">
              Începe Transformarea <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
            </span>
          </button>
          <button className="px-8 py-4 rounded-full glass-card text-white font-bold hover:bg-white/10 transition-all">
            Vezi Portofoliul
          </button>
        </div>
      </div>
    </section>
  );
};

// --- Interactive Service Demos ---

const ServiceDemo = ({ type }) => {
  const [step, setStep] = useState(0);

  // Simulation Loops
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 3000); 
    return () => clearInterval(interval);
  }, [type]);

  // --- 1. CRO: Product Page Only ---
  if (type === 'cro') {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-2">
        <div className="w-full max-w-sm glass-card bg-white/5 rounded-xl p-4 border border-white/10 animate-fade-in">
          {/* Header Fake */}
          <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
            <div className="h-2 w-16 bg-gray-500 rounded"></div>
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-gray-600"></div>
              <div className="w-4 h-4 rounded-full bg-gray-600"></div>
            </div>
          </div>
          
          <div className="flex gap-4 mb-4">
            {/* Product Image Placeholder */}
            <div className="w-1/3 bg-gray-700 rounded-lg aspect-square flex items-center justify-center text-xs text-gray-500">IMG</div>
            
            {/* Product Details */}
            <div className="w-2/3 flex flex-col justify-between">
              <div>
                <div className="h-3 w-3/4 bg-gray-300 rounded mb-2"></div>
                <div className="h-2 w-full bg-gray-600 rounded mb-1"></div>
                <div className="h-2 w-2/3 bg-gray-600 rounded"></div>
              </div>
              <div className="mt-2">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold text-white">149 Lei</span>
                    <span className="text-xs text-gray-400 line-through">250 Lei</span>
                </div>
              </div>
            </div>
          </div>

          {/* FAKE SCARCITY ELEMENT - Constant Pulse */}
          <div className="mb-3 animate-pulse-red border border-red-500/50 bg-red-500/10 rounded-lg p-2 flex items-center gap-2">
              <Clock size={16} className="text-red-400" />
              <div className="text-xs text-red-200 font-bold">
                ATENȚIE: Doar 2 bucăți rămase la acest preț!
              </div>
          </div>

          {/* High Performance Copy Snippet */}
          <div className="mb-3 p-2 bg-green-500/10 rounded border border-green-500/20">
              <div className="flex items-center gap-1 mb-1">
                <Zap size={12} className="text-green-400" />
                <span className="text-[10px] text-green-300 uppercase font-bold">Viteză Încărcare: 0.4s</span>
              </div>
              <p className="text-[10px] text-gray-300 italic">"Descriere rescrisă pentru impact emoțional maxim."</p>
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-[0_0_15px_rgba(79,70,229,0.5)]">
              <ShoppingCart size={16} /> Comandă Acum
          </button>
        </div>
      </div>
    );
  }

  // --- 2. ADS: Facebook Feed Only ---
  if (type === 'ads') {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-2">
        <div className="w-full max-w-sm glass-card bg-[#18191a] rounded-xl p-0 overflow-hidden border border-white/10 animate-fade-in">
          {/* FB Header */}
          <div className="p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-xs">F</div>
            <div>
              <div className="text-xs font-bold text-gray-200">Magazinul Tău</div>
              <div className="text-[10px] text-gray-500">Sponsored · <span className="text-blue-400">Like Page</span></div>
            </div>
          </div>
          
          {/* Copy Ad */}
          <div className="px-3 pb-2 text-xs text-gray-300">
            <p>🔥 Oprește-te din scroll! Soluția pe care o căutai este aici. Stoc limitat!</p>
          </div>

          {/* Video Placeholder */}
          <div className="w-full h-32 bg-gray-800 relative flex items-center justify-center group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className={`w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/30 transition-all duration-300 ${step % 2 === 0 ? 'scale-100' : 'scale-110 bg-red-500/80 border-red-300'}`}>
              <Play size={16} className="ml-1 text-white" fill="white" />
            </div>
            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-1 rounded">0:15</div>
          </div>

          {/* Footer Action */}
          <div className="bg-[#242526] p-2 flex justify-between items-center">
            <div className="text-[10px] text-gray-400">WWW.MAGAZINULTAU.RO</div>
            <button className="bg-gray-700 hover:bg-gray-600 text-xs px-3 py-1 text-white font-bold rounded">Shop Now</button>
          </div>
          
          {/* Social Actions */}
          <div className="px-3 py-2 flex justify-between border-t border-gray-700 text-gray-400">
            <div className="flex gap-4 text-xs font-bold">
              <span className={`flex items-center gap-1 transition-colors ${step % 4 === 0 ? 'text-blue-500' : ''}`}><ThumbsUp size={12}/> Like</span>
              <span className="flex items-center gap-1"><MessageCircle size={12}/> Comment</span>
              <span className="flex items-center gap-1"><Share2 size={12}/> Share</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'ai-call') {
    return (
      <div className="flex flex-col gap-4 h-full justify-center">
        <div className={`p-3 rounded-xl transition-all duration-500 flex items-center gap-3 border ${step >= 0 ? 'glass-card bg-white/5 border-green-500/50' : 'border-transparent opacity-30'}`}>
          <Bot className="text-green-400" size={20} />
          <div className="text-xs text-gray-300">
            <span className="block font-bold text-white">AI Agent</span>
            Detectare coș abandonat (Draft)
          </div>
        </div>
        <div className={`p-3 rounded-xl transition-all duration-500 flex items-center gap-3 border ${step >= 1 ? 'glass-card bg-white/5 border-indigo-500/50' : 'border-transparent opacity-30'}`}>
          <Phone className="text-indigo-400" size={20} />
          <div className="text-xs text-gray-300">
            <span className="block font-bold text-white">Apelare Client</span>
            "Bună ziua, dorim confirmarea comenzii..."
          </div>
        </div>
        <div className={`p-3 rounded-xl transition-all duration-500 flex items-center gap-3 border ${step >= 2 ? 'glass-card bg-white/5 border-blue-500/50' : 'border-transparent opacity-30'}`}>
          <TrendingUp className="text-blue-400" size={20} />
          <div className="text-xs text-gray-300">
            <span className="block font-bold text-white">Completare Date</span>
            AI-ul completează adresa lipsă.
          </div>
        </div>
        <div className={`p-3 rounded-xl transition-all duration-500 flex items-center gap-3 border ${step >= 3 ? 'glass-card bg-green-500/20 border-green-400' : 'border-transparent opacity-30'}`}>
          <CheckCircle className="text-green-400" size={20} />
          <div className="text-xs text-gray-300">
            <span className="block font-bold text-white">SUCCESS</span>
            Comandă Confirmată & Livrată
          </div>
        </div>
      </div>
    );
  }

  if (type === 'social-moderation') {
    return (
      <div className="relative h-64 w-full bg-black/20 rounded-xl p-4 overflow-hidden border border-white/5">
        {/* Header fake FB */}
        <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
          <div className="w-6 h-6 rounded-full bg-blue-600"></div>
          <div className="h-2 w-20 bg-gray-600 rounded"></div>
        </div>
        
        {/* Positive Comment */}
        <div className="mb-4 animate-pulse">
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-500"></div>
            <div className="glass-card p-2 rounded-lg rounded-tl-none text-xs text-gray-300 w-3/4">
              "Super produse! Recomand!"
            </div>
          </div>
          {step >= 1 && (
            <div className="flex gap-2 mt-2 ml-10">
               <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center"><Bot size={12}/></div>
               <div className="bg-indigo-900/50 border border-indigo-500/30 p-2 rounded-lg text-[10px] text-gray-200 w-3/4 animate-fade-in">
                 Mulțumim! Vă oferim 5% reducere la următoarea comandă.
               </div>
            </div>
          )}
        </div>

        {/* Negative Comment - Deletion animation */}
        <div className={`transition-all duration-700 ${step >= 2 && step < 4 ? 'opacity-0 translate-x-10' : 'opacity-100'}`}>
          <div className="flex gap-2">
             <div className="w-8 h-8 rounded-full bg-red-900"></div>
             <div className="bg-red-900/20 border border-red-500/30 p-2 rounded-lg rounded-tl-none text-xs text-red-200 w-3/4">
               "Nu a ajuns comanda! 😡" (SPAM/False)
             </div>
          </div>
           {step >= 2 && step < 4 && (
             <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm text-red-500 font-bold">
               DELETED BY AI
             </div>
           )}
        </div>
      </div>
    );
  }

  return null;
};

const Services = () => {
  const [activeTab, setActiveTab] = useState('cro');

  const tabs = [
    { 
      id: 'ai', 
      label: 'AI Agents & Call Center', 
      icon: Bot, 
      title: 'Scădem Neridicările Automat', 
      desc: 'Agentul nostru AI sună clienții pentru confirmare, recuperează coșurile abandonate și completează datele lipsă. Fără pauze, fără erori umane.', 
      demo: 'ai-call' 
    },
    { 
      id: 'cro', 
      label: 'Optimizare CRO', 
      icon: BarChart3, 
      title: 'Conversii Maximale & Scalare', 
      desc: 'Introducem elemente custom de "Scarcity" și "Urgency" direct în pagina de produs. Optimizăm codul pentru a scădea viteza de încărcare și rescriem descrierile produselor pentru a vinde emoția, nu doar specificațiile.', 
      demo: 'cro' 
    },
    { 
      id: 'ads', 
      label: 'Reclame Paid Media', 
      icon: Megaphone, 
      title: 'Reclame care Opresc Scroll-ul', 
      desc: 'Aducem traficul prin reclame video (Facebook/TikTok) virale care convertesc rece. Ne ocupăm de scenarii, editare video și setup-ul campaniilor pentru un ROAS maxim.', 
      demo: 'ads' 
    },
    { 
      id: 'mgmt', 
      label: 'Management & Social', 
      icon: Users, 
      title: 'Moderare Socială 24/7', 
      desc: 'Ștergem comentariile negative malițioase instant și răspundem la cele pozitive pentru a crește engagement-ul. Workflow-uri Notion & Slack integrate.', 
      demo: 'social-moderation' 
    },
  ];

  const activeContent = tabs.find(t => t.id === activeTab);

  return (
    <section id="servicii" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Servicii Premium <span className="text-indigo-400">All-In-One</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Nu suntem doar o agenție, suntem partenerul tău operațional.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`glass-card p-6 text-left rounded-2xl group transition-all duration-300 ${activeTab === tab.id ? 'border-indigo-500 bg-indigo-500/10' : 'border-white/10 hover:border-white/30'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${activeTab === tab.id ? 'bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'bg-gray-800 text-gray-400'}`}>
                    <tab.icon size={24} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${activeTab === tab.id ? 'text-white' : 'text-gray-300'}`}>{tab.label}</h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Click pentru detalii</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Content & Demo Area */}
          <div className="lg:col-span-8 glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden border-t border-l border-white/20">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center h-full">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">{activeContent.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  {activeContent.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {['Disponibilitate 24/7', 'Reducere costuri operaționale', 'Creștere rată conversie', 'Raportare transparentă'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-400">
                      <CheckCircle size={18} className="text-green-400" /> {item}
                    </li>
                  ))}
                </ul>
                <button className="text-indigo-400 font-bold flex items-center gap-2 hover:text-indigo-300 transition-colors">
                  Află mai multe <ArrowRight size={18} />
                </button>
              </div>

              {/* Dynamic Demo Component */}
              <div className="relative h-[350px] w-full glass-card bg-black/40 rounded-2xl p-6 flex items-center justify-center shadow-inner">
                {activeContent.demo ? (
                  <ServiceDemo type={activeContent.demo} />
                ) : (
                   <div className="text-center">
                     <BarChart3 size={64} className="text-indigo-500 mx-auto mb-4 opacity-50" />
                     <p className="text-gray-400 text-sm">Analiză Datelor în timp real...</p>
                     <div className="mt-4 h-2 w-32 bg-gray-700 rounded-full mx-auto overflow-hidden">
                       <div className="h-full bg-indigo-500 animate-[liquid-shine_2s_linear_infinite] w-2/3"></div>
                     </div>
                   </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ComparisonSection = () => {
  return (
    <section id="ai-agents" className="py-24 relative overflow-hidden">
       {/* Background decorations */}
       <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-indigo-900/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-6">
            <Bot size={16} className="text-indigo-400" />
            <span className="text-indigo-300 text-sm font-bold uppercase">Revoluția AI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">De ce AI Agent vs Angajat Uman?</h2>
          <p className="text-xl text-gray-400">Matematica e simplă. Eficiența e maximă.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Human Card */}
          <div className="glass-card p-8 rounded-3xl border-red-500/10 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-400">Operator Uman</h3>
              <Users size={32} className="text-gray-500" />
            </div>
            <ul className="space-y-6">
              <li className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-gray-400">Program</span>
                <span className="text-white font-mono">8 ore/zi, L-V</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-gray-400">Concedii & Zile Libere</span>
                <span className="text-red-400 font-mono">DA (21+ zile)</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-gray-400">Scalabilitate</span>
                <span className="text-red-400 font-mono">Lentă & Costisitoare</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-gray-400">Erori Emoționale</span>
                <span className="text-red-400 font-mono">Frecvente</span>
              </li>
              <li className="pt-4">
                <div className="text-xs text-gray-500 mb-1">Cost Lunar Estimativ</div>
                <div className="text-3xl font-bold text-gray-300">€800 - €1200</div>
              </li>
            </ul>
          </div>

          {/* AI Card */}
          <div className="glass-card p-8 rounded-3xl border-indigo-500/50 bg-indigo-900/10 shadow-[0_0_50px_rgba(79,70,229,0.15)] transform md:-translate-y-4 relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">RECOMANDAT</div>
            
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white text-liquid-gradient">Ferferite AI Agent</h3>
              <Cpu size={32} className="text-indigo-400 animate-pulse" />
            </div>
            <ul className="space-y-6">
              <li className="flex items-center justify-between border-b border-indigo-500/20 pb-4">
                <span className="text-gray-300">Program</span>
                <span className="text-green-400 font-mono font-bold">24/7/365</span>
              </li>
              <li className="flex items-center justify-between border-b border-indigo-500/20 pb-4">
                <span className="text-gray-300">Concedii</span>
                <span className="text-green-400 font-mono font-bold">0 Zile</span>
              </li>
              <li className="flex items-center justify-between border-b border-indigo-500/20 pb-4">
                <span className="text-gray-300">Scalabilitate</span>
                <span className="text-green-400 font-mono font-bold">Instantanee</span>
              </li>
              <li className="flex items-center justify-between border-b border-indigo-500/20 pb-4">
                <span className="text-gray-300">Erori</span>
                <span className="text-green-400 font-mono font-bold">0%</span>
              </li>
              <li className="pt-4">
                <div className="text-xs text-indigo-300 mb-1">Cost Lunar</div>
                <div className="text-4xl font-bold text-white">Mult mai mic</div>
                <p className="text-xs text-gray-400 mt-1">*Se plătește performanța și volumul.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
       <div className="liquid-bg-blob w-[600px] h-[600px] bg-purple-900/40 rounded-full bottom-[-200px] left-[-200px] mix-blend-screen blur-[100px]"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="glass-card rounded-3xl p-8 md:p-16 text-center border border-white/20">
          <h2 className="text-4xl font-bold text-white mb-6">Ești gata să scalezi magazinul?</h2>
          <p className="text-gray-300 mb-10 text-lg">
            Suntem aici pentru a rezolva orice problemă prin soluții custom. 
            Programează un apel gratuit și hai să facem un plan de atac.
          </p>
          
          <form className="max-w-md mx-auto space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-2">Email-ul tău</label>
              <input type="email" placeholder="contact@magazinultau.ro" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder-gray-600 backdrop-blur-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-2">Website-ul tău</label>
              <input type="text" placeholder="www.site.ro" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder-gray-600 backdrop-blur-sm" />
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all transform hover:-translate-y-1 mt-4">
              Vreau Oferta Personalizată
            </button>
          </form>
          
          <div className="mt-8 flex justify-center gap-6 text-gray-500 text-sm">
            <span className="flex items-center gap-2"><ShieldCheck size={14}/> Date Confidențiale</span>
            <span className="flex items-center gap-2"><Zap size={14}/> Răspuns în 24h</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
              <span className="font-bold text-white text-xs">F</span>
            </div>
            <span className="text-lg font-bold text-white">FERFERITE<span className="text-indigo-400 font-light">MEDIA</span></span>
        </div>
        <p className="text-gray-500 text-sm">© 2025 Ferferite Media. Toate drepturile rezervate.</p>
        <div className="flex gap-4">
           <a href="#" className="text-gray-400 hover:text-white transition-colors"><MessageCircle size={20} /></a>
           <a href="#" className="text-gray-400 hover:text-white transition-colors"><Phone size={20} /></a>
        </div>
      </div>
    </footer>
  );
}

// --- Main App ---

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500/30 relative overflow-x-hidden">
      <style>{customStyles}</style>
      
      {/* Global ambient background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <Navbar />
      <Hero />
      <Services />
      <ComparisonSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
