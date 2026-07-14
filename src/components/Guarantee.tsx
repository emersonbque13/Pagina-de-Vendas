import { GUARANTEE_DATA } from "../data";
import { ShieldCheck, CalendarRange } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="bg-white py-16 md:py-24" id="garantia">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Certificate Style Box */}
        <div 
          className="bg-brand-cream border border-brand-gold/20 rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row gap-10 md:gap-14 items-center"
          id="guarantee-box"
        >
          {/* Background decorative watermark */}
          <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-brand-gold/5 pointer-events-none" />

          {/* Guarantee Seal Graphic */}
          <div className="shrink-0 relative" id="guarantee-seal-wrapper">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-brand-gold flex flex-col items-center justify-center text-white border-4 border-white shadow-xl shadow-brand-gold/15">
              <ShieldCheck className="w-8 h-8 sm:w-11 sm:h-11 mb-1 sm:mb-2 text-white" />
              <span className="text-[9px] sm:text-[11px] font-mono tracking-widest uppercase font-bold text-center leading-none text-white">
                Garantia<br />Premium
              </span>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-brand-navy text-white font-bold text-[10px] px-2.5 py-1 rounded-full border border-white shadow-sm flex items-center gap-1">
              <CalendarRange className="w-3 h-3 text-brand-gold" />
              7 Dias
            </div>
          </div>

          {/* Copy text column */}
          <div className="flex-1 text-center md:text-left" id="guarantee-copy">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-red uppercase bg-brand-red/5 px-3 py-1 rounded-md border border-brand-red/10">
              RISCO ZERO PARA VOCÊ
            </span>
            
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight mt-4 mb-4" id="guarantee-title">
              {GUARANTEE_DATA.title}
            </h2>
            
            <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed" id="guarantee-description">
              {GUARANTEE_DATA.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 justify-center md:justify-start text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Reembolso imediato sem burocracia
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Transação 100% segura e criptografada
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
