import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="relative bg-cream-200 py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1435706/pexels-photo-1435706.jpeg?auto=compress&cs=tinysrgb&w=1200)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <span className="inline-block text-brand-mid text-xs font-semibold tracking-widest uppercase mb-4">
          Stay Fresh
        </span>
        <h2 className="text-brand-dark text-4xl lg:text-5xl font-bold tracking-tight mb-5 leading-tight">
          Get 10% Off Your
          <br />
          First Order
        </h2>
        <p className="text-stone-600 text-base lg:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          Subscribe to our newsletter for seasonal offers, new product launches, and dairy wisdom straight from the farm.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-green-700 bg-green-50 border border-green-200 rounded-2xl px-8 py-5 max-w-md mx-auto">
            <CheckCircle2 size={20} />
            <span className="font-semibold text-sm">You are in! Check your inbox for your discount code.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3.5 rounded-full border border-cream-300 bg-white text-brand-dark placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-cream-400 transition"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-dark hover:bg-brand-mid text-white font-semibold rounded-full text-sm transition-all duration-300 hover:shadow-lg whitespace-nowrap"
            >
              Claim Offer
              <ArrowRight size={15} />
            </button>
          </form>
        )}

        <p className="text-stone-400 text-xs mt-4">No spam. Unsubscribe anytime. We respect your inbox.</p>
      </div>
    </section>
  );
}
