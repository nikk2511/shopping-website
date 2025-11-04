import { useParams, Link } from "react-router-dom";
export default function OrderSuccess() {
  const { orderNo } = useParams();
  return (
    <div className="card p-8 text-center">
      <h1 className="text-3xl">Thank you!</h1>
      <p className="mt-2">Your order <strong>{orderNo}</strong> was placed successfully.</p>
      <Link to="/shop" className="underline mt-4 inline-block">Continue shopping</Link>
    </div>
  );
}

