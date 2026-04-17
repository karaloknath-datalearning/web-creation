export default function MatkaSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-cream-50">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/5765/food-healthy-grain-raw.jpg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      />
      <div className="absolute inset-0 bg-brand-dark/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <span className="inline-block text-cream-300 text-xs font-semibold tracking-widest uppercase mb-4">
          Our Signature Technique
        </span>
        <h2 className="text-white text-4xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
          The Matka Method
        </h2>
        <p className="text-white/75 text-base lg:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
          Clay matkas are porous — they breathe. As our curd sets inside, moisture escapes slowly, creating a naturally dense, thick texture that no steel container or fridge can replicate. It is science dressed as tradition.
        </p>
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-12">
          {[
            { label: 'Naturally Thicker', value: '2×' },
            { label: 'More Probiotic', value: '40%' },
            { label: 'Setting Time', value: '8h' },
          ].map((s) => (
            <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/15">
              <div className="text-cream-300 text-3xl font-bold mb-1">{s.value}</div>
              <div className="text-white/60 text-xs tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
