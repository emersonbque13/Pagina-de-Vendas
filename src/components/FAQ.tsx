import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ_DATA } from "../data";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("f1");

  const toggleId = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-brand-cream/30 py-16 md:py-24 border-y border-brand-cream" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-brand-red uppercase tracking-widest bg-brand-red/5 px-3 py-1 rounded-full border border-brand-red/10">
            PERGUNTAS FREQUENTES
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mt-4 mb-4">
            Perguntas Estratégicas e Respostas Claras
          </h2>
          <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed">
            Esclareça suas principais dúvidas sobre o acesso ao material e a preservação do seu sofá sem nenhum spoiler do conteúdo interno.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4" id="faq-list">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className="bg-white rounded-xl border border-slate-100 hover:border-slate-200 transition-colors shadow-sm overflow-hidden"
                id={`faq-item-${item.id}`}
              >
                <button
                  onClick={() => toggleId(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  id={`faq-btn-${item.id}`}
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className="w-5 h-5 text-brand-red shrink-0" />
                    <span className="font-display font-semibold text-brand-navy text-sm sm:text-base leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-brand-navy" />
                    ) : (
                      <Plus className="w-4 h-4 text-brand-navy" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-0 border-t border-slate-50">
                        <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed pl-8">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
