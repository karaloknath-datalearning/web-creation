import { MapPin, CalendarDays, Package, PhoneCall } from 'lucide-react';

const steps = [
  {
    icon: <CalendarDays size={20} />,
    step: '01',
    title: 'Choose Your Plan',
    desc: 'Order daily, weekly, or as a one-time purchase. No lock-ins, cancel anytime.',
  },
  {
    icon: <Package size={20} />,
    step: '02',
    title: 'We Prepare Fresh',
    desc: 'Your order is made fresh after 8 PM and packed in eco-friendly, insulated packaging.',
  },
  {
    icon: <MapPin size={20} />,
    step: '03',
    title: 'Doorstep Delivery',
    desc: 'Delivered between 6–8 AM so your family wakes up to fresh, cold dairy every morning.',
  },
  {
    icon: <PhoneCall size={20} />,
    step: '04',
    title: 'Dedicated Support',
    desc: 'Questions, changes, or special requests — our team is reachable 7 days a week.',
  },
];

export default function DeliverySection() {
  return (
    <section id="delivery" className="bg-brand-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-cream-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Delivery
            </span>
            <h2 className="text-white text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5">
              Fresh at Your Door
              <br />
              Every Morning.
            </h2>
            <p className="text-stone-400 text-base lg:text-lg leading-relaxed mb-8">
              We cover all major localities within a 25 km radius of our dairy. Same-day subscriptions and one-time orders are both available.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {['Jaipur', 'Ajmer', 'Tonk', 'Dausa', 'Alwar'].map((city) => (
                <span
                  key={city}
                  className="px-4 py-1.5 rounded-full border border-stone-600 text-stone-300 text-sm"
                >
                  {city}
                </span>
              ))}
              <span className="px-4 py-1.5 rounded-full border border-cream-400/40 text-cream-400 text-sm">
                + More
              </span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-cream-300 hover:bg-cream-400 text-brand-dark font-semibold rounded-full text-sm transition-all duration-300 hover:shadow-lg"
            >
              Check My Area
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {steps.map((s) => (
              <div
                key={s.step}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cream-300/20 flex items-center justify-center text-cream-300">
                    {s.icon}
                  </div>
                  <span className="text-stone-600 text-2xl font-bold">{s.step}</span>
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{s.title}</h4>
                <p className="text-stone-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
