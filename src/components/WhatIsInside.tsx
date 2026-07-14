import { motion } from "motion/react";
import { WHAT_INSIDE_DATA } from "../data";
import { BookOpen, Compass, Layers, ShieldCheck, ListChecks, HelpCircle } from "lucide-react";

export default function WhatIsInside() {
  const getIcon = (id: string) => {
    switch (id) {
      case "wi1":
        return <Compass className="w-5 h-5 text-brand-red" />;
      case "wi2":
        return <Layers className="w-5 h-5 text-brand-red" />;
      case "wi3":
        return <BookOpen className="w-5 h-5 text-brand-red" />;
      case "wi4":
        return <ShieldCheck className="w-5 h-5 text-brand-red" />;
      case "wi5":
        return <ListChecks className="w-5 h-5 text-brand-red" />;
      default:
        return <HelpCircle className="w-5 h-5 text-brand-red" />;
    }
  };

  return (
    <section className="bg-white py-16 md:py-24" id="conteudo">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-brand-red uppercase tracking-widest bg-brand-red/5 px-3 py-1 rounded-full border border-brand-red/10">
            ARQUITETURA DO CONHECIMENTO
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mt-4 mb-4">
            {WHAT_INSIDE_DATA.sectionTitle}
          </h2>
          <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed">
            {WHAT_INSIDE_DATA.sectionSubtitle}
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="inside-modules-grid">
          {WHAT_INSIDE_DATA.items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100/50 hover:bg-white hover:border-brand-red/20 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 flex flex-col justify-between"
              id={`inside-card-${item.id}`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-mono font-bold tracking-wider text-brand-navy bg-brand-gold/10 px-2.5 py-1 rounded-md border border-brand-gold/20">
                    {item.badge}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-brand-red/5 group-hover:bg-brand-red/10 flex items-center justify-center transition-colors">
                    {getIcon(item.id)}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-brand-navy text-base sm:text-lg tracking-tight mb-1 transition-colors">
                  {item.title}
                </h3>
                
                <h4 className="text-xs font-medium text-slate-400 mb-4 uppercase tracking-wider">
                  {item.subtitle}
                </h4>

                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Status micro tag */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-medium text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span>Pronto para aplicação imediata</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic bottom callout that drives high curiosity */}
        <div 
          className="mt-16 p-8 rounded-2xl bg-brand-cream border border-brand-gold/20 text-center max-w-4xl mx-auto"
          id="inside-curiosity-callout"
        >
          <span className="text-2xl">⚡</span>
          <h3 className="font-display font-bold text-brand-navy text-lg sm:text-xl tracking-tight mt-3 mb-2">
            Apenas atalhos práticos e resgates rápidos.
          </h3>
          <p className="text-slate-600 text-sm sm:text-base font-light max-w-2xl mx-auto">
            O material foi todo diagramado em fichas interativas de bolso para que você possa ler no celular no exato instante em que o copo cair, sem perder tempo folheando capítulos teóricos entediantes.
          </p>
        </div>

      </div>
    </section>
  );
}
