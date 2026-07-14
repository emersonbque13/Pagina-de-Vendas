import { TESTIMONIALS_DATA } from "../data";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24" id="depoimentos">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-brand-red uppercase tracking-widest bg-brand-red/5 px-3 py-1 rounded-full border border-brand-red/10">
            EXPERIÊNCIAS DE LEITURA
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight mt-4 mb-4">
            {TESTIMONIALS_DATA.sectionTitle}
          </h2>
          <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed">
            {TESTIMONIALS_DATA.sectionSubtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="testimonials-grid">
          {TESTIMONIALS_DATA.list.map((item) => (
            <div 
              key={item.id} 
              className="bg-slate-50/50 p-6 sm:p-8 rounded-2xl border border-slate-100 flex flex-col justify-between"
              id={`testimonial-card-${item.id}`}
            >
              <div>
                {/* Rating stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed italic mb-8">
                  "{item.content}"
                </p>
              </div>

              {/* User Bio */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="text-left">
                  <h4 className="font-bold text-brand-navy text-sm sm:text-base">
                    {item.name}
                  </h4>
                  <p className="text-slate-500 text-xs font-light">
                    {item.role}
                  </p>
                  <span className="inline-block mt-1 text-[10px] font-mono font-semibold text-brand-navy bg-brand-gold/10 border border-brand-gold/20 px-2 py-0.5 rounded-md uppercase">
                    {item.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
