import { useParams } from "react-router-dom";
import { useProductBySlug } from "@/features/catalog/queries";
import { useCart } from "@/store/cart";
import { Button } from "@/components/ui/button";

export default function Product() {
  const { slug = "" } = useParams();
  const { data: p, isLoading } = useProductBySlug(slug);
  const add = useCart(s => s.add);

  if (isLoading) return <div className="card p-6">Loading...</div>;
  if (!p) return <div className="card p-6">Not found.</div>;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <img
        src={p.assets?.main || "https://via.placeholder.com/800x800?text=MonisTech"}
        alt={p.title}
        className="w-full rounded-2xl"
      />
      <div>
        <h1 className="text-3xl">{p.title}</h1>
        <p className="opacity-70 mt-1">{p.brand}</p>
        <p className="mt-4 text-2xl font-semibold">₹ {p.pricing.price.toLocaleString()}</p>
        <div className="mt-6">
          <Button onClick={() => add(p, 1)} className="w-full md:w-auto">Add to cart</Button>
        </div>
        <p className="mt-6 opacity-80">{p.description || "Premium, rare, and refined."}</p>
      </div>
    </div>
  );
}
