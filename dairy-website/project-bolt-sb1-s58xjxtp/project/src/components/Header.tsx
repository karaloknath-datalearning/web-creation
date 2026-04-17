import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Milk } from 'lucide-react';

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Our Story', href: '#story' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Delivery', href: '#delivery' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-stone-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18 py-4">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-cream-300 flex items-center justify-center group-hover:bg-cream-400 transition-colors">
            <Milk className="w-4.5 h-4.5 text-brand-dark" size={18} />
          </div>
          <div>
            <span
              className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-brand-dark' : 'text-white'
              }`}
            >
              Matka
            </span>
            <span
              className={`font-light text-lg tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-brand-mid' : 'text-cream-200'
              }`}
            >
              Fresh
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-cream-400 ${
                scrolled ? 'text-stone-600' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            className={`relative p-2 rounded-full transition-colors ${
              scrolled ? 'text-stone-600 hover:text-brand-dark' : 'text-white/90 hover:text-white'
            }`}
          >
            <ShoppingBag size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-cream-400 rounded-full"></span>
          </button>
          <a
            href="#products"
            className="px-5 py-2.5 bg-cream-300 hover:bg-cream-400 text-brand-dark text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-md"
          >
            Order Now
          </a>
        </div>

        <button
          className={`lg:hidden p-2 transition-colors ${
            scrolled ? 'text-stone-700' : 'text-white'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100 px-6 py-6 flex flex-col gap-5 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-stone-700 text-sm font-medium hover:text-brand-mid transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#products"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center px-5 py-2.5 bg-cream-300 hover:bg-cream-400 text-brand-dark text-sm font-semibold rounded-full transition-all"
          >
            Order Now
          </a>
        </div>
      )}
    </header>
  );
}
