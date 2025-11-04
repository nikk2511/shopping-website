// // import { motion } from "framer-motion";
// // import { Link } from "react-router-dom";
// // import type { Product } from "@/lib/types";
// // import { Button } from "@/components/ui/button";
// // import { useCart } from "@/store/cart";

// // export default function ProductCard({ p }: { p: Product }) {
// //   const add = useCart(s => s.add);
// //   return (
// //     <motion.article
// //       whileHover={{ y: -4 }}
// //       className="card p-3"
// //     >
// //       <Link to={`/product/${p.slug}`} className="block">
// //         <img
// //           src={p.assets?.main || "https://via.placeholder.com/600x600?text=MonisTech"}
// //           alt={p.title}
// //           className="w-full aspect-square object-cover rounded-xl"
// //           loading="lazy"
// //         />
// //         <div className="mt-3">
// //           <h3 className="text-lg font-semibold">{p.title}</h3>
// //           <p className="text-sm opacity-70">{p.brand || "MonisTech"}</p>
// //           <p className="mt-1 font-semibold">₹ {p.pricing.price.toLocaleString()}</p>
// //         </div>
// //       </Link>
// //       <div className="mt-3">
// //         <Button className="w-full" onClick={() => add(p, 1)}>Add to cart</Button>
// //       </div>
// //     </motion.article>
// //   );
// // }
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// interface ProductCardProps {
//   id: string;
//   title: string;
//   price: number;
//   image: string;
// }

// export default function ProductCard({ id, title, price, image }: ProductCardProps) {
//   return (
//     <Card className="shadow-soft bg-white rounded-xl overflow-hidden transition hover:scale-[1.03] hover:shadow-xl duration-200 cursor-pointer">
//       <div className="relative w-full h-56 bg-gray-200 flex items-center justify-center overflow-hidden">
//         <img src={image} alt={title} className="w-full h-full object-cover" />
//         <Badge className="absolute top-2 left-2 bg-mt-gold text-black font-bold shadow-md">
//           New
//         </Badge>
//       </div>

//       <CardContent className="px-4 py-3 space-y-2">
//         <h3 className="font-display text-lg font-semibold truncate">{title}</h3>
//         <p className="text-mt-emerald font-bold text-xl">${price}</p>
//       </CardContent>

//       <CardFooter>
//         <Button className="w-full bg-mt-ink hover:bg-mt-gold hover:text-mt-ink transition font-medium">
//           Add to Cart
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// }
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, title, price, image }: ProductCardProps) {
  return (
    <Card className="shadow-soft bg-white rounded-xl overflow-hidden hover:scale-[1.03] transition cursor-pointer">
      <div className="relative w-full h-56 overflow-hidden">
        <img src={image} className="w-full h-full object-cover" alt={title} />
        <Badge className="absolute top-2 left-2 bg-mt-gold text-black">New</Badge>
      </div>

      <CardContent>
        <h3 className="font-display text-lg truncate">{title}</h3>
        <p className="text-mt-emerald font-bold text-xl">${price}</p>
      </CardContent>

      <CardFooter>
        <Button className="w-full bg-mt-ink hover:bg-mt-gold hover:text-mt-ink">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
