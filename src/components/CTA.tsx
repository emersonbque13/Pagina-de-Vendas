import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Sparkles, CreditCard, Check, ArrowRight, Lock } from "lucide-react";

export default function CTA() {
  // 15-minute countdown state
  const [timeLeft, setTimeLeft] = useState<number>(15 * 60);
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 15 * 60; // reset to keep the dynamic experience alive gracefully
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleCheckout = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      setIsRedirecting(false);
    }, 4000);
  };

  return (
    <section className="bg-gradient-to-b from-white to-brand-cream/40 py-20 md:py-28 text-center" id="cta-final">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Urgency countdown bar */}
        <div className="inline-flex items-center gap-3 bg-brand-red/5 border border-brand-red/10 text-brand-red text-xs sm:text-sm font-semibold px-4.5 py-2.5 rounded-full mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-ping shrink-0" />
          <span>PROMOÇÃO DE LANÇAMENTO EXPIRA EM:</span>
          <span className="font-mono bg-white text-brand-red px-2.5 py-0.5 rounded border border-brand-red/10 shadow-sm font-bold tracking-wider">
            {formatTime(timeLeft)}
          </span>
        </div>

        {/* Headlines */}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy tracking-tight leading-tight mb-4" id="cta-title">
          Recupere a tranquilidade e proteja seu sofá hoje mesmo
        </h2>
        
        <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10" id="cta-subtitle">
          Tenha em mãos o guia definitivo de resgate de tecidos. O conhecimento que evita erros caros e preserva a integridade do seu móvel por custo zero a cada pequeno acidente.
        </p>

        {/* Premium Pricing & Purchase Box */}
        <div 
          className="bg-white border border-slate-100 p-8 sm:p-12 rounded-3xl shadow-xl shadow-slate-100/50 max-w-lg mx-auto mb-12 relative overflow-hidden"
          id="cta-price-card"
        >
          {/* Subtle top brand seal line */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-brand-gold" />

          <p className="text-xs font-mono font-bold text-slate-400 tracking-widest uppercase mb-1">OFERTA DE BOAS-VINDAS</p>
          <h3 className="font-display font-bold text-brand-navy text-xl sm:text-2xl tracking-tight mb-6">Manual SOS Manchas no Sofá</h3>

          {/* Pricing Row */}
          <div className="flex items-center justify-center gap-3.5 mb-2">
            <span className="text-slate-400 line-through text-base sm:text-lg">De R$ 97,00</span>
            <span className="text-brand-red text-3xl sm:text-4xl font-black font-display">Por R$ 19,90</span>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm font-medium mb-8">Pagamento único • Sem assinaturas • Acesso vitalício</p>

          {/* Core high-impact features included list */}
          <div className="text-left space-y-3.5 mb-8 max-w-xs mx-auto text-xs sm:text-sm font-medium text-slate-700">
            <div className="flex gap-2.5 items-center">
              <Check className="w-4 h-4 text-brand-gold shrink-0" />
              <span>PDF Interativo Completo</span>
            </div>
            <div className="flex gap-2.5 items-center">
              <Check className="w-4 h-4 text-brand-gold shrink-0" />
              <span>Protocolo de Salvamento 5 min</span>
            </div>
            <div className="flex gap-2.5 items-center">
              <Check className="w-4 h-4 text-brand-gold shrink-0" />
              <span>Mais de 50 Manchas Mapeadas</span>
            </div>
            <div className="flex gap-2.5 items-center">
              <Check className="w-4 h-4 text-brand-gold shrink-0" />
              <span>Garantia de Ferro de 7 Dias</span>
            </div>
          </div>

          {/* Main Checkout Button */}
          <button
            onClick={handleCheckout}
            disabled={isRedirecting}
            className={`group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-red hover:bg-red-700 active:scale-98 text-white font-semibold text-base rounded-xl transition-all duration-200 cursor-pointer mb-6 disabled:opacity-80 ${!isRedirecting ? 'animate-fluorescent-pulse' : ''}`}
            id="cta-purchase-btn"
          >
            {isRedirecting ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                Redirecionando para checkout seguro...
              </span>
            ) : (
              <>
                <span>QUERO MEU MANUAL SOS AGORA</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          {/* Checkout Info feedback overlay/hint */}
          {isRedirecting && (
            <motion.p 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-brand-gold font-medium bg-brand-gold/10 p-2.5 rounded-lg mb-4 text-center"
            >
              🔒 Abrindo gateway criptografado Hotmart com preço promocional de R$ 19,90!
            </motion.p>
          )}

          {/* Security details row */}
          <div className="flex items-center justify-center gap-2 text-[11px] font-mono font-medium text-slate-400">
            <Lock className="w-3.5 h-3.5 text-brand-gold" />
            <span>AMBIENTE DE PAGAMENTO 100% CRIPTOGRAFADO</span>
          </div>
        </div>

        {/* Badges list */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400/80" id="cta-badges">
          <div className="flex items-center gap-2 text-xs font-medium">
            <ShieldCheck className="w-5 h-5 text-brand-gold" />
            <span>Compra Segura</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium">
            <CreditCard className="w-5 h-5 text-brand-gold" />
            <span>Acesso Instantâneo</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium">
            <Sparkles className="w-5 h-5 text-brand-gold" />
            <span>Fichas Interativas</span>
          </div>
        </div>

      </div>
    </section>
  );
}
