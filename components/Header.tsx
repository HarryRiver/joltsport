"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, User } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter text-black"
          >
            JOLT.
          </Link>
        </div>

        {/* Navigation - Hidden on mobile for simplicity in this demo */}
        <nav className="hidden md:flex items-center gap-8">
          {["SHOP", "CATEGORIES", "NEW ARRIVALS", "ARCHIVES"].map((item) => {
            const href = item === "SHOP" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`;
            const isActive = pathname === href;
            
            return (
              <Link
                key={item}
                href={href}
                className={`text-xs font-bold tracking-widest transition-colors ${
                  isActive 
                    ? "text-black border-b-2 border-black pb-1" 
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search collection"
              className="h-9 w-64 rounded-full bg-gray-100 pl-9 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all"
            />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ShoppingBag className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
