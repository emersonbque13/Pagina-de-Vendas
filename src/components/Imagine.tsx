import { motion } from "motion/react";
import { IMAGINE_DATA } from "../data";
import { CheckCircle2, Heart } from "lucide-react";

export default function Imagine() {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden" id="imagine">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Ambiance / Sofa Peace */}
          <div className="lg:col-span-5 relative order-last lg:order-first" id="imagine-visual-wrapper">
            <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-square rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80"
                alt="Sofá creme impecável em uma sala de estar residencial europeia ensolarada"
                className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
                id="imagine-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Float badge of calm */}
            <div 
              className="absolute -top-4 -right-4 bg-brand-red text-white p-3.5 rounded-full shadow-lg flex items-center justify-center border border-white"
              id="imagine-badge"
            >
              <Heart className="w-5 h-5 fill-white" />
            </div>
          </div>

          {/* Emotional Copy Column */}
          <div className="lg:col-span-7 text-left" id="imagine-text-col">
            <span className="text-xs font-semibold text-brand-red uppercase tracking-widest bg-brand-red/5 px-3 py-1 rounded-full border border-brand-red/10">
              A NOVA EXPERIÊNCIA
            </span>
            
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight leading-tight mt-4 mb-6" id="imagine-title">
              {IMAGINE_DATA.title}
            </h2>
            
            <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed mb-8" id="imagine-description">
              {IMAGINE_DATA.description}
            </p>

            {/* Bullets List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="imagine-bullets">
              {IMAGINE_DATA.bulletPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex gap-3 items-start"
                  id={`imagine-bullet-${idx}`}
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm sm:text-base leading-snug font-medium">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
