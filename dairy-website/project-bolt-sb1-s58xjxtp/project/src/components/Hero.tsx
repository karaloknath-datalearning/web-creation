import { ArrowDown, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/75 via-brand-dark/55 to-stone-700/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="fill-cream-300 text-cream-300" />
              ))}
            </div>
            <span className="text-cream-200 text-xs tracking-widest uppercase font-medium">
              Trusted by 5,000+ Families
            </span>
          </div>

          <h1 className="text-white text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6 animate-fade-up">
            Pure Dairy.
            <br />
            <span className="text-cream-300">The Old Way.</span>
          </h1>

          <p className="text-white/75 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg animate-fade-up" style={{ animationDelay: '0.15s', opacity: 0 }}>
            Farm-fresh milk, matka dahi, handcrafted paneer and slow-churned ghee — delivered straight from our dairy to your door.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <a
              href="#products"
              className="px-7 py-3.5 bg-cream-300 hover:bg-cream-400 text-brand-dark font-semibold rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Shop Products
            </a>
            <a
              href="#story"
              className="px-7 py-3.5 border border-white/40 hover:border-white/70 text-white font-medium rounded-full text-sm transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              Our Story
            </a>
          </div>

          <div className="mt-14 flex items-center gap-8 animate-fade-up" style={{ animationDelay: '0.45s', opacity: 0 }}>
            {[
              { value: '100%', label: 'Natural' },
              { value: 'Daily', label: 'Fresh Delivery' },
              { value: 'A2', label: 'Milk Only' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-cream-300 text-2xl font-bold">{stat.value}</div>
                <div className="text-white/60 text-xs mt-0.5 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors animate-bounce"
      >
        <span className="text-xs tracking-widest uppercase">Explore</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
