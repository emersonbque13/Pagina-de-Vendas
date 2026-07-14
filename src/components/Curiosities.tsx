import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CURIOSITIES_DATA } from "../data";
import { HelpCircle, ChevronRight, AlertTriangle } from "lucide-react";

export default function Curiosities() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 md:py-24" id="curiosidades">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-brand-red uppercase tracking-widest bg-brand-red/5 px-3 py-1 rounded-full border border-brand-red/10">
            CURIOSIDADES ALARMANTES
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mt-4 mb-4">
            {CURIOSITIES_DATA.sectionTitle}
          </h2>
          <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed">
            {CURIOSITIES_DATA.sectionSubtitle}
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start" id="curiosities-layout">
          
          {/* Left selectors list */}
          <div className="lg:col-span-6 space-y-4" id="curiosities-selectors">
            {CURIOSITIES_DATA.curiosities.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className={`w-full text-left p-5 sm:p-6 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer gap-4 ${
                  activeIndex === idx
                    ? "bg-brand-red/5 border-brand-red/20 shadow-sm"
                    : "bg-slate-50/50 border-slate-100 hover:bg-slate-50 hover:border-slate-200"
                }`}
                id={`curiosity-btn-${item.id}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                    activeIndex === idx 
                      ? "bg-brand-red border-brand-red text-white" 
                      : "bg-white border-slate-100 text-slate-400"
                  }`}>
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <span className={`text-sm sm:text-base font-semibold transition-colors ${
                    activeIndex === idx ? "text-brand-navy" : "text-slate-700"
                  }`}>
                    {item.fact}
                  </span>
                </div>
                <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform shrink-0 ${
                  activeIndex === idx ? "rotate-90 text-brand-red" : ""
                }`} />
              </button>
            ))}
          </div>

          {/* Right active explanation panel */}
          <div className="lg:col-span-6 h-full" id="curiosities-explanation-panel">
            <div className="bg-slate-50/80 border border-slate-100 p-8 rounded-2xl min-h-[280px] flex flex-col justify-between relative overflow-hidden">
              {/* Background decorative watermark */}
              <div className="absolute top-4 right-4 text-brand-red/10 font-display font-black text-7xl select-none pointer-events-none">
                ?
              </div>

              <AnimatePresence mode="wait">
                {activeIndex !== null ? (
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col justify-between h-full"
                    id={`curiosity-explanation-content-${activeIndex}`}
                  >
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-gold/15 text-brand-gold text-xs font-semibold border border-brand-gold/20 mb-6">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        Aviso Importante
                      </div>
                      
                      <h3 className="font-display font-bold text-brand-navy text-lg sm:text-xl leading-snug tracking-tight mb-4">
                        {CURIOSITIES_DATA.curiosities[activeIndex].fact}
                      </h3>
                      
                      <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed">
                        {CURIOSITIES_DATA.curiosities[activeIndex].explanation}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100 text-xs font-mono text-brand-red flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                      Como evitar isso? Revelado no Módulo 1 do Manual.
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-center text-slate-400">
                    <HelpCircle className="w-10 h-10 mb-4 text-slate-300" />
                    <p className="text-sm">Selecione uma curiosidade ao lado para descobrir o motivo técnico.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
