import { motion } from "motion/react";
import { BENEFITS_DATA } from "../data";
import { Zap, AlertTriangle, Tag, DollarSign, Smile, Heart, Check } from "lucide-react";

export default function Benefits() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Zap":
        return <Zap className="w-5 h-5 text-brand-red" />;
      case "AlertTriangle":
        return <AlertTriangle className="w-5 h-5 text-brand-red" />;
      case "Tag":
        return <Tag className="w-5 h-5 text-brand-red" />;
      case "DollarSign":
        return <DollarSign className="w-5 h-5 text-brand-red" />;
      case "Smile":
        return <Smile className="w-5 h-5 text-brand-red" />;
      case "Heart":
        return <Heart className="w-5 h-5 text-brand-red" />;
      default:
        return <Check className="w-5 h-5 text-brand-red" />;
    }
  };

  return (
    <section className="bg-brand-cream/30 py-16 md:py-24 border-y border-brand-cream" id="beneficios">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-brand-red uppercase tracking-widest bg-brand-red/5 px-3 py-1 rounded-full border border-brand-red/10">
            A TRANSFORMAÇÃO COMPLETA
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mt-4 mb-4">
            {BENEFITS_DATA.sectionTitle}
          </h2>
          <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed">
            {BENEFITS_DATA.sectionSubtitle}
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="benefits-grid">
          {BENEFITS_DATA.list.map((benefit, idx) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100/80 hover:border-brand-gold/30 hover:shadow-xl hover:shadow-slate-100/40 hover:-translate-y-1 transition-all duration-300"
              id={`benefit-card-${benefit.id}`}
            >
              <div className="w-10 h-10 rounded-xl bg-brand-red/5 flex items-center justify-center border border-brand-red/10 mb-6">
                {getIcon(benefit.iconName)}
              </div>
              
              <h3 className="font-display font-bold text-brand-navy text-base sm:text-lg mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Floating Note to reinforce curiosity and authority */}
        <div className="mt-16 text-center" id="benefits-bottom-note">
          <p className="text-xs text-slate-400 font-mono tracking-tight uppercase inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            Método baseado na ciência têxtil internacional e conservação preventiva.
          </p>
        </div>

      </div>
    </section>
  );
}
