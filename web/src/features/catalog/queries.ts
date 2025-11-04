import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import type { Product } from "@/lib/types";

export function useHealth() {
  return useQuery({
    queryKey: ["healthz"],
    queryFn: async () => (await api.get("/healthz")).data,
  });
}

export function useProducts(params?: Record<string, string | number>) {
  return useQuery({
    queryKey: ["products", params],
    queryFn: async () => {
      const res = await api.get("/products", { params });
      // Expected shape: { data: Product[], total, page, limit }
      const data = res.data?.data ?? res.data ?? [];
      return data as Product[];
    },
  });
}

export function useProductBySlug(slug: string) {
  return useQuery({
    queryKey: ["product", slug],
    enabled: !!slug,
    queryFn: async () => {
      const res = await api.get(`/products/${slug}`);
      return (res.data?.data ?? res.data) as Product;
    },
  });
}
