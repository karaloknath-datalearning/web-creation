import { Shield, Truck, Clock, HeartHandshake, Microscope, Award } from 'lucide-react';

const features = [
  {
    icon: <Award size={22} />,
    title: 'FSSAI Certified',
    desc: 'Every batch is tested and certified for safety and quality before it leaves our dairy.',
  },
  {
    icon: <Microscope size={22} />,
    title: 'Lab Tested Daily',
    desc: 'We run daily quality checks on fat content, hygiene, and freshness for complete peace of mind.',
  },
  {
    icon: <Truck size={22} />,
    title: 'Morning Delivery',
    desc: 'Orders placed before 8 PM are delivered fresh by 7 AM the next morning.',
  },
  {
    icon: <Clock size={22} />,
    title: 'Same-Day Freshness',
    desc: 'We produce only what is ordered. No stockpiling, no stale products, ever.',
  },
  {
    icon: <Shield size={22} />,
    title: 'No Preservatives',
    desc: 'Our products carry no artificial colour, flavour, or preservatives of any kind.',
  },
  {
    icon: <HeartHandshake size={22} />,
    title: 'Farmer-First',
    desc: 'We pay our farmers fairly and work with the same families we have for over a decade.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="why-us" className="bg-cream-100 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-mid text-xs font-semibold tracking-widest uppercase mb-3">
            Why Matka Fresh
          </span>
          <h2 className="text-brand-dark text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Quality You Can Taste
          </h2>
          <p className="text-stone-500 text-base lg:text-lg max-w-lg mx-auto leading-relaxed">
            We hold ourselves to standards that go far beyond what regulations require.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-7 border border-cream-200 hover:border-cream-300 hover:shadow-md transition-all duration-300 group"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-11 h-11 rounded-xl bg-cream-100 group-hover:bg-cream-200 flex items-center justify-center text-brand-mid mb-5 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-brand-dark font-bold text-base mb-2">{f.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
