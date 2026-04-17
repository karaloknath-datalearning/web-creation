import { useState } from 'react';
import { ShoppingCart, Plus } from 'lucide-react';
import { products } from '../data/products';

const categories = ['All', 'milk', 'curd', 'paneer', 'ghee', 'butter', 'buttermilk'];

const categoryLabels: Record<string, string> = {
  All: 'All',
  milk: 'Milk',
  curd: 'Curd',
  paneer: 'Paneer',
  ghee: 'Ghee',
  butter: 'Butter',
  buttermilk: 'Buttermilk',
};

export default function ProductsSection() {
  const [active, setActive] = useState('All');
  const [added, setAdded] = useState<number | null>(null);

  const filtered = active === 'All' ? products : products.filter((p) => p.category === active);

  const handleAdd = (id: number) => {
    setAdded(id);
    setTimeout(() => setAdded(null), 1200);
  };

  return (
    <section id="products" className="bg-cream-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="inline-block text-brand-mid text-xs font-semibold tracking-widest uppercase mb-3">
            Our Range
          </span>
          <h2 className="text-brand-dark text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            From Farm to Table
          </h2>
          <p className="text-stone-500 text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
            Every product is made in small batches with zero additives, preservatives, or artificial flavours.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-brand-dark text-cream-100 shadow-md'
                  : 'bg-white text-stone-500 hover:text-brand-dark border border-stone-200 hover:border-stone-300'
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 border border-stone-100"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.tag && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-cream-300 text-brand-dark text-xs font-bold rounded-full tracking-wide">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-brand-dark text-lg font-bold mb-1.5 tracking-tight">
                  {product.name}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4 min-h-[48px]">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-brand-dark text-xl font-bold">{product.price}</span>
                    <span className="text-stone-400 text-xs ml-1">{product.unit}</span>
                  </div>
                  <button
                    onClick={() => handleAdd(product.id)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      added === product.id
                        ? 'bg-green-100 text-green-700'
                        : 'bg-cream-200 hover:bg-cream-300 text-brand-dark'
                    }`}
                  >
                    {added === product.id ? (
                      <>Added!</>
                    ) : (
                      <>
                        <Plus size={14} />
                        Add
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#delivery"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-dark hover:bg-brand-mid text-white font-semibold rounded-full text-sm transition-all duration-300 hover:shadow-lg"
          >
            <ShoppingCart size={16} />
            View Delivery Options
          </a>
        </div>
      </div>
    </section>
  );
}
