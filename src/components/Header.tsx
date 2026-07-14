import { motion } from "motion/react";
import { Shield, Sparkles } from "lucide-react";

interface HeaderProps {
  onCtaClick: () => void;
}

export default function Header({ onCtaClick }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-slate-100"
      id="app-header"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          id="header-brand"
        >
          <div className="w-8 h-8 rounded-lg bg-brand-red/5 flex items-center justify-center border border-brand-red/20">
            <Shield className="w-4.5 h-4.5 text-brand-red" />
          </div>
          <span className="font-display font-semibold text-brand-navy tracking-tight text-base sm:text-lg">
            SOS<span className="text-brand-red font-bold"> Manchas</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600" id="header-nav">
          <button 
            onClick={() => scrollToSection("problema")} 
            className="hover:text-brand-red transition-colors cursor-pointer"
            id="nav-link-problem"
          >
            O Problema
          </button>
          <button 
            onClick={() => scrollToSection("beneficios")} 
            className="hover:text-brand-red transition-colors cursor-pointer"
            id="nav-link-benefits"
          >
            Benefícios
          </button>
          <button 
            onClick={() => scrollToSection("conteudo")} 
            className="hover:text-brand-red transition-colors cursor-pointer"
            id="nav-link-content"
          >
            O que há dentro
          </button>
          <button 
            onClick={() => scrollToSection("curiosidades")} 
            className="hover:text-brand-red transition-colors cursor-pointer"
            id="nav-link-curiosities"
          >
            Curiosidades
          </button>
          <button 
            onClick={() => scrollToSection("faq")} 
            className="hover:text-brand-red transition-colors cursor-pointer"
            id="nav-link-faq"
          >
            Dúvidas
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-semibold border border-brand-gold/20">
            <Sparkles className="w-3 h-3 text-brand-gold" />
            PDF Interativo
          </span>
          <button
            onClick={onCtaClick}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-brand-red hover:bg-red-700 active:scale-95 transition-all rounded-lg shadow-sm shadow-brand-red/10 cursor-pointer"
            id="header-cta-btn"
          >
            Garantir Guia
          </button>
        </div>
      </div>
    </motion.header>
  );
}
