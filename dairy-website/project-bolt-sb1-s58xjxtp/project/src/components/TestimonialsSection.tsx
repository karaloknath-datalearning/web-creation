import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/products';

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-mid text-xs font-semibold tracking-widest uppercase mb-3">
            Testimonials
          </span>
          <h2 className="text-brand-dark text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            What Families Say
          </h2>
          <p className="text-stone-500 text-base lg:text-lg max-w-md mx-auto leading-relaxed">
            Over 5,000 households trust Matka Fresh for their daily dairy needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream-50 rounded-2xl p-6 border border-cream-200 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <Quote size={22} className="text-cream-400 mb-4" />
                <p className="text-stone-600 text-sm leading-relaxed mb-6 italic">
                  "{t.review}"
                </p>
              </div>
              <div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-cream-400 text-cream-400" />
                  ))}
                </div>
                <div className="text-brand-dark font-semibold text-sm">{t.name}</div>
                <div className="text-stone-400 text-xs mt-0.5">{t.location}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 bg-cream-50 border border-cream-200 rounded-2xl px-8 py-5">
            <div className="text-center">
              <div className="text-brand-dark text-3xl font-bold">4.9</div>
              <div className="text-stone-400 text-xs mt-0.5">Avg. Rating</div>
            </div>
            <div className="w-px h-10 bg-cream-300" />
            <div className="text-center">
              <div className="text-brand-dark text-3xl font-bold">5,200+</div>
              <div className="text-stone-400 text-xs mt-0.5">Happy Families</div>
            </div>
            <div className="w-px h-10 bg-cream-300" />
            <div className="text-center">
              <div className="text-brand-dark text-3xl font-bold">98%</div>
              <div className="text-stone-400 text-xs mt-0.5">Repeat Orders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
