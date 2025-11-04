import { useCart } from "@/store/cart";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Cart() {
  const { items, subtotal, remove, clear } = useCart();

  if (!items.length) {
    return (
      <div className="card p-8 text-center">
        <p>Your cart is empty.</p>
        <Link to="/shop"><Button className="mt-4">Start Shopping</Button></Link>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-4">
        {items.map(i => (
          <div key={i.productId} className="card p-4 flex gap-4">
            <img src={i.image || "https://via.placeholder.com/120"} className="w-24 h-24 rounded-lg object-cover" />
            <div className="flex-1">
              <div className="font-semibold">{i.title}</div>
              <div className="text-sm opacity-70">Qty: {i.qty}</div>
              <div className="mt-1">₹ {(i.price * i.qty).toLocaleString()}</div>
            </div>
            <Button variant="outline" onClick={() => remove(i.productId)}>Remove</Button>
          </div>
        ))}
        <Button variant="ghost" onClick={clear}>Clear cart</Button>
      </div>

      <aside className="card p-4 h-fit">
        <div className="flex justify-between text-lg">
          <span>Subtotal</span>
          <span>₹ {subtotal.toLocaleString()}</span>
        </div>
        <Link to="/checkout"><Button className="mt-4 w-full">Checkout</Button></Link>
      </aside>
    </div>
  );
}

