import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="card p-8 text-center">
      <h1 className="text-3xl">Page not found</h1>
      <Link to="/" className="underline mt-4 inline-block">Go home</Link>
    </div>
  );
}
