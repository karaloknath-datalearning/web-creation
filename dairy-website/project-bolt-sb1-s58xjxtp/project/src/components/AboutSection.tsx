import { Leaf, FlameKindling, Droplets } from 'lucide-react';

const pillars = [
  {
    icon: <Leaf size={20} />,
    title: 'Grass-Fed Cows',
    desc: 'Our cows graze freely on open pastures, naturally producing richer, more nutritious A2 milk.',
  },
  {
    icon: <FlameKindling size={20} />,
    title: 'Matka Method',
    desc: 'Clay matkas breathe, naturally thickening curd and butter without refrigeration or chemicals.',
  },
  {
    icon: <Droplets size={20} />,
    title: 'Zero Additives',
    desc: 'Every product leaves our dairy exactly as nature intended — pure, honest, and clean.',
  },
];

export default function AboutSection() {
  return (
    <section id="story" className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md">
              <img
                src="https://images.pexels.com/photos/735966/pexels-photo-735966.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dairy Farm"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 lg:right-8 bg-cream-100 border border-cream-200 rounded-2xl p-5 shadow-xl max-w-[180px]">
              <div className="text-brand-dark text-3xl font-bold">15+</div>
              <div className="text-stone-500 text-sm mt-0.5 leading-snug">Years of crafting pure dairy</div>
            </div>
            <div className="absolute -top-6 -left-6 lg:left-2 w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <img
                src="https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Cows"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <span className="inline-block text-brand-mid text-xs font-semibold tracking-widest uppercase mb-4">
              Our Story
            </span>
            <h2 className="text-brand-dark text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
              Rooted in Tradition,
              <br />
              <span className="text-brand-mid">Refined for Today.</span>
            </h2>
            <p className="text-stone-500 text-base lg:text-lg leading-relaxed mb-6">
              Matka Fresh was born from a simple belief: the best dairy is the kind made slowly, carefully, and without shortcuts. What started as a small family dairy in the heart of Rajasthan has grown into a modern operation that still honours every age-old technique.
            </p>
            <p className="text-stone-500 text-base leading-relaxed mb-10">
              We use traditional clay matkas to set our curd, the ancient bilona method to churn our ghee, and source exclusively from A2 desi cows. The result is dairy that tastes the way it was always meant to.
            </p>

            <div className="space-y-5">
              {pillars.map((p) => (
                <div key={p.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-cream-100 flex items-center justify-center text-brand-mid mt-0.5">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="text-brand-dark font-semibold text-sm mb-0.5">{p.title}</h4>
                    <p className="text-stone-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
