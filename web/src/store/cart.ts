import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/lib/types";

export type CartItem = {
  productId: string;
  title: string;
  price: number;
  qty: number;
  slug: string;
  image?: string;
};

type CartState = {
  items: CartItem[];
  add: (p: Product, qty?: number) => void;
  remove: (productId: string) => void;
  clear: () => void;
  totalQty: number;
  subtotal: number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (p, qty = 1) => {
        const items = [...get().items];
        const idx = items.findIndex(i => i.productId === p._id);
        if (idx >= 0) items[idx].qty += qty;
        else items.push({
          productId: p._id,
          title: p.title,
          price: p.pricing.price,
          qty,
          slug: p.slug,
          image: p.assets?.main
        });
        set({ items });
      },
      remove: (productId) => set({ items: get().items.filter(i => i.productId !== productId) }),
      clear: () => set({ items: [] }),
      get totalQty() {
        return get().items.reduce((n, i) => n + i.qty, 0);
      },
      get subtotal() {
        return get().items.reduce((n, i) => n + i.qty * i.price, 0);
      }
    }),
    { name: "mt-cart" }
  )
);
