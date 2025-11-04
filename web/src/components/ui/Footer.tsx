export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/60">
      <div className="container mx-auto px-4 py-8 text-sm flex flex-col md:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} MonisTech — Rare finds. Refined taste.</p>
        <div className="opacity-70">Crafted with care.</div>
      </div>
    </footer>
  );
}
