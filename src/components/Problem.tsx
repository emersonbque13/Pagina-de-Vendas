import { motion } from "motion/react";
import { PROBLEM_DATA } from "../data";
import { Coffee, Baby, Dog, Sparkles, PenTool, Users, AlertCircle } from "lucide-react";

export default function Problem() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Coffee":
        return <Coffee className="w-6 h-6 text-brand-red" />;
      case "Baby":
        return <Baby className="w-6 h-6 text-brand-red" />;
      case "Dog":
        return <Dog className="w-6 h-6 text-brand-red" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-brand-red" />;
      case "PenTool":
        return <PenTool className="w-6 h-6 text-brand-red" />;
      case "Users":
        return <Users className="w-6 h-6 text-brand-red" />;
      default:
        return <AlertCircle className="w-6 h-6 text-brand-red" />;
    }
  };

  return (
    <section className="bg-brand-cream/30 py-16 md:py-24 border-y border-brand-cream" id="problema">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-brand-red uppercase tracking-widest bg-brand-red/5 px-3 py-1 rounded-full border border-brand-red/10">
            A REALIDADE DO LAR
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mt-4 mb-4">
            {PROBLEM_DATA.sectionTitle}
          </h2>
          <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed">
            {PROBLEM_DATA.sectionSubtitle}
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="problems-grid">
          {PROBLEM_DATA.problems.map((prob, idx) => (
            <motion.div
              key={prob.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 hover:border-brand-red/20 hover:shadow-lg hover:shadow-slate-100/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              id={`problem-card-${prob.id}`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-red/5 flex items-center justify-center border border-brand-red/10 mb-6">
                  {getIcon(prob.iconName)}
                </div>
                <h3 className="font-display font-bold text-brand-navy text-lg mb-3">
                  {prob.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {prob.description}
                </p>
              </div>
              
              {/* Subtle indicator of danger level but no solution */}
              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-medium text-slate-400">
                <span>Risco de Mancha Permanente</span>
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empathy Bottom Banner */}
        <div 
          className="mt-16 p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 flex flex-col md:flex-row gap-6 items-center justify-between"
          id="problem-empathy-banner"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20">
              <AlertCircle className="w-6 h-6 text-brand-gold" />
            </div>
            <div>
              <h4 className="font-semibold text-brand-navy text-base mb-1">Você se identificou com alguma dessas situações?</h4>
              <p className="text-sm text-slate-500 font-light">Quase 95% dos donos de sofás tentam limpar derramamentos de forma errada e acabam piorando o tecido.</p>
            </div>
          </div>
          <p className="text-xs font-mono bg-brand-gold/10 text-brand-gold border border-brand-gold/20 px-3 py-1 rounded-md tracking-tight uppercase whitespace-nowrap">
            Não tome decisões por impulso
          </p>
        </div>

      </div>
    </section>
  );
}
