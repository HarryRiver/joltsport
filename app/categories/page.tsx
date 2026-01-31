
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="mb-12">
            <h5 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Collections Hub</h5>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
                Define Your<br/>Landscape.
            </h1>
            <p className="max-w-xl text-sm md:text-base font-medium text-gray-600 uppercase tracking-wide">
                Explore the complete Jolt universe. Technical precision meets minimal aesthetics across every layer.
            </p>
        </div>

        {/* Categories Grid */}
        <div className="flex flex-col gap-4">
            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                {/* Outerwear - Tall */}
                <div className="group relative h-[600px] md:h-[700px] w-full overflow-hidden rounded-2xl">
                     <Image
                        src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=800"
                        alt="Outerwear"
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                     <div className="absolute bottom-6 left-6">
                        <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">Outerwear</h2>
                     </div>
                </div>

                {/* Footwear - Short/Wide */}
                <div className="group relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-2xl">
                     <Image
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800"
                        alt="Footwear"
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                     <div className="absolute bottom-6 left-6">
                        <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">Footwear</h2>
                     </div>
                </div>
            </div>

            {/* Bottom Row: Tops, Bottoms, Accessories */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 {/* Tops */}
                 <div className="group relative aspect-4/5 w-full overflow-hidden rounded-2xl">
                     <Image
                        src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800"
                        alt="Tops"
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                     <div className="absolute bottom-6 left-6">
                        <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white">Tops</h2>
                     </div>
                 </div>

                 {/* Bottoms */}
                 <div className="group relative aspect-4/5 w-full overflow-hidden rounded-2xl">
                     <Image
                        src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800"
                        alt="Bottoms"
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                     <div className="absolute bottom-6 left-6">
                        <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white">Bottoms</h2>
                     </div>
                 </div>

                 {/* Accessories */}
                 <div className="group relative aspect-4/5 w-full overflow-hidden rounded-2xl">
                     <Image
                        src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800"
                        alt="Accessories"
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                     <div className="absolute bottom-6 left-6">
                        <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-white">Accessories</h2>
                     </div>
                 </div>
             </div>
             
             {/* New Arrivals Banner */}
             <div className="group relative h-[400px] w-full overflow-hidden rounded-2xl">
                 <Image
                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200"
                    alt="New Arrivals"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-black/40" />
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-white">Summer 24</p>
                    <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white mb-8">
                        New Arrivals
                    </h2>
                    <button className="rounded-full border border-white px-8 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors">
                        Shop Latest
                    </button>
                 </div>
             </div>



        </div>
      </main>
      
      <Footer />
    </div>
  );
}
