import { useHealth, useProducts } from "@/features/catalog/queries";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const { data: health } = useHealth();
  const { data: products = [], isLoading } = useProducts({ limit: 8, sort: "popular" });

  return (
    <div className="space-y-10">
      <section className="card p-8 text-center">
        <h1 className="text-3xl md:text-5xl">MonisTech</h1>
        <p className="mt-2 text-lg opacity-80">Rare finds. Refined taste.</p>
        <div className="mt-2 text-xs opacity-60">API: {health ? "connected" : "…"} </div>
      </section>

      <section>
        <h2 className="text-2xl mb-4">New Arrivals</h2>
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div className="card h-72 animate-pulse" key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((p) => <ProductCard key={p._id} p={p} />)}
          </div>
        )}
      </section>
    </div>
  );
}
