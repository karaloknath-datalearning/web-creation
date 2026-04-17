import { Milk, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const products = ['Full Cream Milk', 'Matka Dahi', 'Fresh Paneer', 'Desi Ghee', 'White Butter', 'Masala Chaas'];
const company = ['Our Story', 'Farm Tour', 'Careers', 'Press', 'Blog'];
const support = ['Track Order', 'Delivery Areas', 'FAQ', 'Returns', 'Contact Us'];

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-dark text-stone-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-full bg-cream-300/20 flex items-center justify-center">
                <Milk size={17} className="text-cream-300" />
              </div>
              <div>
                <span className="font-bold text-lg text-white tracking-tight">Matka</span>
                <span className="font-light text-lg text-cream-400 tracking-tight">Fresh</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs text-stone-500">
              Pure dairy crafted with tradition, delivered with care. From our family to yours — every single morning.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-cream-400 mt-0.5 flex-shrink-0" />
                <span>NH-48, Dudu Road, Near Shivdaspura, Jaipur, Rajasthan 303006</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-cream-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-cream-300 transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-cream-400 flex-shrink-0" />
                <a href="mailto:hello@matkafresh.in" className="hover:text-cream-300 transition-colors">
                  hello@matkafresh.in
                </a>
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-white text-sm font-semibold mb-5 tracking-wide">Products</h5>
            <ul className="space-y-3">
              {products.map((p) => (
                <li key={p}>
                  <a href="#products" className="text-sm hover:text-cream-300 transition-colors">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white text-sm font-semibold mb-5 tracking-wide">Company</h5>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c}>
                  <a href="#" className="text-sm hover:text-cream-300 transition-colors">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white text-sm font-semibold mb-5 tracking-wide">Support</h5>
            <ul className="space-y-3">
              {support.map((s) => (
                <li key={s}>
                  <a href="#" className="text-sm hover:text-cream-300 transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-600">
            &copy; {new Date().getFullYear()} Matka Fresh Dairy Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-stone-500 hover:text-cream-300 hover:border-cream-400/40 transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
          <div className="flex gap-4 text-xs text-stone-600">
            <a href="#" className="hover:text-stone-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
