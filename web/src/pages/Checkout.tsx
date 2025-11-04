import { useCart } from "@/store/cart";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Checkout() {
  const { subtotal } = useCart();
  return (
    <div className="card p-6">
      <h1 className="text-2xl mb-4">Checkout</h1>
      <p>Payment integration will go here. Subtotal: ₹ {subtotal.toLocaleString()}</p>
      <Link to="/order/MT-DEMO-123"><Button className="mt-4">Place order (demo)</Button></Link>
    </div>
  );
}
