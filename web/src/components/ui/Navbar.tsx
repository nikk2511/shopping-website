import { Link, NavLink } from "react-router-dom";
import { useCart } from "@/store/cart";
import { Search, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function Navbar() {
  const totalQty = useCart(s => s.totalQty);
  const [isDarkMode, setDarkMode] = useDarkMode();

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-black/5 dark:bg-mt-black/70 dark:border-white/5">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-xl">
          <span className="text-mt-black dark:text-white">Monis</span><span className="text-mt-gold">Tech</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <NavLink to="/shop" className="hover:text-mt-gold">Shop</NavLink>
          <NavLink to="/account" className="hover:text-mt-gold">Account</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" aria-label="Search"><Search className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon" aria-label="Toggle dark mode" onClick={() => setDarkMode(!isDarkMode)}>
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Link to="/cart" className="relative">
            <Button variant="outline">Cart ({totalQty})</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
