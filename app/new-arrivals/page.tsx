import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  detail: string;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "TECH SHELL HOODIE",
    price: "$185.00",
    detail: "MATTE BLACK / GORE-TEX",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    badge: "NEW",
  },
  {
    id: 2,
    name: "ALPINE CARGO PANT",
    price: "$220.00",
    detail: "LUNAR GREY / UTILITY",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
    badge: "NEW",
  },
  {
    id: 3,
    name: "PRO SHELL JACKET",
    price: "$450.00",
    detail: "GHOST WHITE / THERMAL",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
    badge: "NEW",
  },
  {
    id: 4,
    name: "AERO GRIP SNEAKER",
    price: "$275.00",
    detail: "CORE BLACK / SYNTHETIC",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80",
    badge: "NEW",
  },
  {
    id: 5,
    name: "ESSENTIAL BASE LAYER",
    price: "$65.00",
    detail: "OPTIC WHITE / JERSEY",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
    badge: "NEW",
  },
  {
    id: 6,
    name: "STEALTH TECH BACKPACK",
    price: "$195.00",
    detail: "MATTE BLACK / CORDURA",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    badge: "NEW",
  },
  {
    id: 7,
    name: "AERO FLUX RUNNER",
    price: "$295.00",
    detail: "CONCRETE / KNIT",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    badge: "NEW",
  },
  {
    id: 8,
    name: "STORM SHELL PARKA",
    price: "$525.00",
    detail: "SLATE BLACK / WATERPROOF",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=800&q=80",
    badge: "NEW",
  },
];

export default function NewArrivalsPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />

      <main className="pb-20">
        {/* Title Section */}
        <div className="py-16 text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            New Arrivals
          </h1>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
            Limited Technical Performance Drops
          </p>
        </div>

        {/* Filter Bar */}
        <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
            <div className="flex items-center gap-6 md:gap-8 overflow-x-auto no-scrollbar">
              {["Category", "Size", "Color", "Price"].map((filter) => (
                <button
                  key={filter}
                  className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide hover:text-gray-600 transition-colors whitespace-nowrap"
                >
                  {filter}
                  <ChevronDown className="w-3 h-3" />
                </button>
              ))}
            </div>
            <div className="hidden sm:block text-xs font-medium text-gray-400 uppercase tracking-wide">
              Showing 24 Results
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative aspect-4/5 bg-gray-100 rounded-2xl overflow-hidden mb-4">
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-10 bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {product.badge}
                    </div>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>

                {/* Product Info */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900 leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500 mt-1">
                      {product.detail}
                    </p>
                  </div>
                  <span className="text-sm font-bold text-gray-900">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-20 gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors border border-gray-200">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold uppercase tracking-widest text-black">
              Page 01 / 04
            </span>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors border border-gray-200">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="bg-gray-50 rounded-4xl py-24 text-center px-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Never Miss a Drop
            </h2>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-10">
              Early access and private release notifications
            </p>
            
            <div className="max-w-md mx-auto relative flex items-center">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-white h-12 rounded-full px-6 text-xs font-bold placeholder:text-gray-300 outline-none border border-transparent focus:border-gray-200 transition-colors uppercase tracking-wide"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-black text-white px-6 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
