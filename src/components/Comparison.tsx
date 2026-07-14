import { COMPARISON_DATA } from "../data";
import { XCircle, CheckCircle2, ShieldCheck } from "lucide-react";

export default function Comparison() {
  return (
    <section className="bg-brand-cream/30 py-16 md:py-24 border-y border-brand-cream" id="comparativo">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-brand-red uppercase tracking-widest bg-brand-red/5 px-3 py-1 rounded-full border border-brand-red/10">
            A GRANDE DECISÃO
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mt-4 mb-4">
            {COMPARISON_DATA.sectionTitle}
          </h2>
          <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed">
            {COMPARISON_DATA.sectionSubtitle}
          </p>
        </div>

        {/* Side by Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto" id="comparison-grid">
          
          {/* Action Without Guide Card */}
          <div 
            className="bg-white p-6 sm:p-8 rounded-2xl border border-rose-100 shadow-sm relative overflow-hidden flex flex-col justify-between"
            id="comparison-without-card"
          >
            {/* Top red header */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-rose-400" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-full bg-rose-50 flex items-center justify-center border border-rose-100">
                  <XCircle className="w-5 h-5 text-rose-500" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base sm:text-lg">
                  {COMPARISON_DATA.withoutGuide.title}
                </h3>
              </div>

              <div className="space-y-4">
                {COMPARISON_DATA.withoutGuide.items.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start" id={`without-item-${idx}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-300 mt-2 shrink-0" />
                    <p className="text-slate-500 text-sm leading-relaxed font-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Red bottom accent */}
            <div className="mt-8 pt-4 border-t border-slate-50 text-xs font-medium text-rose-500">
              ❌ Risco alto de estragar o sofá e perder dinheiro.
            </div>
          </div>

          {/* Action With Guide Card (Premium Gold Glow) */}
          <div 
            className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-brand-gold/70 shadow-lg shadow-brand-gold/5 relative overflow-hidden flex flex-col justify-between"
            id="comparison-with-card"
          >
            {/* Top golden header */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-brand-gold" />
            
            {/* Best Choice badge */}
            <div className="absolute top-4 right-4 bg-brand-gold text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase">
              MELHOR OPÇÃO
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-full bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                </div>
                <h3 className="font-display font-bold text-brand-navy text-base sm:text-lg">
                  {COMPARISON_DATA.withGuide.title}
                </h3>
              </div>

              <div className="space-y-4">
                {COMPARISON_DATA.withGuide.items.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start" id={`with-item-${idx}`}>
                    <ShieldCheck className="w-4.5 h-4.5 text-brand-gold shrink-0 mt-0.5" />
                    <p className="text-slate-800 text-sm leading-relaxed font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Green bottom accent */}
            <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-semibold text-brand-gold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              ✅ Paz de espírito e proteção garantida.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
