export type Product = {
  _id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  brand?: string;
  assets?: { main: string; gallery?: string[] };
  pricing: { price: number; mrp?: number; currency: string };
  ratings?: { avg: number; count: number };
};
