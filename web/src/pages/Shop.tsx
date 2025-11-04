import { useProducts } from "@/features/catalog/queries";
import ProductCard from "./components/ProductCard";
import { useSearchParams } from "react-router-dom";

export default function Shop() {
  const [params] = useSearchParams();
  const q = Object.fromEntries(params.entries());
  const { data: products = [], isLoading } = useProducts(q);

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl">Shop</h1>
      </header>
      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 12 }).map((_, i) => <div className="card h-72 animate-pulse" key={i} />)}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((p) => <ProductCard key={p._id} p={p} />)}
        </div>
      )}
    </div>
  );
}

