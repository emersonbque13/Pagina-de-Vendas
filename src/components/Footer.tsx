import { FOOTER_DATA } from "../data";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300 py-16 border-t border-brand-gold/20" id="app-footer">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Brand/logo column */}
          <div className="md:col-span-6 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center border border-brand-red/20">
                <Shield className="w-4.5 h-4.5 text-brand-red" />
              </div>
              <span className="font-display font-semibold text-white tracking-tight text-lg">
                SOS<span className="text-brand-gold font-normal"> Manchas</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 font-light leading-relaxed max-w-sm">
              {FOOTER_DATA.tagline}
            </p>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-display font-semibold text-slate-200 text-sm uppercase tracking-wider mb-4">Informações</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#problema" className="hover:text-brand-gold transition-colors">O Problema</a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-brand-gold transition-colors">Benefícios</a>
              </li>
              <li>
                <a href="#conteudo" className="hover:text-brand-gold transition-colors">O que há dentro</a>
              </li>
              <li>
                <a href="#curiosidades" className="hover:text-brand-gold transition-colors">Curiosidades</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 text-left">
            <h4 className="font-display font-semibold text-slate-200 text-sm uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#garantia" className="hover:text-brand-gold transition-colors">Garantia de 7 Dias</a>
              </li>
              <li>
                <span className="text-slate-500 cursor-default">Termos de Uso (Exemplo)</span>
              </li>
              <li>
                <span className="text-slate-500 cursor-default">Políticas de Privacidade (Exemplo)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom footer row - disclaimer and copyrights */}
        <div className="pt-12 text-xs font-light text-slate-400 space-y-6 text-left">
          <p className="leading-relaxed leading-5">
            {FOOTER_DATA.disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
            <span>{FOOTER_DATA.copyright}</span>
            <span className="font-mono tracking-tight text-[10px] uppercase text-brand-gold/80 bg-brand-gold/5 px-2.5 py-0.5 rounded border border-brand-gold/20">
              Sincronizado com Paleta da Capa
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
