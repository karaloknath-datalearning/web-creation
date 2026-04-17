export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  unit: string;
  image: string;
  tag?: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  review: string;
  rating: number;
}

export interface NavLink {
  label: string;
  href: string;
}
