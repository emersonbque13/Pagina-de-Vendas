import { motion } from "motion/react";
import { HERO_DATA } from "../data";
import { Clock, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  // Map icon strings to Lucide components
  const getIcon = (name: string) => {
    switch (name) {
      case "Clock":
        return <Clock className="w-5 h-5 text-brand-red" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-brand-red" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-brand-red" />;
      default:
        return <Sparkles className="w-5 h-5 text-brand-red" />;
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-cream via-white to-slate-50/50 py-12 md:py-20 lg:py-24" id="hero-section">
      {/* Decorative blurry background blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-red/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute -top-12 -right-32 w-96 h-96 bg-brand-gold/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text and Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/5 text-brand-red text-xs font-semibold tracking-wide border border-brand-red/10 mb-6"
              id="hero-badge"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              {HERO_DATA.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-bold text-brand-navy tracking-tight leading-[1.15] mb-6"
              id="hero-title"
            >
              {HERO_DATA.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-8 max-w-2xl"
              id="hero-subtitle"
            >
              {HERO_DATA.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full sm:w-auto flex flex-col items-start gap-3 mb-12"
              id="hero-cta-container"
            >
              <button
                onClick={onCtaClick}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-red hover:bg-red-700 active:scale-98 text-white font-medium text-base rounded-xl shadow-lg shadow-brand-red/10 hover:shadow-xl hover:shadow-brand-red/15 transition-all duration-200 cursor-pointer"
                id="hero-cta-btn"
              >
                <span>{HERO_DATA.ctaText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-slate-400 text-xs sm:text-sm font-normal self-center sm:self-start pl-1">
                {HERO_DATA.subCtaText}
              </span>
            </motion.div>
          </div>

          {/* Sofa Image with Glassmorphic Floating Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
            id="hero-image-wrapper"
          >
            <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-square xl:aspect-4/3 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1600&q=80"
                alt="Sofá de tecido branco minimalista de alto padrão em sala elegante com almofadas"
                className="w-full h-full object-cover transform hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="eager"
                id="hero-image"
              />
              {/* Subtle inner shadow mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Glassmorphic Trust Card */}
            <div 
              className="absolute -bottom-6 -left-4 sm:left-6 max-w-[280px] sm:max-w-[320px] bg-white/80 backdrop-blur-md border border-slate-100 p-4 sm:p-5 rounded-2xl shadow-lg shadow-slate-900/5 flex items-start gap-3.5"
              id="hero-floating-card"
            >
              <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <p className="text-xs font-semibold text-brand-gold uppercase tracking-wider mb-0.5">Estofado Protegido</p>
                <p className="text-xs text-slate-600 leading-relaxed">Desenvolvido sob rigoroso respeito às fibras têxteis mais valiosas do mercado.</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Three core benefits summarized */}
        <div className="mt-20 lg:mt-24 pt-10 border-t border-slate-100" id="hero-benefits-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {HERO_DATA.threeBenefits.map((benefit, idx) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                className="flex gap-4 items-start"
                id={`hero-benefit-${benefit.id}`}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-navy/5 border border-brand-navy/10 flex items-center justify-center shrink-0">
                  {getIcon(benefit.iconName)}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-brand-navy text-base mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
